import type { PackagePlan } from "@/data/packages";

const CONTACT_ASSETS = "/assets/img/contact";
const WEB_APPS_ASSETS = "/assets/img/web-apps";

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
    icon: `${WEB_APPS_ASSETS}/icon-interactive.svg`,
    title: "Interactive Experiences",
    text: "Our developers transform designs into rich, interactive websites and web applications.",
  },
  {
    id: "experience",
    icon: `${WEB_APPS_ASSETS}/icon-experience.svg`,
    title: "10+ Years Experience",
    text: "A decade of delivering digital products and services for clients worldwide.",
  },
  {
    id: "support",
    icon: `${WEB_APPS_ASSETS}/icon-support.svg`,
    title: "24/7 Live Support",
    text: "Next-level customer assistance with responsive live support when you need it.",
  },
  {
    id: "conversion",
    icon: `${WEB_APPS_ASSETS}/icon-conversion.svg`,
    title: "Higher Conversions",
    text: "Custom-built solutions engineered to improve engagement and conversion rates.",
  },
] as const;

export const webAppsB2B = {
  image: "/assets/img/web-app/mobile-app-img1.jpg",
  imageAlt: "Developer reviewing application code on a smartphone",
  titlePrefix: "For all major industries, a comprehensive set of ",
  titleHighlight: "B2B portal creation services",
  titleSuffix: " is available.",
  paragraphs: [
    "Dezyon Digital incorporates B2B communication skills and what it takes to maintain a smooth software development life cycle and produce powerful B2B tools that lift the client's business above the competition.",
    "We recognize the significant shift in B2B e-commerce and provide clients with top-notch web apps to simplify e-cooperation with their customers and partners by first understanding your business objectives.",
  ],
  services: [
    "iOS App Development",
    "Android App Development",
    "Game App Development",
    "Cross-Platform App Development",
  ],
} as const;

export const webAppsDevelopment = {
  titleLines: [
    "An Unrivaled Source Of Web Portal Development",
    "Services Ready To Keep You Ahead Of The",
    "Competition",
  ],
  description:
    "Dezyon Digital is certain to give you eCommerce solutions and web apps that are visually and technically above the normal no-brainers in the business, regardless of project complexity or customer needs.",
  cards: [
    {
      id: "ui-design",
      number: "01",
      icon: `${WEB_APPS_ASSETS}/icon-ui-design.svg`,
      title: "UI Design",
      description:
        "The app UI is one of the most crucial parts of the app. We provide you with the best custom app design services at the hands of talented professionals.",
    },
    {
      id: "ux-development",
      number: "02",
      icon: `${WEB_APPS_ASSETS}/icon-ux-development.svg`,
      title: "UX Development",
      description:
        "It's not all about the end product, but also the experience built for the customer. We carefully examine our clients' personas and strategize development accordingly.",
    },
    {
      id: "prototyping",
      number: "03",
      icon: `${WEB_APPS_ASSETS}/icon-prototyping.svg`,
      title: "Real-Time Prototyping",
      description:
        "Creating wholly interactive, high fidelity prototypes that will work exactly how your app should. We help entrepreneurs acquire quality prototypes to convince their investors.",
    },
  ],
} as const;

export const webAppsTechnologies = {
  image: "/assets/img/web-app/mobile-app-img2.jpg",
  imageAlt: "Designer sketching mobile app wireframes at a workspace desk",
  titlePrefix: "A technologically endowed ",
  titleHighlight: "portal development technologies hub",
  titleSuffix:
    " that offers the most up-to-date ecommerce portals and web app solutions.",
  intro:
    "Dezyon Digital has been working in the digital market for over ten years. Our clients come to us for a variety of services aimed at improving their brand's online reputation and expanding their customer base.",
  segments: [
    {
      id: "startups",
      icon: `${WEB_APPS_ASSETS}/icon-startups.svg`,
      title: "Startups",
      description:
        "Launch faster with scalable MVPs, polished interfaces, and product roadmaps built for early traction and investor-ready demos.",
    },
    {
      id: "mid-sized",
      icon: `${WEB_APPS_ASSETS}/icon-midsized.svg`,
      title: "Mid-Sized",
      description:
        "Streamline operations with custom portals, integrations, and workflow tools designed to support growing teams and customer demand.",
    },
    {
      id: "enterprise",
      icon: `${WEB_APPS_ASSETS}/icon-enterprise.svg`,
      title: "Enterprise",
      description:
        "Deploy secure, high-performance platforms with advanced architecture, dedicated support, and solutions tailored to complex business needs.",
    },
  ],
} as const;

export const webAppsPackages = {
  title: "Our Packages",
  description:
    "With the best web portal development, Dezyon Digital leaves an enduring impression on the experience of customers.",
  plans: [
    {
      id: "conferencing-portal",
      name: "AUTOMATED/INTERACTIVE CONFERENCING PORTAL PACKAGE",
      price: 7000,
      wasPrice: 10000,
      features: [
        "Unlimited Page Website",
        "Custom Content Management System (CMS)",
        "Unique Pages and UI Design",
        "Complete Custom Development",
        "Video Conferencing Integration",
        "User Registration & Profiles",
        "Admin Dashboard",
        "Mobile Responsive Design",
      ],
      note: "Suitable for newly formed organizations or small incubated startups.",
    },
    {
      id: "ecommerce-portal",
      name: "AUTOMATED/INTERACTIVE E-COMMERCE PACKAGE",
      price: 10000,
      wasPrice: 17500,
      features: [
        "Unlimited Page Website",
        "Custom Content Management System (CMS)",
        "Unique Pages and UI Design",
        "Complete Custom Development",
        "Payment Gateway Integration",
        "Product & Inventory Management",
        "Order Tracking System",
        "Mobile Responsive Design",
      ],
      note: "Suitable for newly formed organizations or small incubated startups.",
    },
    {
      id: "crm-erp-portal",
      name: "CUSTOM CRM/ERP PORTAL WEBSITE PACKAGE",
      price: 15000,
      wasPrice: 23750,
      features: [
        "Unlimited Page Website",
        "Custom Content Management System (CMS)",
        "Unique Pages and UI Design",
        "Complete Custom Development",
        "CRM Module Integration",
        "ERP Workflow Automation",
        "Reporting & Analytics Dashboard",
        "Mobile Responsive Design",
      ],
      note: "Suitable for newly formed organizations or small incubated startups.",
    },
  ] satisfies PackagePlan[],
} as const;
