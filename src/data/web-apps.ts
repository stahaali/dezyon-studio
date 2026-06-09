import type { PackagePlan } from "@/data/packages";
import { flaticonIcons } from "@/data/icons";

const CONTACT_ASSETS = "/assets/img/contact";

export const webAppsBanner = {
  titlePrefix: "Custom ",
  titleHighlight: "web apps.",
  description:
    "Scalable web applications built for performance, security, and growth — from MVPs to enterprise platforms.",
  stars: {
    left: { src: `${CONTACT_ASSETS}/star-2.svg`, width: 20, height: 28 },
    right: { src: `${CONTACT_ASSETS}/star-1.svg`, width: 42, height: 47 },
  },
} as const;

export const webAppsTrust = [
  {
    id: "interactive",
    icon: flaticonIcons.internetColor,
    title: "Interactive Experiences",
    text: "Our developers transform designs into rich, interactive websites and web applications.",
  },
  {
    id: "experience",
    icon: flaticonIcons.trophyColor,
    title: "10+ Years Experience",
    text: "A decade of delivering digital products and services for clients worldwide.",
  },
  {
    id: "support",
    icon: flaticonIcons.globeColor,
    title: "24/7 Live Support",
    text: "Next-level customer assistance with responsive live support when you need it.",
  },
  {
    id: "conversion",
    icon: flaticonIcons.money,
    title: "Higher Conversions",
    text: "Custom-built solutions engineered to improve engagement and conversion rates.",
  },
] as const;

export const webAppsGrid = {
  titlePrefix: "Our ",
  titleHighlight: "solutions",
  titleSuffix: "",
  description:
    "Choose a web app package tailored to your product goals, timeline, and scale.",
} as const;

export const webAppsPlans: PackagePlan[] = [
  {
    id: "starter-web-app",
    name: "STARTER WEB APP",
    price: 2499,
    wasPrice: 4998,
    features: [
      "Custom UI/UX Design",
      "Up to 15 App Screens",
      "User Authentication",
      "Admin Dashboard",
      "API Integration",
      "Mobile Responsive",
      "3 Months Support",
    ],
    note: "Ideal for MVPs and early-stage product launches.",
  },
  {
    id: "business-web-app",
    name: "BUSINESS WEB APP",
    price: 4999,
    wasPrice: 9998,
    features: [
      "Advanced UI/UX Design",
      "Up to 40 App Screens",
      "Role-based Access Control",
      "Real-time Notifications",
      "Payment Gateway Integration",
      "Analytics Dashboard",
      "6 Months Support",
    ],
    note: "Built for growing teams that need scalable workflows.",
  },
  {
    id: "enterprise-web-app",
    name: "ENTERPRISE WEB APP",
    price: 8999,
    wasPrice: 17998,
    features: [
      "Enterprise-grade Architecture",
      "Unlimited App Modules",
      "Custom API Development",
      "Third-party Integrations",
      "Performance Optimization",
      "Dedicated Project Manager",
      "12 Months Support",
    ],
    note: "For organizations that need robust, secure platforms.",
  },
];
