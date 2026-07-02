import { packagesBanner } from "@/data/packages";
import { talkingWebsitePricing } from "@/data/talking-website";

export const plansPricingUniversalPlans = talkingWebsitePricing;

export type CustomWebsitePlan = {
  id: string;
  name: string;
  bestFor: string;
  features: readonly string[];
  deliveryTime: string;
  priceRange: string;
  cta: { label: string; href: string };
  featured?: boolean;
};

export const customWebsitePlans: CustomWebsitePlan[] = [
  {
    id: "business-starter",
    name: "Business Starter",
    bestFor: "New businesses / startups",
    features: [
      "Basic Custom Website (5 pages)",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "WhatsApp Chat Button",
      "1 Month Support",
      "Basic Performance Optimization",
    ],
    deliveryTime: "5–7 days",
    priceRange: "Affordable entry-level",
    cta: { label: "Get Subscribe", href: "/contact" },
    featured: false,
  },
  {
    id: "business-growth",
    name: "Business Growth",
    bestFor: "Growing businesses who want leads & automation",
    features: [
      "Advanced Custom Website (10–15 pages)",
      "AI Chat / Basic AI Receptionist Integration",
      "SEO Optimization (On-page + Technical)",
      "CRM / Lead Capture Integration",
      "Speed Optimization (High Performance)",
      "Analytics Setup (Google Analytics + Tracking)",
      "3 Months Support",
      "Blog Setup (Optional)",
      "Conversion-focused UI/UX Design",
    ],
    deliveryTime: "10–15 days",
    priceRange: "Mid-level investment",
    cta: { label: "Get Subscribe", href: "/contact" },
    featured: true,
  },
  {
    id: "business-enterprise",
    name: "Business Enterprise",
    bestFor: "Large businesses, franchises, high-volume brands",
    features: [
      "Fully Custom Scalable Website / Web App",
      "Advanced AI Voice / AI Receptionist System",
      "Analytics Setup (Google Analytics + Tracking)",
      "Multi-location / Franchise Support",
      "Advanced Automation (CRM, Email, WhatsApp)",
      "API Integrations (Custom Systems)",
      "High-Level Security Setup",
      "Dedicated Account Manager",
      "Priority Support (6–12 Months)",
      "Performance & Load Optimization (Enterprise Grade)",
      "Custom Dashboard / Admin Panel",
    ],
    deliveryTime: "20–30 days",
    priceRange: "Premium / Custom Quote",
    cta: { label: "Get Subscribe", href: "/contact" },
    featured: false,
  },
];

export const plansPricingPage = {
  titlePrefix: "Plans & ",
  titleHighlight: "Pricing",
  description:
    "Communications plans for business phone, AI receptionist, video, events, and conversation intelligence.",
  bannerImageAlt: "Plans and pricing hero background",
  stars: packagesBanner.stars,
} as const;

export const plansPricingServiceTabs = [
  {
    id: "custom-website",
    label: "Custom Website",
    eyebrow: "Pricing & Plans",
    titlePrefix: "Flexible Solutions for Every ",
    titleHighlight: "Business",
    description:
      "At Dezyon Studio, our goal is simple: to deliver exceptional quality, innovative design, and results that help your business grow.",
  },
  {
    id: "talking-website",
    label: "Talking Website",
    title: "Turn Your Website Into A 24/7 Sales Representative",
    description:
      "Most websites leave visitors searching for answers. A Talking Website starts the conversation instantly.",
  },
  {
    id: "ai-video-creation",
    label: "Marketing Studio",
    title: "Create Smarter Publish Faster Grow Bigger",
    description:
      "AI Video Creation gives your business the power to produce professional videos at scale.",
  },
  {
    id: "video-editing",
    label: "Video Editing",
    title: "Professional Video Editing for Modern Brands",
    description:
      "Polished edits, motion graphics, and platform-ready content that help your business stand out across social, ads, and YouTube.",
  },
] as const;

export type PlansPricingServiceTabId =
  (typeof plansPricingServiceTabs)[number]["id"];

export type PlansPricingCategoryId = PlansPricingServiceTabId;

export type PlansPricingCategoryLayout = PlansPricingCategoryId;

export type PlansPricingCategory = {
  id: PlansPricingCategoryId;
  label: string;
  heroTitle: string;
  heroDescription: string;
  layout: PlansPricingCategoryLayout;
};

