import type { Metadata } from "next";
import {
  getPricingCategoryPath,
  packageCategories,
  packageCategoryMeta,
  type PackageCategoryId,
} from "@/data/packages";
import { SITE_NAME } from "./constants";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-url";

export const DEFAULT_OG_IMAGE = "/assets/img/web-app/mobile-app-img1.webp";

/** Homepage `<title>` — descriptive length for Bing/Google (≈55–65 chars). */
export const HOME_DOCUMENT_TITLE =
  "Dezyon Studio | AI Talking Websites & Digital Marketing Agency";

export type PageSeoKey =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "videoEditing"
  | "webApps"
  | "contact"
  | "websiteAudit"
  | "talkingWebsite"
  | "plansAndPricing"
  | "comboPackages"
  | "privacyPolicy"
  | "termsAndConditions"
  | "refundPolicy"
  | "thankYou";

export type PageSeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export const PAGE_SEO: Record<PageSeoKey, PageSeoConfig> = {
  home: {
    title: "AI Talking Websites & Digital Marketing Agency",
    description:
      "Dezyon Studio helps businesses grow with AI Talking Websites, Custom Website Development, AI Video Creation, Digital Marketing, Video Editing, AI Receptionists, and Branding Solutions.",
    keywords: [
      "AI Talking Website",
      "AI Receptionist",
      "AI Chat Bot",
      "AI Video Creation Services",
      "AI Video Marketing",
      "AI Commercial Videos",
      "AI Video Ads",
      "AI TV Commercials",
      "AI YouTube Ads",
      "AI Marketing Agency",
      "AI Content Creation",
      "Custom Website Development Services",
      "Web Design Agency Texas",
      "Business Website Development",
      "Professional Website Design",
      "E-commerce Website Development",
      "Custom Website Development",
      "Interactive Website Solutions",
      "AI Website Assistant",
      "Website Talking Chatbot Services",
      "Ai Branding Agency",
      "Ai Marketing Agency",
      "Ai Influencer",
      "Ai YouTube Channel Content Creation",
      "Ai Business Branding Solutions",
      "Corporate Branding Agency",
      "Talking Website Agency USA / Canada",
      "Website Development Company USA / Canada",
      "AI Marketing Services USA / Canada",
      "Video Editing Service USA / Canada",
      "Web Design Agency Near me",
      "Ai Custom Video Ads",
    ],
    path: "/",
  },
  about: {
    title: "About Dezyon Studio | AI-Powered Digital Agency & Web Design",
    description:
      "Dezyon Studio is a creative digital agency helping businesses grow through AI-powered solutions. We specialize in Talking Websites, Custom Website Development, AI Video Creation, AI Influencers, Branding, Digital Marketing, Content Creation, and Business Automation to increase engagement, leads, and sales.",
    keywords: [
      "about Dezyon Studio",
      "digital agency team",
      "creative agency company",
      "web design agency about",
      "brand design studio",
    ],
    path: "/about",
  },
  services: {
    title: "Digital Marketing Dezyon Studio | AI Growth & Content Services",
    description:
      "Stop wasting time learning AI tools. Dezyon Studio delivers done-for-you marketing with AI-powered content, video reels, social media management, paid ads, and lead generation systems.",
    keywords: [
      "logo design services",
      "branding services",
      "website development",
      "mobile app development",
      "digital marketing agency",
      "animation services",
    ],
    path: "/marketing",
  },
  portfolio: {
    title: "Portfolio of Websites, Brands & Digital Projects",
    description:
      "View Dezyon Studio's portfolio of websites, branding projects, e-commerce builds, and digital experiences crafted for startups and established brands.",
    keywords: [
      "web design portfolio",
      "branding portfolio",
      "digital agency case studies",
      "website project showcase",
      "creative design work",
    ],
    path: "/portfolio",
  },
  videoEditing: {
    title: "Video Editing Dezyon Studio | AI-Powered Video Editing",
    description:
      "Professional video editing services for businesses, creators, and agencies. Unlimited video editing, AI video ads, YouTube editing, social media videos, motion graphics, and fast turnaround.",
    keywords: [
      "Video Editing Services",
      "Professional Video Editing Services",
      "Unlimited Video Editing",
      "AI Video Editing Services",
      "Video Editing Agency",
      "Social Media Video Editing",
      "YouTube Video Editing",
      "Reels Video Editing",
      "Corporate Video Editing",
      "Video Editing Company",
      "Motion Graphics Services",
      "AI Video Ads",
      "Talking Website Videos",
      "Short Form Video Editing",
      "Content Creation Services",
    ],
    path: "/video-editing",
  },
  webApps: {
    title: "Custom Web App & Portal Development Solutions",
    description:
      "Build scalable web apps, B2B portals, and e-commerce platforms with Dezyon Studio — from UI/UX design to enterprise-grade development and support.",
    keywords: [
      "web app development",
      "custom web applications",
      "B2B portal development",
      "e-commerce portal",
      "software development agency",
      "portal development hub",
    ],
    path: "/web-apps",
    ogImage: "/assets/img/web-app/mobile-app-img2.webp",
  },
  contact: {
    title: "Contact Dezyon Studio | Web Design, Branding & AI Marketing",
    description:
      "Get in touch with Dezyon Studio. Send us a message, explore other ways to reach us, or browse frequently asked questions about our design and development services.",
    keywords: [
      "contact Dezyon Studio",
      "web design quote",
      "hire digital agency",
      "branding agency contact",
      "website development inquiry",
    ],
    path: "/contact",
  },
  websiteAudit: {
    title: "Free Website Audit — Performance, SEO & Speed Analysis",
    description:
      "Analyze any website with our PageSpeed-style audit tool. Get performance, SEO, accessibility, best practices, and technical recommendations for mobile and desktop.",
    keywords: [
      "website audit",
      "pagespeed insights",
      "website performance test",
      "SEO audit tool",
      "lighthouse report",
      "website speed test",
      "core web vitals checker",
    ],
    path: "/website-audit",
  },
  talkingWebsite: {
    title: "Talking Website Dezyon Studio | Interactive AI Website Solution",
    description:
      "Transform your business with AI Talking Websites by Dezyon Studio. Engage visitors with AI-powered virtual assistants, automate customer interactions, answer questions instantly, and increase leads and conversions 24/7.",
    keywords: [
      "AI voice assistant",
      "talking website",
      "AI sales assistant",
      "website chatbot voice",
      "lead qualification AI",
      "appointment booking AI",
    ],
    path: "/talking-website",
    ogImage: "/assets/img/cta/talking.svg",
  },
  plansAndPricing: {
    title: "Plans & Pricing Dezyon Studio | AI Marketing Services",
    description:
      "Choose the perfect Dezyon Studio plan for your business. Affordable pricing for AI Talking Websites, Website Development, AI Video Creation, AI Marketing, Branding, and Digital Growth Solutions.",
    keywords: [
      "web design pricing",
      "logo design packages",
      "branding plans",
      "website development cost",
      "digital agency pricing",
      "AI receptionist pricing",
    ],
    path: "/plans-and-pricing",
  },
  comboPackages: {
    title: "Combo Packages — Logo, Website & Branding Bundles",
    description:
      "Explore Dezyon Studio combo packages — bundled logo, website, and branding solutions at special prices for startups and growing businesses.",
    keywords: [
      "combo design packages",
      "logo and website bundle",
      "branding package deals",
      "startup design bundle",
      "website branding combo",
    ],
    path: "/combo-packages",
  },
  privacyPolicy: {
    title: "Privacy Policy | Dezyon Studio — Data Protection & Cookies",
    description:
      "Read the Dezyon Studio privacy policy to understand how we collect, use, store, and protect your personal information across our website and services.",
    keywords: [
      "privacy policy",
      "data protection",
      "personal information",
      "cookie policy",
      "Dezyon Studio privacy",
    ],
    path: "/privacy-policy",
  },
  termsAndConditions: {
    title: "Terms & Conditions | Dezyon Studio Website & Services",
    description:
      "Review Dezyon Studio terms and conditions covering website use, service agreements, disclaimers, limitations of liability, and user responsibilities.",
    keywords: [
      "terms and conditions",
      "terms of service",
      "website terms of use",
      "service agreement",
      "legal terms",
    ],
    path: "/terms-and-conditions",
  },
  refundPolicy: {
    title: "Refund Policy | Dezyon Studio Design & Development Services",
    description:
      "Learn about Dezyon Studio's refund policy for design, branding, and development services, including eligibility, timelines, and how to submit a request.",
    keywords: [
      "refund policy",
      "design service refund",
      "development refund policy",
      "money back guarantee",
      "cancellation policy",
    ],
    path: "/refund-policy",
  },
  thankYou: {
    title: "Thank You | Dezyon Studio — Your Message Was Received",
    description:
      "Your contact form submission was received successfully. The Dezyon Studio team will get back to you shortly.",
    keywords: ["contact confirmation", "Dezyon Studio thank you"],
    path: "/contact/thank-you",
    noIndex: true,
  },
};

