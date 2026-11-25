#!/usr/bin/env bash
# Server-side release step for the CI pipeline. Receives a prebuilt standalone
# bundle at /tmp/usif-bundle.tgz (uploaded by the workflow), swaps it into the
# live directory, and restarts only the usif-web service. Health-checks the
# result and auto-rolls-back on failure so a bad release never takes the site
# down. Does not build anything and touches no other site on the host.
set -euo pipefail

APP="/var/www/usif"
SERVICE="usif-web"
BUNDLE="/tmp/usif-bundle.tgz"
HEALTH_URL="http://127.0.0.1:3000/"
KEEP_BACKUPS=5

test -f "$BUNDLE" || { echo "No bundle at $BUNDLE"; exit 1; }
TS=$(date +%Y%m%d-%H%M%S)

# Unpack the new release into a staging dir next to the live one.
STAGE="${APP}.new-$TS"
sudo -n rm -rf "$STAGE"
sudo -n mkdir -p "$STAGE"
sudo -n tar -C "$STAGE" -xzf "$BUNDLE"
test -f "$STAGE/server.js" || { echo "Bundle missing server.js"; sudo -n rm -rf "$STAGE"; exit 1; }
sudo -n chown -R www-data:www-data "$STAGE"

# Back up the current release for instant rollback, prune old backups.
if [ -d "$APP" ]; then
  sudo -n cp -a "$APP" "${APP}.bak-$TS"
fi
ls -dt ${APP}.bak-* 2>/dev/null | tail -n +$((KEEP_BACKUPS + 1)) | xargs -r sudo -n rm -rf

# Swap in the new release.
sudo -n rm -rf "$APP"
sudo -n mv "$STAGE" "$APP"

# Restart just this service and verify; roll back if it does not come up 200.
sudo -n systemctl restart "$SERVICE"
sleep 4
code=$(curl -s -o /dev/null -w '%{http_code}' "$HEALTH_URL" || echo 000)
if [ "$code" != "200" ]; then
  echo "Health check FAILED (HTTP $code) — rolling back"
  if [ -d "${APP}.bak-$TS" ]; then
    sudo -n rm -rf "$APP"
    sudo -n cp -a "${APP}.bak-$TS" "$APP"
    sudo -n systemctl restart "$SERVICE"
    echo "Rolled back to previous release."
  fi
  rm -f "$BUNDLE"
  exit 1
fi

rm -f "$BUNDLE"
echo "Released OK — HTTP $code, BUILD_ID=$(cat "$APP/.next/BUILD_ID" 2>/dev/null || echo n/a)"
