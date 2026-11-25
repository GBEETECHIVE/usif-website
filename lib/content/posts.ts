import type { StaticImageData } from "next/image";
import agentsFear from "@/assets/images/blogs/agents-dont-have-to-fear-premium-financing.jpg";
import agentsFearHero from "@/assets/images/blogs/agents-dont-have-to-fear-premium-financing-hero.jpg";
import affordable from "@/assets/images/blogs/premium-financing-makes-insurance-affordable.jpg";
import helpsAgency from "@/assets/images/blogs/how-premium-financing-helps-your-agency.jpg";
import benefits from "@/assets/images/blogs/benefits-of-premium-financing.jpg";
import network from "@/assets/images/blogs/how-to-network-as-an-insurance-agent.jpg";
import financeIndustry from "@/assets/images/blogs/finance-industry-and-commercial-policies.jpg";
import premierTexas from "@/assets/images/blogs/what-makes-usif-a-premier-finance-company-in-texas.jpg";
import choosing from "@/assets/images/blogs/choosing-an-insurance-financing-company.jpg";
import acrossLines from "@/assets/images/blogs/benefits-across-commercial-home-auto-life.jpg";
import { blogCopy } from "./blog-copy";

export type Category = "Finance" | "Premium Financing";

export interface InlineRun {
  text: string;
  bold: boolean;
  href?: string;
}

export type Block =
  | { type: "p"; text: string; runs?: readonly InlineRun[] }
  | { type: "heading"; text: string; runs?: readonly InlineRun[] }
  | { type: "listItem"; text: string; runs?: readonly InlineRun[] }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  title: string;
  /** ISO date, used for sorting and for <time dateTime>, when provided. */
  date?: string;
  categories: readonly Category[];
  excerpt: string;
  cover: StaticImageData;
  coverAlt: string;
  /** Blog Detail draws a wider crop above the article for the lead post. */
  hero?: StaticImageData;
  author: string;
  readingMinutes: number;
  body?: readonly Block[];
  tags?: readonly string[];
}

/**
 * Dates follow the article cards on the Blogs board. One correction: the card
 * for "Benefits of Premium Financing" prints January 14, 2025, which would sort
 * it below posts the board places after it. Every other card sits exactly five
 * years ahead of the same post's date in the Recent Posts rail (2026→2021,
 * 2025→2020), and that rail dates this one January 14, 2021 — so the card's
 * year is a typo for 2026, and the board's own running order confirms it.
 */
