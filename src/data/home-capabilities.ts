import { heroBrands } from "@/data/hero";

const CAPABILITIES_ASSETS = "/assets/img/home-capabilities";

export const homeCapabilitiesSection = {
  titlePrefix: "We ",
  titleHighlight: "transform",
  titleSuffix: ", build, operate and grow modern websites",
  subtitle:
    "Four ways we turn your website from cost center to growth engine.",
} as const;

export const homeCapabilitiesTabs = [
  {
    id: "rebrand",
    label: "Full-service rebrand",
    badge: "dezyon transform",
    title: "Complete web transformation",
    description:
      "Strategy, brand, design, content, development and more. One team, one timeline.",
    tags: [
      "Brand strategy",
      "Website strategy plan",
      "Art direction & UI design",
      "Copywriting",
      "Custom animations",
      "AI-ready framework",
    ],
    cta: { label: "Learn more", href: "/services" },
    backgroundImage: null,
  },
  {
    id: "development",
    label: "Website development",
    badge: "dezyon build",
    title: "Website development",
    description:
      "Enterprise website development and re-platforming services with performance, SEO retention, and scalable architecture.",
    tags: [
      "Custom website development",
      "Migration & re-platforming",
      "CMS setup and education",
      "AI-ready framework",
    ],
    cta: { label: "Learn more", href: "/services" },
    backgroundImage: `${CAPABILITIES_ASSETS}/development-bg.jpg`,
  },
  {
    id: "webops",
    label: "Ongoing WebOps services",
    badge: "dezyon operate",
    title: "Ongoing WebOps services",
    description:
      "Embedded web team that runs your website the way an in-house team would.",
    tags: [
      "Content updates",
      "New website pages",
      "Technical SEO monitoring",
      "Quarterly CRO audit",
      "Ongoing bug fixes & maintenance",
    ],
    cta: { label: "Learn more", href: "/contact" },
    backgroundImage: `${CAPABILITIES_ASSETS}/webops-bg.jpg`,
  },
  {
    id: "seo",
    label: "SEO & AEO",
    badge: "dezyon grow",
    title: "SEO & AEO",
    description:
      "Full-service organic search and AI visibility optimisation. Win on traditional and AI search engines.",
    tags: [
      "SEO + AEO",
      "Organic growth strategy",
      "Content plan and execution",
      "Content writing",
      "Technical SEO",
      "Design and development",
    ],
    cta: { label: "Learn more", href: "/services" },
    backgroundImage: `${CAPABILITIES_ASSETS}/seo-bg.jpg`,
  },
] as const;

export const homeCapabilitiesLogos = [...heroBrands, ...heroBrands] as const;
