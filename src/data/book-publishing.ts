const BOOK_ASSETS = "/assets/img/about";
const BOOK_PUBLISHING_ASSETS = "/assets/img/book-publishing";

export const bookPublishingHero = {
  titlePrefix: "Self-Publish Your Book with ",
  titleHighlight: "Confidence",
  description:
    "Dezyon Studio helps authors move from finished manuscript to published book — with clear structure, accurate editing, professional formatting, and thoughtful cover design so every project meets retailer standards.",
  tagline: "From manuscript to marketplace — publish on Amazon, Kindle, and beyond.",
  cta: { label: "Start Your Book Project", href: "/contact" },
  bannerImage: `${BOOK_PUBLISHING_ASSETS}/hero-bg.jpg`,
  bannerImageAlt:
    "Author presenting in a professional workshop setting for book publishing services",
} as const;

export const bookPublishingIntro = {
  title: {
    prefix: "More Than Publishing",
    highlight: "Author Support",
  },
  paragraphs: [
    "Our team focuses on manuscript review, technical formatting, cover development, and platform submission so your book is presented with the best quality on every channel. We prepare files to meet each retailer's specifications and help you manage distribution across Amazon KDP, IngramSpark, Apple Books, Kobo, Barnes & Noble, Google Play, and more.",
    "Whether you're learning how to self-publish for the first time or scaling an existing catalog, Dezyon Studio removes the guesswork. We support print-on-demand publishing so physical copies are available without inventory risk — and we keep you informed at every milestone.",
  ],
  features: [
    { label: "Proofreading & Editing", tone: "impact" },
    { label: "Print & eBook Formatting", tone: "learn" },
    { label: "Multi-Platform Setup", tone: "schedule" },
    { label: "Cover & Author Branding", tone: "voice" },
  ] as const,
  visuals: {
    image: `${BOOK_ASSETS}/about-helps.webp`,
    imageAlt: "Author reviewing book publishing dashboard on a laptop",
  },
} as const;

export const bookPublishingServicesIntro = {
  titlePrefix: "Our Core ",
  titleHighlight: "Publishing Services",
  description:
    "We address every variable before submission — from file specifications to metadata accuracy. Here is an overview of the services we provide to support your self-publishing journey with Dezyon Studio.",
} as const;

export const bookPublishingServices = [
  {
    id: "editing",
    icon: "pen",
    title: "Proofreading & Editing",
    description:
      "We catch language errors that readers notice and reviewers cite. Clean copy is essential when self-publishing — credibility depends on polished text before finalization.",
  },
  {
    id: "formatting",
    icon: "layout",
    title: "Professional Formatting",
    description:
      "Print books require specific margins, gutters, and trim sizes while eBooks need reflowable layouts. Our team ensures your book stays readable and visually balanced on every device.",
  },
  {
    id: "platforms",
    icon: "upload",
    title: "Multi-Platform Publishing",
    description:
      "Each retailer accepts different file types. We prepare your book for Amazon KDP, IngramSpark, Apple Books, Kobo, and more — so you don't have to learn each system individually.",
  },
  {
    id: "cover",
    icon: "palette",
    title: "Cover Design & Branding",
    description:
      "A cover must work as a thumbnail, print jacket, and digital tile. We design for every medium while staying true to your genre's visual expectations and platform specs.",
  },
  {
    id: "audiobook",
    icon: "megaphone",
    title: "Audiobook Production",
    description:
      "Professional narration, audio editing, and distribution to Audible, Apple Books, Spotify, and Kobo — so listeners find your work wherever they shop for audiobooks.",
  },
  {
    id: "isbn",
    icon: "book",
    title: "ISBN & Copyright Guidance",
    description:
      "Each format typically requires its own ISBN and copyright. We walk you through compliance so your work is protected from the start with accurate cataloging data.",
  },
] as const;

export const bookPublishingStandOutIntro = {
  titlePrefix: "What Makes Our ",
  titleHighlight: "Services Stand Out",
  description:
    "Our organized preparation allows authors to publish smoothly while maintaining consistent presentation across digital and print platforms. Working with Dezyon Studio gives you access to perks our authors rely on.",
} as const;

