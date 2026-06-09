import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export const DEFAULT_OG_IMAGE = "/assets/img/web-app/mobile-app-img1.jpg";

export type PageSeoKey =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "webApps"
  | "privacyPolicy"
  | "termsAndConditions"
  | "refundPolicy";

type PageSeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
};

export const PAGE_SEO: Record<PageSeoKey, PageSeoConfig> = {
  home: {
    title: "Digital Design, Branding & Web Development Agency",
    description:
      "Dezyon Studio delivers custom web design, branding, e-commerce development, mobile apps, and digital marketing for businesses ready to grow online.",
    keywords: [
      "digital agency",
      "web design company",
      "branding agency",
      "e-commerce development",
      "custom website design",
      "Dezyon Studio",
    ],
    path: "/",
  },
  about: {
    title: "About Our Digital Agency & Creative Team",
    description:
      "Discover Dezyon Studio — our story, values, team, and mission to build high-performing brands, websites, and digital experiences for clients worldwide.",
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
    title: "Logo, Branding, Web & App Development Services",
    description:
      "Explore Dezyon Studio services including logo design, branding, website development, mobile apps, 2D/3D animation, SEO, and digital marketing solutions.",
    keywords: [
      "logo design services",
      "branding services",
      "website development",
      "mobile app development",
      "digital marketing agency",
      "animation services",
    ],
    path: "/services",
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
    ogImage: "/assets/img/web-app/mobile-app-img2.jpg",
  },
  privacyPolicy: {
    title: "Privacy Policy & Data Protection",
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
    title: "Terms and Conditions of Service",
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
    title: "Refund Policy for Design & Development Services",
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
};

function resolveOgImage(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function createPageMetadata(key: PageSeoKey): Metadata {
  const config = PAGE_SEO[key];
  const canonical = `${SITE_URL}${config.path}`;
  const ogImage = resolveOgImage(config.ogImage ?? DEFAULT_OG_IMAGE);
  const fullTitle = `${config.title} | ${SITE_NAME}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: fullTitle,
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
      title: fullTitle,
      description: config.description,
      images: [ogImage],
    },
  };
}