export const posts: readonly Post[] = [
  {
    slug: "agents-dont-have-to-fear-premium-financing",
    title: "Agents Don't Have To Fear Premium Financing Anymore",
    date: "2026-04-06",
    categories: ["Premium Financing"],
    excerpt:
      "Premium financing allows customers to make monthly payments on their premiums, so insureds do not have to pay the entire annual premium upfront. Some agents aren't fond of this option because they feel it is less profitable to them, but this is not the case, and agents have nothing…",
    cover: agentsFear,
    coverAlt: "An agent listening in a meeting with colleagues around a laptop",
    hero: agentsFearHero,
    author: "SEOteam",
    readingMinutes: 3,
    tags: [
      "Premium Financing",
      "Finance",
      "Premium Finance Company",
      "Premium Financing Houston",
      "Premium Insurance",
      "Finance Companies Houston",
    ],
    body: [
      {
        type: "p",
        text: "Premium financing allows customers to make monthly payments on their premiums, so insureds do not have to pay the entire annual premium upfront. Some agents aren't fond of this option because they feel it is less profitable to them, but this is not the case, and agents have nothing to fear.",
      },
      {
        type: "p",
        text: "The reality is that agents and brokers can profit from owning their own premium financing subsidiary, so it's better to proceed with this option instead of giving this business away. Agents can and should start their own premium financing company because they will earn higher profits from this operation while providing clients with the convenience of making payments over several months as opposed to one big payment up-front. It is a win-win situation for everyone involved, and agents will see higher profits as a result.",
      },
      {
        type: "p",
        text: "Launching this type of company may seem like a difficult thing to do, and while there is a lot of work involved, the benefits are definitely worth the effort. If you don't have your own premium financing company, agents will not earn much, but owning your own company will allow you to reap the benefits of this additional profit, and you will also be able to offer your customers the option of paying over a longer period of time, so you will see better results and higher earnings. If this seems complicated, you will be happy to know that there are systems that can help with the licensing process and will also provide you with the necessary forms and computer programs that are needed to get your premium financing function up and ready-to-go.",
      },
      {
        type: "quote",
        text: "It is a win-win situation for everyone involved, and agents will see higher profits as a result.",
      },
      {
        type: "p",
        text: "Once your company is running properly, an agent will be able to go online using that system and will be able to submit a finance agreement that will go right to their own premium finance company. Such systems will also take care of the backend work, will help with administration tasks, bookkeeping and management functions, so your agency will not need to hire any additional staff, nor will you need any additional equipment, so there really is nothing to fear. In the end, the process is actually quite simple, and the system that is in place will provide you with monthly management and accounting reports so that the owners of the premium finance company are aware of the operations.",
      },
      {
        type: "p",
        text: "The premium finance company that your agency uses will have the same telephone number and address as the system that was implemented, so borrowers will interact directly with that team and not your agency staff, so they will be able to focus on their daily responsibilities.",
      },
      {
        type: "p",
        text: "If you need more information regarding premium financing, US Insurance Fundings can provide you with additional details. We are one of the top finance companies in the Houston area and are experts when it comes to premium insurance and affordable rates, so if you'd like to learn more, contact us today!",
      },
    ],
  },
  // {
  //   slug: "premium-financing-makes-insurance-affordable",
  //   title: "How Premium Financing Can Make Insurance More Affordable",
  //   date: "2026-03-03",
  //   categories: ["Premium Financing"],
  //   excerpt:
  //     "When it comes to financing, it's important for both individuals and businesses to have access to affordable products. Not only should such products be attainable, these services must also be delivered in a sustainable way, and premium financing makes this a possibility because it allows more people to access…",
  //   cover: affordable,
  //   coverAlt: "Three colleagues reviewing paperwork at a meeting table",
  //   author: "SEOteam",
  //   readingMinutes: 3,
  // },
  {
    slug: "how-premium-financing-helps-your-agency",
    title: "How Premium Financing Can Help Your Agency",
    date: "2026-02-17",
    categories: ["Finance", "Premium Financing"],
    excerpt:
      "As an insurance agent or broker, your primary goal is to protect your clients and grow your book of business. In today's competitive market, closing a sale often hinges on a single obstacle: the upfront premium cost.",
    cover: helpsAgency,
    coverAlt: "Two people talking across a coffee table in a city apartment",
    author: "SEOteam",
    readingMinutes: 4,
    body: blogCopy["how-premium-financing-helps-your-agency"],
  },
  {
    slug: "benefits-of-premium-financing",
    title: "Benefits of Premium Financing",
    date: "2026-01-14",
    categories: ["Premium Financing"],
    excerpt:
      "In today's insurance landscape, offering flexible payment options isn't just a nice-to-have—it's a competitive necessity. Premium financing helps agencies deliver a higher level of customer service while protecting revenue and strengthening client relationships.",
    cover: benefits,
    coverAlt: "A family walking together along the shoreline at dusk",
    author: "SEOteam",
    readingMinutes: 6,
    body: blogCopy["benefits-of-premium-financing"],
  },
  // {
  //   slug: "how-to-network-as-an-insurance-agent",
  //   title: "How To Network As An Insurance Agent",
  //   date: "2025-12-29",
  //   categories: ["Finance"],
  //   excerpt:
  //     "When it comes to being an insurance agent, networking with your local community is incredibly important, especially if you're new to insurance. Here are some tips to help you build your network as an insurance agent. An Online Presence: Social media is an incredibly important vehicle for networking, both for…",
  //   cover: network,
  //   coverAlt: "A family embracing outdoors among trees",
  //   author: "SEOteam",
  //   readingMinutes: 3,
  // },
  // {
  //   slug: "finance-industry-and-commercial-policies",
  //   title: "The Finance Industry and how it relates to Premium Finance for Commercial Policies",
  //   date: "2025-12-15",
  //   categories: ["Finance"],
  //   excerpt:
  //     "When it comes to insurance, commercial policies are very different from residential ones and at first, commercial insurance premiums may seem high but they are extremely important to have. The good news is that you have options when it comes to financing commercial insurance premiums and it's important to…",
  //   cover: financeIndustry,
  //   coverAlt: "A family sitting together at a table at home",
  //   author: "SEOteam",
  //   readingMinutes: 3,
  // },
  // {
  //   slug: "what-makes-usif-a-premier-finance-company-in-texas",
  //   title: "What Makes USIF a Premier Finance Company in Texas?",
  //   date: "2025-12-04",
  //   categories: ["Finance"],
  //   excerpt:
  //     "If you're looking for a premier finance company in Texas, USIF is the answer. There are other insurance companies you can work with but our knowledge, expertise and customer service set us apart. We understand every client's individual needs and prepare policies based on this information. We listen to…",
  //   cover: premierTexas,
  //   coverAlt: "Two colleagues celebrating with a high five at a desk",
  //   author: "SEOteam",
  //   readingMinutes: 3,
  // },
  {
    slug: "choosing-an-insurance-financing-company",
    title: "What Should You Compare Before Choosing an Insurance Premium Finance Provider?",
    date: "2025-11-18",
    categories: ["Finance", "Premium Financing"],
    excerpt:
      "When a commercial insurance premium is due, the first available financing option may not be the most appropriate one for your business. Compare the full terms, understand the costs, and consider how the repayment arrangement fits your needs.",
    cover: choosing,
    coverAlt: "Three colleagues reviewing a document together in an office lobby",
    author: "SEOteam",
    readingMinutes: 4,
    body: blogCopy["choosing-an-insurance-financing-company"],
  },
  // {
  //   slug: "benefits-across-commercial-home-auto-life",
  //   title:
  //     "What Are The Benefits of Premium Financing For Commercial, Home, Auto, and Life Insurance?",
  //   date: "2025-10-15",
  //   categories: ["Finance"],
  //   excerpt:
  //     "Being a property owner is very rewarding; however, there are risks involved as well. A fire can break out at any time, a hurricane can hit or a car can be stolen from your parking lot. These are things that you cannot control and as much as you prepare,…",
  //   cover: acrossLines,
  //   coverAlt: "Three colleagues working through paperwork around a laptop",
  //   author: "SEOteam",
  //   readingMinutes: 3,
  // },
  {
    slug: "large-insurance-premium-business-cash-flow",
    title: "Large Insurance Premium Due? How Businesses Can Protect Their Cash Flow",
    date: "2026-01-14",
    categories: ["Premium Financing"],
    excerpt:
      "For many businesses, commercial insurance is an essential operating expense. Coverage helps businesses manage risks associated with their operations, property, liability, employees, equipment, and other business activities.",
    cover: financeIndustry,
    coverAlt: "A family sitting together at a table at home",
    author: "SEOteam",
    readingMinutes: 4,
    body: blogCopy["large-insurance-premium-business-cash-flow"],
  },
  {
    slug: "what-is-insurance-premium-financing",
    title: "What Is Insurance Premium Financing? A Plain-English Guide for Business Owners",
    categories: ["Finance", "Premium Financing"],
    excerpt:
      "When a business purchases commercial insurance, the premium can be a significant expense. Understanding insurance premium financing can help business owners decide whether it fits their financial needs.",
    cover: affordable,
    coverAlt: "Three colleagues reviewing paperwork at a meeting table",
    author: "SEOteam",
    readingMinutes: 4,
    body: blogCopy["what-is-insurance-premium-financing"],
  },
  {
    slug: "insurance-agents-premium-financing-client-experience",
    title: "How Insurance Agents Can Turn Premium Financing Into a Better Client Experience",
    categories: ["Finance", "Premium Financing"],
    excerpt:
      "Commercial insurance renewals involve more than reviewing coverage and issuing updated documents. They also require clear communication about premiums, payment deadlines, and the financial commitments associated with maintaining coverage.",
    cover: helpsAgency,
    coverAlt: "Two people talking across a coffee table in a city apartment",
    author: "SEOteam",
    readingMinutes: 4,
    body: blogCopy["insurance-agents-premium-financing-client-experience"],
  },
  {
    slug: "insurance-renewal-premium-payment-questions",
    title: "Insurance Renewal Season: Five Questions Every Business Should Ask About Premium Payments",
    categories: ["Finance", "Premium Financing"],
    excerpt:
      "Commercial insurance renewal is an opportunity to review more than policy documents. It is also a chance to prepare for the premium payment, assess its effect on cash flow, and understand available options before the deadline.",
    cover: choosing,
    coverAlt: "Three colleagues reviewing a document together in an office lobby",
    author: "SEOteam",
    readingMinutes: 5,
    body: blogCopy["insurance-renewal-premium-payment-questions"],
  },
];

export const postsNewestFirst = [...posts].sort((a, b) =>
  (b.date ?? "").localeCompare(a.date ?? ""),
);

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

/** Categories with their counts, as the Blogs sidebar prints them. */
export const categoryCounts: ReadonlyArray<{ name: Category; count: number }> = [
  { name: "Finance", count: 5 },
  { name: "Premium Financing", count: 3 },
];

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