export const bookPublishingStandOut = [
  {
    id: "every-stage",
    title: "Authors at Every Stage",
    description:
      "Whether you're publishing for the first time or have done it before, we meet you where you are and guide you through the process efficiently.",
  },
  {
    id: "informed",
    title: "You Stay Informed",
    description:
      "Regular check-ins at each milestone mean you track progress without chasing updates. Nothing gets left out.",
  },
  {
    id: "genres",
    title: "We Work Across Genres",
    description:
      "Fiction, nonfiction, memoir, business — each has its own audience and formatting nuances. We apply the right standards to each.",
  },
  {
    id: "ownership",
    title: "You Keep What You Earn",
    description:
      "We don't take royalties or claim ownership of your work. The book remains yours entirely — our role is to prepare it for publication.",
  },
  {
    id: "timeline",
    title: "Published On Time",
    description:
      "Most projects are completed within the agreed timeframe. We structure our process around efficiency without cutting corners.",
  },
  {
    id: "confidential",
    title: "We Respect You",
    description:
      "Your manuscript and personal information remain confidential. We never share or repurpose your work.",
  },
  {
    id: "revisions",
    title: "Satisfaction Guaranteed",
    description:
      "If revisions are needed, we make them until you approve the final version. Each round of feedback moves us closer to getting it right.",
  },
  {
    id: "support",
    title: "End-to-End Support",
    description:
      "Editing, formatting, cover design, and distribution happen under one workflow — one team instead of coordinating multiple vendors.",
  },
  {
    id: "platforms",
    title: "Platform Expertise",
    description:
      "We already know each retailer's rules, file specs, and metadata requirements — so you avoid the trial-and-error phase.",
  },
] as const;

export const bookPublishingProcessIntro = {
  titlePrefix: "Our Self-Publishing ",
  titleHighlight: "Process",
  description:
    "We designed our process to coordinate with authors and stay transparent about each step — from first consultation to live on platforms.",
} as const;

export const bookPublishingProcessSteps = [
  {
    id: "consultation",
    step: "1",
    title: "Consultation & Manuscript Review",
    description:
      "One-on-one guidance customized to your goals and timeline. We assess your manuscript, identify gaps in formatting or structure, and outline a clear path forward.",
    image: `${BOOK_ASSETS}/about-3.webp`,
    imageAlt: "Author discussing manuscript requirements with publishing team",
  },
  {
    id: "editing",
    step: "2",
    title: "Editing & Proofreading",
    description:
      "Expert editors review your work for inconsistencies and polish the final text — focusing on sentence flow, character consistency in fiction, and argument clarity in nonfiction.",
    image: `${BOOK_ASSETS}/about-4.webp`,
    imageAlt: "Editor reviewing manuscript content for publishing",
  },
  {
    id: "design",
    step: "3",
    title: "Formatting & Cover Design",
    description:
      "Platform-ready layouts and professional cover creation with all technical specifications — print-ready PDF, high-resolution JPEG, and thumbnail-optimized versions.",
    image: `${BOOK_ASSETS}/about-cta1.webp`,
    imageAlt: "Book cover and interior layout design in progress",
  },
  {
    id: "launch",
    step: "4",
    title: "Publishing & Launch Plan",
    description:
      "Listing optimization, worldwide distribution, and launch strategy — including metadata, categories, keywords, pre-order setup, and pricing across territories.",
    image: `${BOOK_ASSETS}/about-cta2.webp`,
    imageAlt: "Published book displayed on digital storefront",
  },
] as const;

export const bookPublishingPlatforms = {
  titlePrefix: "Publish Your Book ",
  titleHighlight: "Across All Platforms",
  description:
    "From manuscript to marketplace, we handle editing, formatting, and distribution so you can reach readers worldwide.",
  cta: { label: "Get a Free Consultation", href: "/contact" },
  secondaryCta: { label: "View Plans & Pricing", href: "/plans-and-pricing" },
} as const;

export const bookPublishingSupport = {
  title: {
    prefix: "Rely On Dezyon Studio For",
    highlight: "Publishing Support",
  },
  paragraphs: [
    "Many authors arrive with a finished manuscript but uncertainty about what comes next. We walk through the technical checklist together: file formats, trim sizes for print, reflowable layouts for eBooks, and audio specifications if you're pursuing an audiobook edition.",
    "You receive updates at each milestone — manuscript review complete, formatting finished, cover ready, submitted for distribution, and live on platforms. After publication, if any issues arise with file display or metadata syncing, we address them directly so you don't have to.",
  ],
  visuals: {
    image: `${BOOK_ASSETS}/hero-about-02.webp`,
    imageAlt: "Author celebrating successful book launch with publishing team",
  },
} as const;

export const bookPublishingStatsIntro = {
  eyebrow: "Our Track Record",
  titlePrefix: "Put Our Experience to Work for ",
  titleHighlight: "Your Book",
} as const;