function getServiceTabHeroTitle(
  tab: (typeof plansPricingServiceTabs)[number],
): string {
  if ("titlePrefix" in tab) {
    return `${tab.titlePrefix}${tab.titleHighlight}`;
  }

  return tab.title;
}

const serviceCategories: PlansPricingCategory[] = plansPricingServiceTabs.map(
  (tab) => ({
    id: tab.id,
    label: tab.label,
    layout: tab.id,
    heroTitle: getServiceTabHeroTitle(tab),
    heroDescription: tab.description,
  }),
);

export const plansPricingCategories: PlansPricingCategory[] = [...serviceCategories];

export type TierPlanAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "link";
};

const contactHref = "/contact";

export type ProductPlan = {
  id: string;
  name: string;
  description: string;
  badge: string | null;
  price: number | null;
  priceSuffix: string;
  customPrice: boolean;
  features: readonly string[];
  actions: readonly TierPlanAction[];
};

export type PlansPricingProductCategoryId = never;

const productCategoryPlans: Record<string, ProductPlan[]> = {
  video: [
    {
      id: "video-standard",
      name: "Video Standard",
      description: "Reliable HD meetings and messaging for distributed teams.",
      badge: null,
      price: 15,
      priceSuffix: "/user/month* paid annually",
      customPrice: false,
      features: [
        "HD video meetings up to 100 participants",
        "Team messaging and file sharing",
        "Screen sharing and whiteboard",
        "Calendar integrations",
        "Mobile and desktop apps",
        "Meeting recordings",
      ],
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "Try free", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "video-pro",
      name: "Video Pro",
      description: "Expanded meeting capacity and admin controls for growing organizations.",
      badge: null,
      price: 25,
      priceSuffix: "/user/month* paid annually",
      customPrice: false,
      features: [
        "Everything in Standard PLUS:",
        "Meetings up to 200 participants",
        "Advanced admin controls",
        "Cloud recording storage",
        "Breakout rooms",
        "Single sign-on (SSO)",
      ],
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "Buy now", href: contactHref, variant: "secondary" },
      ],
    },
  ],
  events: [
    {
      id: "events-standard",
      name: "Events Standard",
      description: "Host polished webinars and trainings with built-in engagement tools.",
      badge: null,
      price: 30,
      priceSuffix: "/month* paid annually",
      customPrice: false,
      features: [
        "Up to 500 webinar attendees",
        "Registration pages and reminders",
        "Q&A and polls",
        "Automated follow-up emails",
        "On-demand replay hosting",
        "Basic event analytics",
      ],
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "View demo", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "events-enterprise",
      name: "Events Enterprise",
      description: "Large-scale virtual events with production support and advanced branding.",
      badge: "New!",
      price: null,
      priceSuffix: "",
      customPrice: true,
      features: [
        "Everything in Standard PLUS:",
        "Up to 10,000 attendees",
        "Custom branding and domains",
        "Producer controls",
        "Multi-session events",
        "Dedicated event specialist",
      ],
      actions: [{ label: "Contact sales", href: contactHref, variant: "primary" }],
    },
  ],
  "conversation-intelligence": [
    {
      id: "ace-standard",
      name: "Conversation Intelligence Standard",
      description: "AI summaries and coaching insights for calls and meetings.",
      badge: null,
      price: 20,
      priceSuffix: "/user/month* paid annually",
      customPrice: false,
      features: [
        "AI-generated call summaries",
        "Keyword and topic tracking",
        "Action item detection",
        "Searchable conversation history",
        "Manager scorecards",
        "CRM note sync",
      ],
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "Try free", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "ace-advanced",
      name: "Conversation Intelligence Advanced",
      description: "Deep analytics and coaching workflows for revenue and support teams.",
      badge: null,
      price: 35,
      priceSuffix: "/user/month* paid annually",
      customPrice: false,
      features: [
        "Everything in Standard PLUS:",
        "Sentiment and trend analytics",
        "Competitive mention tracking",
        "Custom coaching playbooks",
        "Team performance dashboards",
        "API access for BI tools",
      ],
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "Buy now", href: contactHref, variant: "secondary" },
      ],
    },
  ],
};

export function getProductPlansForCategory(
  _categoryId: PlansPricingCategoryId
): ProductPlan[] {
  return [];
}

