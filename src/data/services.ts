import { flaticonIcons } from "@/data/icons";

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
  label: "What we do",
  titleDark: "Full-service",
  titleAccent: "Creative solutions",
  description:
    "We partner with ambitious brands to design, build, and market products that make a lasting impact — with strategy, craft, and attention to every detail.",
} as const;

export const services = [
  {
    id: "logo-design",
    title: "Logo Design",
    description:
      "Distinctive logo systems crafted to capture your brand essence, ensure memorability, and work seamlessly across every touchpoint.",
    icon: flaticonIcons.diamondColor,
    iconWidth: 56,
    iconHeight: 56,
  },
  {
    id: "branding-design",
    title: "Branding Design",
    description:
      "Complete brand identities with cohesive visuals, tone, and guidelines that build recognition and trust across all channels.",
    icon: flaticonIcons.crownColor,
    iconWidth: 56,
    iconHeight: 56,
  },
  {
    id: "website-development",
    title: "Website Development",
    description:
      "High-performance websites built for speed, accessibility, and conversion — from sleek landing pages to full-scale digital platforms.",
    icon: flaticonIcons.internetColor,
    iconWidth: 56,
    iconHeight: 56,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Intuitive mobile applications with polished interfaces and reliable functionality, designed to engage users on iOS and Android.",
    icon: flaticonIcons.chatColor,
    iconWidth: 56,
    iconHeight: 56,
  },
  {
    id: "animation",
    title: "Video Animation",
    description:
      "Compelling motion graphics and 3D visuals that explain ideas, elevate storytelling, and bring your brand to life with dynamic energy.",
    icon: flaticonIcons.trophyColor,
    iconWidth: 56,
    iconHeight: 56,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns across search, social, and content channels to grow visibility, generate leads, and maximize your return on investment.",
    icon: flaticonIcons.globeColor,
    iconWidth: 56,
    iconHeight: 56,
  },
] as const;