const PRICING_CATEGORY_KEYWORDS: Record<PackageCategoryId, string[]> = {
  logo: [
    "logo design packages",
    "custom logo pricing",
    "brand logo design cost",
    "logo design plans",
  ],
  "website-design": [
    "website design packages",
    "custom website pricing",
    "web design plans",
    "business website cost",
  ],
  branding: [
    "branding packages",
    "brand identity pricing",
    "corporate branding plans",
    "logo branding bundle",
  ],
  ecommerce: [
    "e-commerce website packages",
    "online store pricing",
    "ecommerce development plans",
    "shop setup packages",
  ],
  wordpress: [
    "WordPress website packages",
    "WordPress development pricing",
    "WordPress design plans",
    "business WordPress site cost",
  ],
  shopify: [
    "Shopify store packages",
    "Shopify development pricing",
    "Shopify design plans",
    "e-commerce Shopify cost",
  ],
  "video-animation": [
    "video animation packages",
    "explainer video pricing",
    "2D animation plans",
    "promo video production cost",
  ],
  seo: [
    "SEO packages",
    "search engine optimization pricing",
    "SEO service plans",
    "website SEO cost",
  ],
  "web-portal": [
    "web portal development packages",
    "custom portal pricing",
    "enterprise portal plans",
    "B2B portal development cost",
  ],
};