export const aiReceptionistPage = {
  title: "AI Receptionist™",
  plans: [
    {
      id: "standard",
      title: "AI Receptionist",
      subtitle: "Built for small and medium-sized businesses that want to never miss a call",
      tierLabel: "Standard",
      price: 49,
      priceSuffix: "/month (100 minutes included*)",
      customerLink: "Already a Dezyon customer? Add AI RP now",
      featuresTitle: "Key features include:",
      features: [
        "24/7 call handling with intelligent routing",
        "Appointment scheduling, lead capture, SMS follow-ups",
        "Launch unlimited AI Receptionists",
        "Works with any business phone system",
        "Auto-trains with your website's content",
        "Multilingual conversational support",
        "Deep analytics & call transcripts",
        "No professional services required",
        "Dedicated new phone number",
        "Call queue integration",
        "HIPAA & SOC2 compliant",
        "WhatsApp, Calendly, and Shopify integrations***",
      ],
      actions: [
        { label: "Contact sales", href: "/contact", variant: "primary" as const },
        { label: "Buy now", href: "/contact", variant: "secondary" as const },
      ],
      extraLinks: [] as { label: string; href: string }[],
    },
    {
      id: "all-in-one",
      title: "AI Receptionist with Dezyon Core™",
      subtitle: "For customers who want Dezyon Core and AI Receptionist in one plan",
      tierLabel: "All-in-one",
      priceParts: [39, 30],
      priceSuffix: "/month for AI Receptionist + /month for Dezyon Core Plan (100 minutes included*)",
      customerLink: "Already a Dezyon customer? Add AI RP now",
      featuresTitle: "Everything in AI Receptionist, plus the full value of Dezyon Core phone:",
      features: [
        "AI phone and video meetings",
        "Unlimited domestic calling",
        "Business SMS/MMS",
        "Google, Microsoft integrations",
        "Basic call queues",
        "On-demand call recording",
        "Toll-free minutes",
        "One new phone number per user",
        "Shared lines",
        "Team messaging and file sharing",
        "Single sign-on",
        "Full-featured mobile experience",
        "24/7 customer support",
      ],
      actions: [
        { label: "Contact sales", href: "/contact", variant: "primary" as const },
        { label: "Buy now", href: "/contact", variant: "secondary" as const },
      ],
      extraLinks: [{ label: "Try free", href: "/contact" }],
    },
  ],
  benefits: {
    title: "Turn missed calls into new customers",
    items: [
      {
        id: "revenue",
        title: "Capture more revenue",
        description:
          "Handle FAQs, texts, appointment scheduling, and lead capture, so every customer inquiry becomes an opportunity.",
      },
      {
        id: "routing",
        title: "Route calls with context",
        description:
          "Direct calls by names, locations, and keywords with no repeats, no wrong transfers, and all the details you need.",
      },
      {
        id: "interactions",
        title: "Engage with natural interactions",
        description:
          "Deliver human-like conversations in multiple languages without rigid IVR menus.",
      },
      {
        id: "setup",
        title: "Set up in minutes",
        description:
          "No IT support needed. Quickly train AI Receptionist using your website, FAQs, or uploaded documents.",
      },
    ],
  },
  cta: {
    title: "Ready to transform customer experiences with AI Agents?",
    description:
      "Automate complex workflows with AI-powered solutions for contact centers of all sizes.",
    button: { label: "Contact sales", href: "/contact" },
  },
  exploreFeatures: {
    title: "Explore features",
    categories: [
      {
        id: "call-handling",
        title: "Call handling",
        rows: [
          { label: "Voice options", value: "Included" },
          { label: "Custom greetings", value: true },
          { label: "Intelligent call routing", value: "Dynamic intent" },
          {
            label: "Call transfer",
            value: "Users, extensions, queues, or external numbers",
          },
          {
            label: "Call queue integration",
            value: "Overflow or preset destination",
          },
          { label: "Live transfer/Patch control", value: true },
          { label: "Custom schedules & coverage", value: true },
          {
            label: "Languages",
            value:
              "English (US, UK, & AU), French (Canadian and European), Spanish (Latin American & Spanish), Italian, German, and Portuguese",
          },
          { label: "Automatic language matching", value: true },
        ],
      },
      {
        id: "scheduling-intake",
        title: "Scheduling & Intake",
        rows: [
          { label: "Lead capture", value: true },
          { label: "Custom intake questions", value: true },
          {
            label: "Appointment scheduling",
            value: "Via calendar integration or SMS link",
          },
        ],
      },
      {
        id: "messaging",
        title: "Messaging",
        rows: [
          { label: "AI SMS agent", value: true },
          { label: "Text inquiry automation", value: true },
          { label: "SMS follow-ups", value: true },
        ],
      },
      {
        id: "integrations",
        title: "Integrations",
        rows: [
          { label: "Calendar integrations", value: "Google, Outlook, Calendly***" },
          { label: "CRM integrations", value: "Salesforce, Zoho, HubSpot" },
          { label: "Ecommerce integrations***", value: "Shopify" },
          { label: "Messaging integrations***", value: "WhatsApp" },
        ],
      },
      {
        id: "onboarding",
        title: "Onboarding",
        rows: [
          { label: "Guided setup", value: true },
          { label: "Auto-setup", value: "Website or Google Business Profile" },
          {
            label: "Knowledge base",
            value: "Website import or individual document uploads",
          },
          { label: "Number of agents", value: "Unlimited" },
          {
            label: "Phone number",
            value: "Keep your number or get a new local number",
          },
          {
            label: "Phone compatibility",
            value: "Works with any phone\nAvoid forwarding or SIP integration",
          },
        ],
      },
      {
        id: "analytics",
        title: "Analytics and reporting",
        rows: [
          { label: "Transcripts and recordings", value: true },
          {
            label: "Call analytics and insights",
            value: "Metrics on call volume, trends, transcripts",
          },
          {
            label: "Knowledge insights",
            value: "Unanswered questions and gaps",
          },
        ],
      },
      {
        id: "security",
        title: "Security & administration",
        rows: [
          { label: "HIPAA compliance", value: true },
          { label: "SOC 2 compliance", value: true },
          {
            label: "Multi-location support",
            value:
              "Custom location with routing, hours, and location-aware responses",
          },
        ],
      },
    ],
    disclaimers: [
      "*Pay as you go: Largest $0.40 per minute apply. Long-term calls for non-included features/add-ons/services will be billed per minute. Call rates are rounded up to the nearest 30 second increments.",
      "***Additional charges may apply.",
      "***Coming soon.",
    ],
  },
} as const;