export const bookPublishingStats = [
  { value: "9+", label: "Years Experience", sublabel: "In digital & publishing services" },
  { value: "500+", label: "Projects Delivered", sublabel: "Across all major genres" },
  { value: "15+", label: "Genres Covered", sublabel: "Fiction, nonfiction & more" },
  { value: "6+", label: "Platforms Supported", sublabel: "Amazon KDP, IngramSpark & more" },
] as const;

export const bookPublishingGenresIntro = {
  titlePrefix: "Self-Publish In Your ",
  titleHighlight: "Category of Choice",
  description:
    "We work across categories — from Amazon KDP publishing to global distribution. Whatever your genre, we align our process with its standards.",
} as const;

export const bookPublishingGenres = [
  { id: "business", label: "Business", href: "/contact" },
  { id: "self-help", label: "Self-Help", href: "/contact" },
  { id: "memoir", label: "Memoir", href: "/contact" },
  { id: "fiction", label: "Fiction", href: "/contact" },
  { id: "nonfiction", label: "Nonfiction", href: "/contact" },
  { id: "unsure", label: "Not Sure Yet", href: "/contact" },
] as const;

export const bookPublishingFaq = {
  title: {
    prefix: "Frequently Asked ",
    highlight: "Questions",
  },
  description:
    "Authors ask about cost, timelines, royalties, and platform logistics. Below are answers to the most common questions. If yours isn't listed, our team can address it during a consultation.",
  items: [
    {
      question: "How much does it cost to self-publish a book?",
      answer:
        "Cost varies based on services selected — editing, formatting, cover design, and distribution. Dezyon Studio provides a clear breakdown before any work begins with no hidden fees. You receive an itemized estimate so you can decide which services fit your budget.",
    },
    {
      question: "How long does publishing a book take?",
      answer:
        "Most projects are completed within the agreed timeline from final manuscript approval. Complex projects with extensive editing or custom design may take longer. We share milestones along the way so you know exactly when to expect each deliverable.",
    },
    {
      question: "Can you publish my book on Amazon and other platforms?",
      answer:
        "Yes. We handle Amazon KDP, IngramSpark, Apple Books, Kobo, Barnes & Noble, and Google Play after you choose the platforms. Each platform has its own file requirements and approval timeline, which we navigate on your behalf.",
    },
    {
      question: "Do I need an ISBN?",
      answer:
        "You can purchase your own ISBN or use one provided through distribution channels. We explain the options so you retain control. If you plan to sell in bookstores, we advise on which approach makes sense for your goals.",
    },
    {
      question: "How do royalties work across platforms?",
      answer:
        "Royalty structures differ by retailer. We show you the rates for each platform before submission so you know what to expect, and help you set prices that balance earnings with market expectations.",
    },
    {
      question: "Can you help with audiobook publishing?",
      answer:
        "Yes. We coordinate narration, audio editing, and distribution to audiobook retailers. Production timelines vary based on book length and narrator availability, which we communicate in advance.",
    },
    {
      question: "What makes professional publishing services different from DIY?",
      answer:
        "DIY requires learning each platform's rules, file specifications, and metadata requirements. We already know them, so you avoid the trial-and-error phase. You also bypass common pitfalls like formatting rejections or incorrect category selection that delay publication.",
    },
  ],
} as const;

export const bookPublishingCtaBanner = {
  src: `${BOOK_ASSETS}/about-cta2.webp`,
  alt: "Ready to publish your book? Get in touch with Dezyon Studio",
  href: "/contact",
  width: 1595,
  height: 529,
} as const;

const TEAM_ASSETS = "/assets/img/team";

export const bookPublishingAuthorsIntro = {
  titlePrefix: "Explore Our ",
  titleHighlight: "Authors",
  description:
    "We've helped hundreds of entrepreneurs, executives, and creators publish books that grow their brand, establish authority, and reach new audiences.",
  ctaNote: "Ready to publish your book with Dezyon Studio?",
  cta: { label: "Start Your Book Project", href: "/contact" },
} as const;

