import { heroBrands } from "@/data/hero";

const CAPABILITIES_ASSETS = "/assets/img/home-capabilities";

export const homeCapabilitiesSection = {
  titlePrefix: "We ",
  titleHighlight: "Transform",
  titleSuffix: ", Build, Operate And Grow Modern Websites",
  subtitle:
    "Four ways we turn your website from cost center to growth engine.",
} as const;

export const homeCapabilitiesTabs = [
  {
    id: "rebrand",
    label: "Full-Service Rebrand",
    badge: "Dezyon transform",
    title: "The Complete Website Upgrade",
    description:
      "From brand identity to AI automation, we turn ideas into measurable business growth.",
    tags: [
      "Brand Strategy",
      "AI Video Ads",
      "Custom Animation",
      "AI Receptionist",
      "AI Chatbots",
      "Social Media Growth",
    ],
    cta: { label: "Learn more", href: "/services" },
    backgroundImage: null,
  },
  {
    id: "development",
    label: "Website Development",
    badge: "Dezyon build",
    title: "Website Development",
    description:
      "More than a website your most valuable digital asset for attracting, converting, and retaining customers.",
    tags: [
      "SEO Title",
      "Meta Discription",
      "UI/UX Design",
      "AI Talking Website Integration",
    ],
    cta: { label: "Learn more", href: "/services" },
    backgroundImage: `${CAPABILITIES_ASSETS}/development-bg.jpg`,
  },
  {
    id: "webops",
    label: "Ai Powered Solutions",
    badge: "Dezyon operate",
    title: "Ai Powered Solutions ",
    description:
      "Scale Your Business with Intelligent AI Automation",
    tags: [
      "AI Chatbots",
      "AI Receptionists",
      "Technical SEO monitoring",
      "AI Voice Agents",
      "Talking Websites",
      "AI Video Ads",
      "AI YouTube Videos",
      "AI Lead Generation",
      "AI Appointment Booking",
    ],
    cta: { label: "Learn more", href: "/contact" },
    backgroundImage: `${CAPABILITIES_ASSETS}/webops-bg.jpg`,
  },
  {
    id: "digitalbranding",
    label: "Digital Branding",
    badge: "Dezyon brand",
    title: "Digital Branding",
    description:
      "AI-Powered Content Creation & Influencer Branding We Don't Just Edit Videos — We Build AI Brands",
    tags: [
      "AI Video Ads",
      "AI TV Commercial Production",
      "AI YouTube Automation",
      "AI Avatar Creation",
      "Digital Brand Ambassadors",
      "Brand Personality Creation",
      "Social Media Content Strategy"
    ],
    cta: { label: "Learn more", href: "/pricing/branding" },
    backgroundImage: null,
  },
  {
    id: "seo",
    label: "SEO & AEO",
    badge: "Dezyon grow",
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
