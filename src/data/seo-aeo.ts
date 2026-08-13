export const seoAeoHero = {
  titlePrefix: "SEO + AEO That Generates ",
  titleHighlight: "Revenue",
  titleSuffix: ", Not Just Rankings.",
  bannerImage: "/assets/img/seo/seo-hero-bg.webp",
  bannerImageAlt:
    "SEO and AEO dashboard visuals floating above a laptop, representing search and AI visibility",
  description:
    "Your customers are searching on Google, ChatGPT, Gemini, Claude, Perplexity and AI Search. Make sure your business is the one they discover.",
  tagline: "Rank Higher on Google. Get Recommended by AI.",
  primaryCta: { label: "Get Free SEO Audit", href: "/website-audit" },
  secondaryCta: { label: "Book Strategy Call", href: "/contact" },
  highlights: [
    { label: "Avg. organic lift", value: "320%" },
    { label: "Delivery start", value: "7 days" },
    { label: "Reporting", value: "Monthly" },
  ],
} as const;

export const seoAeoProblems = {
  title: { prefix: "Why Most Businesses Never ", highlight: "Rank", suffix: "" },
  description:
    "Rankings don't stall because you're unlucky. They stall because of a handful of fixable, measurable gaps. These are the ones we find in almost every audit.",
  items: [
    {
      icon: "TrendingDown",
      title: "Website not ranking",
      description:
        "You're on page four for terms your competitors own on page one, so buyers never see you.",
    },
    {
      icon: "Users",
      title: "No organic traffic",
      description:
        "Every visit is bought. The moment ad spend pauses, the pipeline goes quiet.",
    },
    {
      icon: "Timer",
      title: "Slow website",
      description:
        "Pages take four seconds to load and more than half of mobile visitors leave before seeing your offer.",
    },
    {
      icon: "Gauge",
      title: "Poor Core Web Vitals",
      description:
        "Failing LCP, INP and CLS scores quietly suppress your rankings on every mobile search.",
    },
    {
      icon: "Link2",
      title: "No backlinks",
      description:
        "Zero authority signals means Google has no reason to trust you over an established competitor.",
    },
    {
      icon: "FileText",
      title: "Weak content",
      description:
        "Thin pages written for nobody in particular, answering questions no customer actually asks.",
    },
    {
      icon: "Code2",
      title: "No Schema",
      description:
        "Without structured data, search engines have to guess what your business does — and they guess wrong.",
    },
    {
      icon: "Bot",
      title: "No AI visibility",
      description:
        "ChatGPT, Gemini and Perplexity recommend your competitors because your site was never built to be cited.",
    },
    {
      icon: "Quote",
      title: "No Featured Snippets",
      description:
        "The answer box above every result belongs to someone else, taking the click before you get one.",
    },
    {
      icon: "MapPin",
      title: "No Local SEO",
      description:
        "You're invisible in the map pack where high-intent, ready-to-buy local searches actually convert.",
    },
    {
      icon: "MousePointerClick",
      title: "Low conversions",
      description:
        "Traffic arrives, reads, and leaves. No clear next step, no call, no booking.",
    },
    {
      icon: "DollarSign",
      title: "High advertising costs",
      description:
        "Cost per lead climbs every quarter because paid is the only channel you own.",
    },
  ],
} as const;

export const seoAeoSolutions = {
  title: { prefix: "How Dezyon ", highlight: "Solves It", suffix: "" },
  description:
    "One system that fixes the foundation, earns authority, and makes your business the answer both search engines and AI assistants hand to buyers.",
  items: [
    {
      icon: "Wrench",
      title: "Technical SEO",
      description:
        "Crawlability, indexation, redirects, canonicals and sitemap hygiene fixed at the source.",
    },
    {
      icon: "Search",
      title: "Keyword Research",
      description:
        "We map the terms that carry buying intent, not the vanity terms that inflate a report.",
    },
    {
      icon: "PenTool",
      title: "Content Strategy",
      description:
        "A publishing plan built around real customer questions and the pages that close deals.",
    },
    {
      icon: "Sparkles",
      title: "AI Search Optimization",
      description:
        "Content structured so large language models can quote you accurately and confidently.",
    },
    {
      icon: "Bot",
      title: "AEO",
      description:
        "Answer Engine Optimization that positions your brand inside AI-generated recommendations.",
    },
    {
      icon: "Code2",
      title: "Schema Markup",
      description:
        "Organization, Service, LocalBusiness, FAQ and Breadcrumb schema validated and shipped.",
    },
    {
      icon: "Gauge",
      title: "Core Web Vitals",
      description:
        "LCP, INP and CLS tuned until every template passes on real mobile devices.",
    },
    {
      icon: "Link2",
      title: "Backlinks",
      description:
        "Editorial links from relevant, genuinely authoritative sites — no link farms, ever.",
    },
    {
      icon: "MapPin",
      title: "Local SEO",
      description:
        "Citations, service-area pages and review velocity that put you inside the map pack.",
    },
    {
      icon: "Building2",
      title: "Google Business Profile",
      description:
        "Fully optimized listing with posts, categories, Q&A and photos kept active every month.",
    },
    {
      icon: "Network",
      title: "Internal Linking",
      description:
        "A deliberate link architecture that pushes authority into the pages that earn revenue.",
    },
    {
      icon: "ChartColumn",
      title: "Monthly Reports",
      description:
        "Plain-English reporting tied to calls, bookings and revenue — not impressions.",
    },
  ],
} as const;