export const aiSolutionPlans = [
  {
    id: "ai-starter",
    name: "AI Starter",
    price: 299,
    wasPrice: 598,
    description: "Essential AI tools to automate customer conversations and capture leads.",
    badge: null,
    features: [
      "AI Chatbot setup",
      "Website integration",
      "Basic conversation flows",
      "Email lead capture",
      "1 revision round",
    ],
    note: "Ideal for small businesses getting started with AI automation.",
  },
  {
    id: "ai-growth",
    name: "AI Growth",
    price: 599,
    wasPrice: 1198,
    description: "Expanded AI coverage with receptionist workflows and marketing support.",
    badge: "Most popular",
    features: [
      "AI Chatbot + AI Receptionist",
      "Custom brand voice tuning",
      "CRM handoff workflows",
      "AI video ad concepts",
      "3 revision rounds",
    ],
    note: "Best for teams that want AI across sales, support, and marketing.",
  },
  {
    id: "ai-scale",
    name: "AI Scale",
    price: 999,
    wasPrice: 1998,
    description: "Full AI stack with advanced automation and ongoing optimization.",
    badge: null,
    features: [
      "Multi-channel AI agents",
      "Appointment booking flows",
      "AI YouTube automation setup",
      "Performance reporting dashboard",
      "Priority support",
    ],
    note: "Built for growth-focused brands scaling operations with AI.",
  },
  {
    id: "ai-enterprise",
    name: "AI Enterprise",
    price: 0,
    wasPrice: 0,
    description: "Custom AI architecture, integrations, and dedicated implementation.",
    badge: "New!",
    features: [
      "Custom AI workflow design",
      "Enterprise integrations",
      "Dedicated account manager",
      "Training and onboarding",
      "SLA-backed support",
    ],
    note: "Contact us for a tailored quote based on your stack and goals.",
    customPrice: true,
  },
] as const;

export type TeamSizeTier = "1-5" | "6-100" | "100+";

export type TierAiFeature = {
  label: string;
  tag?: string;
};

export type TierPlan = {
  id: string;
  name: string;
  description: string;
  badge: string | null;
  annualPrice: number | null;
  monthlyPrice: number | null;
  customPrice: boolean;
  features: readonly string[];
  aiFeatures: readonly TierAiFeature[];
  actions: readonly TierPlanAction[];
};