export const bookPublishingAuthors = [
  {
    id: "mark-zellers",
    name: "Mark Zellers",
    role: "Founder & CEO, The Interdependent Group",
    image: `${TEAM_ASSETS}/team-01.webp`,
    industry: "marketing",
    expertise: "leadership",
  },
  {
    id: "john-zellers",
    name: "John Zellers",
    role: "Co-Founder, Dezyon Studio",
    image: `${TEAM_ASSETS}/team-02.webp`,
    industry: "technology",
    expertise: "entrepreneur",
  },
  {
    id: "kim-yun-son",
    name: "Kim Yun Son",
    role: "Engineering Manager & Published Author",
    image: `${TEAM_ASSETS}/team-03.webp`,
    industry: "technology",
    expertise: "leadership",
  },
  {
    id: "andre-garcia",
    name: "André Garcia",
    role: "Product Manager, SaaS Innovations",
    image: `${TEAM_ASSETS}/team-04.webp`,
    industry: "technology",
    expertise: "leadership",
  },
  {
    id: "peter-lary",
    name: "Peter Lary",
    role: "UX Researcher & Business Author",
    image: `${TEAM_ASSETS}/team-05.webp`,
    industry: "marketing",
    expertise: "personal-development",
  },
  {
    id: "henry-matt",
    name: "Henry Matt",
    role: "Customer Success Director",
    image: `${TEAM_ASSETS}/team-06.webp`,
    industry: "technology",
    expertise: "sales",
  },
  {
    id: "natalia-larsson",
    name: "Natalia Larsson",
    role: "Director of Sales, Growth Brands",
    image: `${TEAM_ASSETS}/team-07.webp`,
    industry: "retail",
    expertise: "marketing",
  },
  {
    id: "larry-chen",
    name: "Larry Chen",
    role: "Director of Operations, ScaleWorks",
    image: `${TEAM_ASSETS}/team-08.webp`,
    industry: "other",
    expertise: "operations",
  },
  {
    id: "sarah-edrissi",
    name: "Sarah Edrissi",
    role: "Brand Strategist & Memoir Author",
    image: `${TEAM_ASSETS}/team-01.webp`,
    industry: "marketing",
    expertise: "marketing",
  },
  {
    id: "carla-moore",
    name: "Carla Moore",
    role: "Former VP, Media Strategy & Education",
    image: `${TEAM_ASSETS}/team-02.webp`,
    industry: "education",
    expertise: "leadership",
  },
  {
    id: "lucinda-baier",
    name: "Lucinda Baier",
    role: "CEO, Brookdale Senior Living",
    image: `${TEAM_ASSETS}/team-03.webp`,
    industry: "healthcare",
    expertise: "leadership",
  },
  {
    id: "paulo-andrez",
    name: "Paulo Andrez",
    role: "Serial Entrepreneur & Business Author",
    image: `${TEAM_ASSETS}/team-04.webp`,
    industry: "other",
    expertise: "entrepreneur",
  },
  {
    id: "lisa-andrew",
    name: "Lisa Andrew",
    role: "President, Silicon Valley Education Foundation",
    image: `${TEAM_ASSETS}/team-05.webp`,
    industry: "education",
    expertise: "leadership",
  },
  {
    id: "nathan-singleton",
    name: "Nathan Singleton",
    role: "Financial Advisor & Nonfiction Author",
    image: `${TEAM_ASSETS}/team-06.webp`,
    industry: "finance",
    expertise: "finance",
  },
  {
    id: "mustafa-digital",
    name: "Mustafa Digital",
    role: "Digital Marketing Consultant",
    image: `${TEAM_ASSETS}/team-07.webp`,
    industry: "marketing",
    expertise: "marketing",
  },
  {
    id: "mark-anderson",
    name: "Mark Anderson",
    role: "Business Coach & Self-Help Author",
    image: `${TEAM_ASSETS}/team-08.webp`,
    industry: "education",
    expertise: "personal-development",
  },
] as const;

export const bookPublishingWritingCta = {
  title: "Start Your Writing Path Today with Our Skilled Book Professionals",
  description:
    "Your next book deserves a perfect manuscript. With a single click, our expert professionals are ready to assist you.",
  primaryCta: { label: "Start Your Journey", href: "/contact" },
  books: [
    {
      id: "book-one",
      title: "One Last Rainy Day",
      image: `${BOOK_ASSETS}/about-3.webp`,
      rotation: -14,
    },
    {
      id: "book-two",
      title: "The Heaven & Earth Grocery Store",
      image: `${BOOK_ASSETS}/about-4.webp`,
      rotation: -4,
    },
    {
      id: "book-three",
      title: "Jackie",
      image: `${BOOK_ASSETS}/about-helps.webp`,
      rotation: 8,
    },
  ],
} as const;

export const BOOK_PUBLISHING_AUTHORS_PAGE_SIZE = 12;
