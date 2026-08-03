export const seoPage = {
  hero: {
    badge: "SEO Services",
    titlePrefix: "SEO Services That Actually",
    titleInline: "Show Up in",
    titleHighlight: "Rankings",
    titleSuffix: "Not Just Reports",
    bannerImage: "/assets/img/seo/seo-banner8.webp",
    bannerImageAlt: "SEO focus dial graphic for search engine optimization services",
    cta: {
      label: "Get a Free SEO Audit",
      href: "/website-audit",
    },
  },
  intro: {
    titlePrefix: "You're Not Bad at SEO.",
    titleHighlight: "You're Just Being Sold the Wrong Kind.",
    paragraphs: [
      "Here's what nobody tells you before you hire an SEO agency: most of them are selling you a monthly report, not a ranking.",
      "You've probably felt this already — you're paying every month, you get a PDF full of graphs, and your actual Google ranking hasn't moved in months. Sound familiar? You're not alone. It's the single most common complaint business owners have about SEO — not that it doesn't work, but that most agencies never explain why it's working (or isn't).",
    ],
    cta: {
      label: "Get a Free SEO Audit",
      href: "/website-audit",
    },
    image: "/assets/img/smart-feature/feature-image-02.webp",
    imageAlt: "Team reviewing search performance and marketing analytics",
  },
  problems: {
    titlePrefix: "The Real Problems Business Owners Have With SEO",
    titleHighlight: "(And Why They Keep Happening)",
    items: [
      {
        id: "rankings-stuck",
        title: "I'm paying for SEO every month and my rankings haven't moved.",
        description:
          "This is the #1 complaint across every small business forum and community. Most agencies lock you into a retainer with no clear milestones, no ranking targets, and no accountability. You're funding effort, not results.",
      },
      {
        id: "jargon",
        title: "SEO feels like a black box full of jargon.",
        description:
          "Backlinks, domain authority, crawl budget, schema markup — most business owners are handed a wall of jargon instead of a plan they can actually understand. If your SEO provider can't explain your strategy in plain English, that's a red flag, not a compliment to their expertise.",
      },
      {
        id: "ai-search",
        title: "I rank on Google but I'm invisible in AI search results.",
        description:
          "This one's new — and it's the biggest shift in SEO right now. AI-powered search results and zero-click answers mean traditional keyword rankings aren't enough anymore. If your content isn't structured for AI Overviews and answer engines, you're losing visibility even when your SEO is technically fine.",
      },
      {
        id: "no-leads",
        title: "My website traffic is fine, but I'm not getting more calls or leads.",
        description:
          "Ranking is not the goal — booked customers are. A page can rank #1 and still fail if it doesn't guide the visitor toward calling, booking, or filling out a form. Traffic without conversion is a vanity metric dressed up as a win.",
      },
      {
        id: "no-visibility",
        title: "I don't know if my SEO agency is even doing anything.",
        description:
          "No dashboards. No visibility into what changed. No explanation when rankings drop after a Google algorithm update. Just an invoice every 30 days.",
      },
      {
        id: "local",
        title: "Local customers still can't find me on Google Maps.",
        description:
          "For real estate agents, home services businesses, dentists, and clinics, local visibility matters more than national rankings — yet most generic SEO packages barely touch Google Business Profile optimization, local citations, or review generation.",
      },
    ],
  },
  approach: {
    titlePrefix: "What SEO Should",
    titleHighlight: "Actually Look Like",
    intro:
      "At Dezyon Studio, we build SEO strategy around one question: is this actually bringing in customers?",
    items: [
      {
        lead: "Technical SEO done right",
        body: "site speed, mobile-friendliness, structured data, and crawlability fixed at the foundation",
      },
      {
        lead: "Local SEO that gets you found nearby",
        body: "Google Business Profile optimization, local citations, and review strategy for real estate, home services, med spas, dental clinics, and other local-first businesses",
      },
      {
        lead: "Content built for both Google and AI search",
        body: "structured so your business shows up in traditional rankings and AI Overviews / answer engines, not just one or the other",
      },
      {
        lead: "Conversion-focused pages",
        body: "because ranking #1 means nothing if the page doesn't turn visitors into calls and bookings",
      },
      {
        lead: "Clear reporting, plain English",
        body: "you'll always know what changed, why it changed, and what we're doing next",
      },
    ],
    image: "/assets/img/features/feature-image-03.webp",
    imageAlt: "Business growth dashboard and search optimization visuals",
  },
  bottomLine: {
    titlePrefix: "The",
    titleHighlight: "Bottom Line",
    paragraphs: [
      "SEO isn't broken. The way most agencies sell it is. If you've been burned by vague reports, jargon, or rankings that never move — that's exactly the gap we close.",
    ],
    image: "/assets/img/seo/seo-6.webp",
    imageAlt: "Hand using stylus on analytics dashboard with blue bar charts",
  },
  cta: {
    titlePrefix: "Ready for SEO that shows up in rankings,",
    titleHighlight: "not just in reports?",
    paragraphs: [],
    button: {
      label: "Get in Touch",
      href: "/contact",
    },
  },
  banner: {
    src: "/assets/img/seo/seo-banner7.webp",
    alt: "Get SEO that ranks — contact Dezyon Studio",
    href: "/contact",
    width: 1280,
    height: 423,
  },
} as const;