const coreFeatures = [
  "Unlimited domestic calling",
  "On-demand call recording",
  "100 toll-free minutes",
  "25 SMS user/month",
  "HD meetings (200 participants)",
] as const;

const coreAiFeatures: TierAiFeature[] = [
  { label: "AI Receptionist (IVR)", tag: "Add-on" },
  { label: "AI IVR with intelligent call routing" },
  { label: "Appointment booking" },
  { label: "Lead capture and SMS follow-up" },
  { label: "AI Virtual Assistant" },
  { label: "Captions & transcriptions" },
  { label: "Notes & summaries" },
];

const advancedFeatures = [
  "Everything in Core PLUS:",
  "CRM integrations",
  "Connect multiple sites",
  "Core reporting and insights",
  "1,000 toll-free minutes",
  "100 SMS user/month*",
] as const;

const advancedAiFeatures: TierAiFeature[] = [
  { label: "AI Receptionist (IVR)", tag: "Add-on" },
  { label: "AI IVR with intelligent call routing" },
  { label: "Appointment booking" },
  { label: "Lead capture and SMS follow-up" },
  { label: "AI Virtual Assistant" },
  { label: "AI Writer" },
  { label: "Captions & transcriptions" },
  { label: "Notes & summaries" },
];

const ultraFeatures = [
  "Everything in Advanced PLUS:",
  "10,000 toll-free minutes",
  "200 SMS user/month*",
  "RingCentral Webinar",
  "Historical and real-time insights",
  "Unlimited storage**",
  "Device analytics & alerts",
] as const;

const ultraAiFeatures: TierAiFeature[] = [
  { label: "AI Receptionist (IVR)", tag: "Add-on" },
  { label: "All AI Virtual Assistant features" },
];

const bundleFeatures = [
  "Everything in Ultra PLUS:",
  "Business SMS Booster",
  "Shared SMS inbox",
  "Company reply templates",
  "SMS compliance management",
  "Call Queues Booster",
  "Call back from queue",
  "Wait time and place alerts",
  "Live Reports",
] as const;

const bundleAiFeatures: TierAiFeature[] = [
  { label: "AI Receptionist (IVR)", tag: "Add-on" },
  { label: "All AI Virtual Assistant features" },
];