export const seoAeoComparison = {
  title: { prefix: "Two Search Worlds. ", highlight: "One Strategy", suffix: "" },
  description:
    "Traditional search still drives volume. AI assistants increasingly drive the decision. You need to win in both, and they are optimized very differently.",
  columns: [
    {
      id: "seo",
      label: "SEO",
      subtitle: "Search Engine Optimization",
      summary: "Getting found when someone types a query into a search engine.",
      items: [
        "Google Search",
        "Keywords",
        "Backlinks",
        "Technical SEO",
        "SERP Rankings",
        "Organic Traffic",
      ],
    },
    {
      id: "aeo",
      label: "AEO",
      subtitle: "Answer Engine Optimization",
      summary:
        "Getting recommended when someone asks an AI assistant who to hire.",
      items: [
        "ChatGPT",
        "Gemini",
        "Claude",
        "Perplexity",
        "Google AI Overview",
        "Entity Optimization",
        "Structured Data",
        "Semantic Content",
        "Answer Engine Optimization",
      ],
    },
  ],
} as const;

export const seoAeoDashboard = {
  title: { prefix: "Numbers Our Clients Actually ", highlight: "Report", suffix: "" },
  description:
    "Averages across active SEO and AEO retainers after six months of compounding work.",
  stats: [
    { label: "Organic Traffic", value: 320, prefix: "+", suffix: "%" },
    { label: "Keywords Ranked", value: 480, prefix: "+", suffix: "%" },
    { label: "Leads Generated", value: 240, prefix: "+", suffix: "%" },
    { label: "Conversion Rate", value: 190, prefix: "+", suffix: "%" },
  ],
  pageSpeed: { label: "PageSpeed", value: 98 },
  coreWebVitals: { label: "Core Web Vitals", status: "Passed" },
  progress: [
    { label: "Technical health", value: 96 },
    { label: "Content coverage", value: 88 },
    { label: "Domain authority", value: 74 },
    { label: "AI citation share", value: 81 },
  ],
  chart: {
    label: "Organic sessions",
    caption: "Last 12 months",
    points: [12, 18, 16, 27, 34, 41, 39, 55, 63, 72, 86, 100],
  },
} as const;

export const seoAeoTimeline = {
  title: {
    prefix: "A Six-Step ",
    highlight: "System",
    suffix: ", Not a Monthly Guess",
  },
  description:
    "Every engagement runs on the same sequence, so you always know what's happening and what comes next.",
  steps: [
    {
      title: "SEO Audit",
      description:
        "A full technical, content and authority teardown of your site plus the three competitors beating you.",
    },
    {
      title: "Strategy",
      description:
        "We agree on target keywords, priority pages and the revenue metric we're actually moving.",
    },
    {
      title: "Optimization",
      description:
        "Technical fixes, Core Web Vitals, schema and on-page work shipped in prioritized sprints.",
    },
    {
      title: "Content",
      description:
        "Money pages, service-area pages and answer-ready content written for humans and AI alike.",
    },
    {
      title: "Authority Building",
      description:
        "Editorial backlinks, citations, entity signals and reviews that compound your trust score.",
    },
    {
      title: "Monthly Growth",
      description:
        "Continuous testing, reporting and expansion into new keyword and AI-answer territory.",
    },
  ],
} as const;