export function getCanonicalOrigin(): string {
  return CANONICAL_SITE_ORIGIN;
}

export function normalizeCanonicalPath(path: string): string {
  if (!path || path === "/") {
    return "/";
  }

  let normalized = path.trim();

  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }

  if (/\.[a-z0-9]+$/i.test(normalized)) {
    return normalized;
  }

  normalized = normalized.replace(/\/+$/, "");
  return `${normalized}/`;
}

export function buildCanonicalUrl(path: string): string {
  return `${getCanonicalOrigin()}${normalizeCanonicalPath(path)}`;
}

export function createPageAlternates(path: string): NonNullable<Metadata["alternates"]> {
  const canonical = buildCanonicalUrl(path);

  return {
    canonical,
  };
}

function resolveOgImage(path: string): string {
  return path.startsWith("http") ? path : `${getCanonicalOrigin()}${path}`;
}

export function getDocumentTitle(config: PageSeoConfig): string {
  if (config.path === "/") {
    return HOME_DOCUMENT_TITLE;
  }

  if (
    config.path === "/about" ||
    config.path === "/marketing" ||
    config.path === "/talking-website" ||
    config.path === "/plans-and-pricing" ||
    config.path === "/video-editing" ||
    config.path === "/contact" ||
    config.path === "/privacy-policy" ||
    config.path === "/terms-and-conditions" ||
    config.path === "/refund-policy" ||
    config.path === "/packages" ||
    config.path === "/contact/thank-you" ||
    config.path.startsWith("/pricing/")
  ) {
    return config.title;
  }

  return `${config.title} | ${SITE_NAME}`;
}

export function buildPageMetadata(config: PageSeoConfig): Metadata {
  const canonical = buildCanonicalUrl(config.path);
  const alternates = createPageAlternates(config.path);
  const ogImage = resolveOgImage(config.ogImage ?? DEFAULT_OG_IMAGE);
  const isHome = config.path === "/";
  const isAbout = config.path === "/about";
  const isMarketing = config.path === "/marketing";
  const isTalkingWebsite = config.path === "/talking-website";
  const isPlansAndPricing = config.path === "/plans-and-pricing";
  const isVideoEditing = config.path === "/video-editing";
  const isContact = config.path === "/contact";
  const isPrivacyPolicy = config.path === "/privacy-policy";
  const isTermsAndConditions = config.path === "/terms-and-conditions";
  const isRefundPolicy = config.path === "/refund-policy";
  const isPackages = config.path === "/packages";
  const isThankYou = config.path === "/contact/thank-you";
  const isPricingCategory = config.path.startsWith("/pricing/");
  const documentTitle = getDocumentTitle(config);
  const openGraphTitle = documentTitle;

  return {
    title:
      isHome || isAbout || isMarketing || isTalkingWebsite || isPlansAndPricing || isVideoEditing || isContact || isPrivacyPolicy || isTermsAndConditions || isRefundPolicy || isPackages || isThankYou || isPricingCategory
        ? { absolute: documentTitle }
        : config.title,
    description: config.description,
    keywords: config.keywords,
    alternates,
    robots: config.noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: openGraphTitle,
      description: config.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${config.title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: config.description,
      images: [ogImage],
    },
  };
}

export function createPageMetadata(key: PageSeoKey): Metadata {
  return buildPageMetadata(PAGE_SEO[key]);
}

/** Pins canonical, og:url, and og:image to CANONICAL_SITE_ORIGIN (never www). */
export function buildPageSeoMetadata(key: PageSeoKey): Metadata {
  const config = PAGE_SEO[key];
  const canonical = buildCanonicalUrl(config.path);
  const ogImage = resolveOgImage(config.ogImage ?? DEFAULT_OG_IMAGE);
  const base = buildPageMetadata(config);
  const openGraphBase =
    base.openGraph && typeof base.openGraph === "object" ? base.openGraph : {};
  const twitterBase =
    base.twitter && typeof base.twitter === "object" ? base.twitter : {};

  return {
    ...base,
    metadataBase: new URL(CANONICAL_SITE_ORIGIN),
    alternates: {
      canonical,
    },
    openGraph: {
      ...openGraphBase,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${config.title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      ...twitterBase,
      images: [ogImage],
    },
  };
}

export function createPricingCategoryMetadata(categoryId: PackageCategoryId): Metadata {
  const label =
    packageCategories.find((item) => item.id === categoryId)?.label ?? "Pricing";
  const meta = packageCategoryMeta[categoryId];

  return buildPageMetadata({
    title: `Dezyon Studio ${label} Packages — Pricing, Plans & Services`,
    description: meta.description,
    keywords: PRICING_CATEGORY_KEYWORDS[categoryId],
    path: getPricingCategoryPath(categoryId),
  });
}