export const teamSizePlans: Record<TeamSizeTier, TierPlan[]> = {
  "1-5": [
    {
      id: "core",
      name: "Core",
      description: "Unify calls, meetings, and chat in an all-in-one, professional app.",
      badge: null,
      annualPrice: 20,
      monthlyPrice: 30,
      customPrice: false,
      features: coreFeatures,
      aiFeatures: coreAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "Buy now", href: contactHref, variant: "secondary" },
        { label: "Try free", href: contactHref, variant: "link" },
      ],
    },
    {
      id: "advanced",
      name: "Advanced",
      description: "Connect teams across locations and improve customer engagement.",
      badge: "Most popular",
      annualPrice: 25,
      monthlyPrice: 35,
      customPrice: false,
      features: advancedFeatures,
      aiFeatures: advancedAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "Buy now", href: contactHref, variant: "secondary" },
        { label: "Try free", href: contactHref, variant: "link" },
      ],
    },
    {
      id: "ultra",
      name: "Ultra",
      description: "Engage audiences at scale, backed by deep business insights.",
      badge: null,
      annualPrice: 35,
      monthlyPrice: 45,
      customPrice: false,
      features: ultraFeatures,
      aiFeatures: ultraAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "Buy now", href: contactHref, variant: "secondary" },
        { label: "Try free", href: contactHref, variant: "link" },
      ],
    },
    {
      id: "ce-bundle",
      name: "Customer Engagement Bundle",
      description: "Orchestrate faster, consistent service with connected voice & SMS.",
      badge: "New!",
      annualPrice: null,
      monthlyPrice: null,
      customPrice: true,
      features: bundleFeatures,
      aiFeatures: bundleAiFeatures,
      actions: [{ label: "Contact sales", href: contactHref, variant: "primary" }],
    },
  ],
  "6-100": [
    {
      id: "core",
      name: "Core",
      description: "Unify calls, meetings, and chat in an all-in-one, professional app.",
      badge: null,
      annualPrice: 20,
      monthlyPrice: 30,
      customPrice: false,
      features: coreFeatures,
      aiFeatures: coreAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "View demo", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "advanced",
      name: "Advanced",
      description: "Connect teams across locations and improve customer engagement.",
      badge: "Most popular",
      annualPrice: 25,
      monthlyPrice: 35,
      customPrice: false,
      features: advancedFeatures,
      aiFeatures: advancedAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "View demo", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "ultra",
      name: "Ultra",
      description: "Engage audiences at scale, backed by deep business insights.",
      badge: null,
      annualPrice: 35,
      monthlyPrice: 45,
      customPrice: false,
      features: ultraFeatures,
      aiFeatures: ultraAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "View demo", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "ce-bundle",
      name: "Customer Engagement Bundle",
      description: "Orchestrate faster, consistent service with connected voice & SMS.",
      badge: "New!",
      annualPrice: null,
      monthlyPrice: null,
      customPrice: true,
      features: bundleFeatures,
      aiFeatures: bundleAiFeatures,
      actions: [{ label: "Contact sales", href: contactHref, variant: "primary" }],
    },
  ],
  "100+": [
    {
      id: "core",
      name: "Core",
      description: "Unify calls, meetings, and chat in an all-in-one, professional app.",
      badge: null,
      annualPrice: null,
      monthlyPrice: null,
      customPrice: true,
      features: coreFeatures,
      aiFeatures: coreAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "View demo", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "advanced",
      name: "Advanced",
      description: "Connect teams across locations and improve customer engagement.",
      badge: "Most popular",
      annualPrice: null,
      monthlyPrice: null,
      customPrice: true,
      features: advancedFeatures,
      aiFeatures: advancedAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "View demo", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "ultra",
      name: "Ultra",
      description: "Engage audiences at scale, backed by deep business insights.",
      badge: null,
      annualPrice: null,
      monthlyPrice: null,
      customPrice: true,
      features: ultraFeatures,
      aiFeatures: ultraAiFeatures,
      actions: [
        { label: "Contact sales", href: contactHref, variant: "primary" },
        { label: "View demo", href: contactHref, variant: "secondary" },
      ],
    },
    {
      id: "ce-bundle",
      name: "Customer Engagement Bundle",
      description: "Orchestrate faster, consistent service with connected voice & SMS.",
      badge: "New!",
      annualPrice: null,
      monthlyPrice: null,
      customPrice: true,
      features: bundleFeatures,
      aiFeatures: bundleAiFeatures,
      actions: [{ label: "Contact sales", href: contactHref, variant: "primary" }],
    },
  ],
};

export function getPlansForTeamSize(teamSize: TeamSizeTier): TierPlan[] {
  return teamSizePlans[teamSize];
}

export const plansPricingAddons = {
  title: "Power up your digital growth with any tier",
  items: [
    {
      id: "ai-receptionist",
      icon: "bot",
      title: "AI Receptionist",
      description:
        "Never miss a lead with AI receptionists that work across your website, phone flows, and booking pages.",
      priceLabel: "Starts at",
      price: 39,
      note: null,
      cta: { label: "Buy now", href: "/contact" },
    },
    {
      id: "ai-chatbot",
      icon: "message",
      title: "AI Chatbot Booster",
      description:
        "Automate replies, qualify leads, and capture appointments with branded AI chat experiences.",
      priceLabel: null,
      price: 25,
      note: "Included in Dezyon AI Growth packages",
      cta: { label: "Contact sales", href: "/contact" },
    },
    {
      id: "seo-booster",
      icon: "chart",
      title: "SEO Growth Booster",
      description:
        "Improve rankings with keyword targeting, on-page optimization, and monthly performance reporting.",
      priceLabel: null,
      price: 35,
      note: "Included in Dezyon SEO & Growth packages",
      cta: { label: "Contact sales", href: "/contact" },
    },
    {
      id: "ai-video",
      icon: "video",
      title: "AI Video Ads",
      description:
        "Turn your offer into scroll-stopping short-form video ads built with AI for social campaigns.",
      priceLabel: "Starts at",
      price: 60,
      note: null,
      cta: { label: "Contact sales", href: "/contact" },
    },
    {
      id: "branding-kit",
      icon: "sparkles",
      title: "Branding Kit Add-on",
      description:
        "Extend your identity with social templates, brand guidelines, and launch-ready visual assets.",
      priceLabel: null,
      price: 49,
      note: "Bundle with logo or branding packages",
      cta: { label: "Contact sales", href: "/contact" },
    },
  ],
} as const;