export const seoAeoFeatures = {
  title: { prefix: "Everything In ", highlight: "One Engagement", suffix: "" },
  description:
    "No upsells for the basics. Every retainer includes the full stack below.",
  items: [
    {
      icon: "Wrench",
      title: "Technical SEO",
      description: "Crawl, index, speed and architecture fixed at the root.",
    },
    {
      icon: "PenTool",
      title: "Content Marketing",
      description: "Search-led content mapped to each stage of the buying journey.",
    },
    {
      icon: "Code2",
      title: "Schema",
      description: "Validated structured data across every important template.",
    },
    {
      icon: "Sparkles",
      title: "AI Search",
      description: "Visibility inside AI Overviews and assistant answers.",
    },
    {
      icon: "Bot",
      title: "AEO",
      description: "Entity and answer optimization for ChatGPT, Gemini and Claude.",
    },
    {
      icon: "Network",
      title: "Internal Linking",
      description: "Authority routed deliberately to your highest-value pages.",
    },
    {
      icon: "Gauge",
      title: "PageSpeed",
      description: "Core Web Vitals tuned until they pass on real devices.",
    },
    {
      icon: "MapPin",
      title: "Local SEO",
      description: "Map pack rankings, citations and service-area coverage.",
    },
    {
      icon: "Link2",
      title: "Backlinks",
      description: "Relevant editorial links from sites with genuine authority.",
    },
    {
      icon: "ChartLine",
      title: "Analytics",
      description: "GA4, Search Console and call tracking wired up correctly.",
    },
    {
      icon: "Target",
      title: "CRO",
      description: "Conversion testing so more of your traffic becomes revenue.",
    },
    {
      icon: "ListChecks",
      title: "Monthly Reports",
      description: "Clear reporting on rankings, leads and what ships next.",
    },
  ],
} as const;

export const seoAeoFaq = {
  title: { prefix: "Questions We Get ", highlight: "Every Week", suffix: "" },
  items: [
    {
      question: "How long does SEO take?",
      answer:
        "Technical wins and Core Web Vitals improvements usually show within the first 30 days. Meaningful ranking and traffic movement typically lands between months three and six, and compounds from there. Any agency promising page one in 30 days is selling you something that won't last.",
    },
    {
      question: "What is AEO?",
      answer:
        "AEO stands for Answer Engine Optimization. Instead of optimizing only for a list of blue links, it optimizes your business to be the answer that AI assistants like ChatGPT, Gemini, Claude and Perplexity give when someone asks for a recommendation. It relies on entity clarity, structured data and content written in a way models can quote confidently.",
    },
    {
      question: "Can ChatGPT recommend my business?",
      answer:
        "Yes. AI assistants pull from indexed web content, structured data and third-party mentions. When your entity is clearly defined, your services are marked up correctly, and credible sources reference you, you become a candidate answer. That is exactly what our AEO work is built to achieve.",
    },
    {
      question: "What is AI Search Optimization?",
      answer:
        "It is the practice of formatting content so large language models can parse, trust and cite it — clear question-and-answer structure, factual consistency across the web, schema markup, and unambiguous naming of your services, locations and expertise.",
    },
    {
      question: "Will you optimize my existing website?",
      answer:
        "In most cases yes. We start with an audit and only recommend a rebuild if the current platform is actively holding back performance, such as a page builder that makes Core Web Vitals impossible to pass. If a rebuild is the right call, we handle that too.",
    },
    {
      question: "Do I need SEO if I already run ads?",
      answer:
        "Ads stop the day you stop paying. SEO and AEO build an asset you own, and the two work better together — organic authority lowers your cost per lead, and paid data tells us which keywords deserve organic investment first.",
    },
    {
      question: "How do you measure success?",
      answer:
        "By calls, form submissions and booked appointments, not impressions. We wire up GA4, Search Console and call tracking at the start so every report ties back to pipeline rather than vanity metrics.",
    },
    {
      question: "Do you work with local service businesses?",
      answer:
        "Constantly. Home services, dental clinics, gyms, real estate and legal practices are some of our strongest verticals, because the map pack and AI recommendations both reward businesses that get local signals right.",
    },
    {
      question: "What happens in the free SEO audit?",
      answer:
        "We review your technical health, Core Web Vitals, content coverage, backlink profile, local signals and current AI visibility, then compare you against your top competitors. You get the findings and a prioritized action plan whether or not you hire us.",
    },
    {
      question: "Am I locked into a long contract?",
      answer:
        "No. We work on rolling monthly engagements. SEO rewards consistency, so most clients stay well past six months, but they stay because of results rather than a contract clause.",
    },
  ],
} as const;

export const seoAeoFinalCta = {
  titlePrefix: "Stop Chasing Customers. Let Customers ",
  titleHighlight: "Find You",
  titleSuffix: ".",
  description:
    "Get a free audit of your search and AI visibility, and a prioritized plan to fix what's costing you leads.",
  primaryCta: { label: "Free SEO Audit", href: "/website-audit" },
  secondaryCta: { label: "Book Consultation", href: "/contact" },
} as const;
