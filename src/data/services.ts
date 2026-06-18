const INTEGRATIONS_ASSETS = "/assets/img/integrations";

export const servicesHero = {
  badge: "What we offer",
  titlePrefix: "Creative Services For",
  titleSuffix: "Your",
  typewriterPhrases: [
    "Brand growth",
    "Business vision",
    "Digital success",
    "Lasting impact",
  ],
  description:
    "From brand identity to digital experiences, we deliver end-to-end solutions tailored to help your business stand out and scale.",
  cta: {
    label: "Get in touch",
    href: "/contact",
  },
  floatingIcons: [
    {
      src: `${INTEGRATIONS_ASSETS}/tool-slack.svg`,
      alt: "",
      width: 44,
      height: 44,
      className: "iconSlack",
    },
    {
      src: `${INTEGRATIONS_ASSETS}/tool-stripe.svg`,
      alt: "",
      width: 44,
      height: 44,
      className: "iconStripe",
    },
    {
      src: `${INTEGRATIONS_ASSETS}/tool-hubspot.svg`,
      alt: "",
      width: 44,
      height: 44,
      className: "iconHubspot",
    },
    {
      src: `${INTEGRATIONS_ASSETS}/tool-zapier.svg`,
      alt: "",
      width: 44,
      height: 44,
      className: "iconZapier",
    },
    {
      src: `${INTEGRATIONS_ASSETS}/tool-salesforce.svg`,
      alt: "",
      width: 44,
      height: 44,
      className: "iconSalesforce",
    },
    {
      src: `${INTEGRATIONS_ASSETS}/tool-paypal.svg`,
      alt: "",
      width: 44,
      height: 44,
      className: "iconPaypal",
    },
  ],
} as const;

export const servicesGrid = {
  titlePrefix: "Our ",
  titleHighlight: "Services",
} as const;

export const services = [
  {
    id: "talking-websites",
    title: "Talking Websites",
    description:
      "Transform your website into an interactive experience with AI-powered virtual assistants that engage visitors, answer questions, and convert traffic into customers 24/7.",
  },
  {
    id: "custom-website-development",
    title: "Custom Website Development",
    description:
      "Professional, responsive, and conversion-focused websites designed to help businesses establish a strong online presence and generate more leads.",
  },
  {
    id: "ai-video-creation",
    title: "AI Video Creation",
    description:
      "Create high-quality AI-powered promotional videos, commercials, product showcases, social media content, and business presentations without traditional production costs.",
  },
  {
    id: "ai-marketing",
    title: "AI Marketing",
    description:
      "Leverage artificial intelligence to optimize campaigns, improve targeting, automate customer engagement, and maximize marketing performance.",
  },
  {
    id: "ai-influencers",
    title: "AI Influencers",
    description:
      "Build AI-powered digital influencers and brand ambassadors that create engaging content, grow your social presence, and connect with audiences at scale.",
  },
] as const;