export type PlansPricingAddonIcon =
  (typeof plansPricingAddons.items)[number]["icon"];

export type PlansPricingExpandIcon =
  | "headphones"
  | "users"
  | "video"
  | "smartphone"
  | "monitor"
  | "grid"
  | "globe"
  | "message"
  | "mappin"
  | "mail";

export const plansPricingExpand = {
  title: "Expand your system as needed",
  items: [
    {
      id: "ai-contact-center",
      icon: "headphones" as PlansPricingExpandIcon,
      title: "AI Contact Center",
      description:
        "Deliver effortless customer experiences with AI-powered chat and reception workflows that are easy to deploy across your website.",
      price: "Starting at $65/month*",
    },
    {
      id: "event-experiences",
      icon: "users" as PlansPricingExpandIcon,
      title: "Event & Launch Pages",
      description:
        "Engage your audience with branded, high-conversion landing pages for webinars, product launches, and virtual events.",
      price: "Starting at $99/project*",
    },
    {
      id: "video-production",
      icon: "video" as PlansPricingExpandIcon,
      title: "Video Production Add-on",
      description:
        "Drive engagement with modern explainer videos, promos, and social clips tailored to your brand and campaign goals.",
      price: "Starting at $39/video*",
    },
    {
      id: "mobile-optimization",
      icon: "smartphone" as PlansPricingExpandIcon,
      title: "Mobile Optimization Pack",
      description:
        "Unify mobile performance with responsive refinements, faster load times, and conversion-focused layout improvements.",
      price: "$5/page*",
    },
    {
      id: "webinar-kit",
      icon: "monitor" as PlansPricingExpandIcon,
      title: "Webinar Landing Kit",
      description:
        "Run stress-free webinars and trainings with a simple, easy-to-launch landing page and registration flow setup.",
      price: "Starting at $30/month*",
    },
    {
      id: "domain-setup",
      icon: "grid" as PlansPricingExpandIcon,
      title: "Premium Domain Setup",
      description:
        "Strengthen your brand identity with custom domain configuration, DNS management, and SSL launch support.",
      price: "$30 one-time fee*",
    },
    {
      id: "multilingual",
      icon: "globe" as PlansPricingExpandIcon,
      title: "Multilingual Website Pages",
      description:
        "Reach global customers with translated page versions that build trust in regional markets without extra overhead.",
      price: "$14.99/page*",
    },
    {
      id: "international-seo",
      icon: "globe" as PlansPricingExpandIcon,
      title: "International SEO Pack",
      description:
        "Establish a local search presence in foreign markets with region-specific keyword targeting and on-page optimization.",
      price: "Starting at $5.99/month*",
    },
    {
      id: "bulk-sms",
      icon: "message" as PlansPricingExpandIcon,
      title: "High Volume SMS*",
      description:
        "Scale outreach with automated mass text messaging designed for reliable marketing campaigns and customer notifications.",
      price: "Starting at $0.01/message*",
    },
    {
      id: "extra-landing-pages",
      icon: "mappin" as PlansPricingExpandIcon,
      title: "Additional Landing Pages",
      description:
        "Expand your reach with multiple campaign-specific landing pages to support departments, offers, and promotions.",
      price: "$4.99/month*",
    },
  ],
} as const;

export const plansPricingDisclaimers = {
  title: "Important details and disclaimers",
  columns: [
    [
      "Project pricing shown is starting from rates for standard scope. Final quotes may vary based on requirements, timelines, and add-ons discussed during consultation.",
      "Revision limits, deliverables, and turnaround times are defined in your proposal and may differ by package tier.",
      "Third-party tools, plugins, stock assets, ad spend, hosting, and domain costs are not included unless explicitly stated in your agreement.",
      "AI solution pricing depends on integrations, conversation volume, and ongoing optimization needs.",
    ],
    [
      "Monthly retainer and support plans are optional and billed separately from one-time project fees.",
      "International clients are welcome. Billing is handled in USD unless otherwise agreed in writing.",
      "Promotional pricing, when offered, applies to new engagements for the initial term stated in the proposal.",
      "Availability of specific services may vary by region, platform, and project complexity.",
    ],
  ],
} as const;

export function getCategoryMeta(categoryId: PlansPricingCategoryId) {
  const category = plansPricingCategories.find((item) => item.id === categoryId);

  return {
    title: category?.heroTitle ?? "",
    description: category?.heroDescription ?? "",
  };
}
