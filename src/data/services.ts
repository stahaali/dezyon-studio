const SERVICES_ASSETS = "/assets/img/about";
const CONTACT_ASSETS = "/assets/img/contact";
const INTEGRATIONS_ASSETS = "/assets/img/integrations";

export const servicesHero = {
  badge: "What we offer",
  titlePrefix: "Creative services for",
  titleSuffix: "your",
  typewriterPhrases: [
    "brand growth",
    "business vision",
    "digital success",
    "lasting impact",
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
  label: "What we do",
  titleDark: "Full-service",
  titleAccent: "creative solutions",
  description:
    "We partner with ambitious brands to design, build, and market products that make a lasting impact — with strategy, craft, and attention to every detail.",
} as const;

export const services = [
  {
    id: "logo-design",
    title: "Logo Design",
    description:
      "Distinctive logo systems crafted to capture your brand essence, ensure memorability, and work seamlessly across every touchpoint.",
    icon: `${SERVICES_ASSETS}/icon-diamond.svg`,
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    id: "branding-design",
    title: "Branding Design",
    description:
      "Complete brand identities with cohesive visuals, tone, and guidelines that build recognition and trust across all channels.",
    icon: `${SERVICES_ASSETS}/icon-crown.svg`,
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    id: "website-development",
    title: "Website Development",
    description:
      "High-performance websites built for speed, accessibility, and conversion — from sleek landing pages to full-scale digital platforms.",
    icon: `${CONTACT_ASSETS}/icon-internet.svg`,
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Intuitive mobile applications with polished interfaces and reliable functionality, designed to engage users on iOS and Android.",
    icon: `${CONTACT_ASSETS}/icon-chat.svg`,
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    id: "animation",
    title: "2D/3D Animation",
    description:
      "Compelling motion graphics and 3D visuals that explain ideas, elevate storytelling, and bring your brand to life with dynamic energy.",
    icon: `${SERVICES_ASSETS}/icon-trophy.svg`,
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns across search, social, and content channels to grow visibility, generate leads, and maximize your return on investment.",
    icon: `${SERVICES_ASSETS}/icon-globe.svg`,
    iconWidth: 48,
    iconHeight: 48,
  },
] as const;
