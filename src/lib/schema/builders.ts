import { contactFaq } from "@/data/contact";
import { services } from "@/data/services";
import { buildCanonicalUrl, HOME_DOCUMENT_TITLE } from "@/lib/seo";
import {
  BUSINESS_CATEGORIES,
  LOCAL_BUSINESS_ID,
  ORG_ADDRESS,
  ORG_DESCRIPTION,
  ORG_EMAIL,
  ORG_ID,
  ORG_LOGO,
  ORG_NAME,
  ORG_PHONE,
  ORG_SAME_AS,
  SCHEMA_SITE_URL,
  WEBSITE_ID,
} from "./constants";
import type { BreadcrumbItem, FaqItem, ServiceSchemaInput } from "./types";

function organizationReference() {
  return { "@id": ORG_ID };
}

function websiteReference() {
  return { "@id": WEBSITE_ID };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG_NAME,
    url: SCHEMA_SITE_URL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    description: ORG_DESCRIPTION,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    sameAs: ORG_SAME_AS,
    address: {
      "@type": "PostalAddress",
      ...ORG_ADDRESS,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: ORG_PHONE,
      email: ORG_EMAIL,
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: HOME_DOCUMENT_TITLE,
    alternateName: ORG_NAME,
    url: SCHEMA_SITE_URL,
    description: ORG_DESCRIPTION,
    publisher: organizationReference(),
    inLanguage: "en-US",
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": LOCAL_BUSINESS_ID,
    name: ORG_NAME,
    url: SCHEMA_SITE_URL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    description: `${ORG_DESCRIPTION} Categories: ${BUSINESS_CATEGORIES.join(" / ")}.`,
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    sameAs: ORG_SAME_AS,
    address: {
      "@type": "PostalAddress",
      ...ORG_ADDRESS,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    priceRange: "$$",
    parentOrganization: organizationReference(),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonicalUrl(item.path),
    })),
  };
}

export function buildWebPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: buildCanonicalUrl(path),
    isPartOf: websiteReference(),
    about: organizationReference(),
    inLanguage: "en-US",
  };
}

export function buildAboutPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name,
    description,
    url: buildCanonicalUrl(path),
    isPartOf: websiteReference(),
    about: organizationReference(),
    inLanguage: "en-US",
  };
}

export function buildContactPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name,
    description,
    url: buildCanonicalUrl(path),
    isPartOf: websiteReference(),
    about: organizationReference(),
    inLanguage: "en-US",
  };
}

function extractFaqAnswer(blocks: FaqItem["blocks"]): string {
  return blocks
    .map((block) => {
      if (block.type === "list") {
        return block.items.join(". ");
      }

      return block.parts
        .map((part) => (part.kind === "text" ? part.value : part.label))
        .join("");
    })
    .join(" ")
    .trim();
}

export function buildFaqSchema(items: readonly FaqItem[] = contactFaq.items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: extractFaqAnswer(item.blocks),
      },
    })),
  };
}

function buildServiceNode({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaInput) {
  return {
    "@type": "Service",
    "@id": `${buildCanonicalUrl(path)}#service`,
    name,
    description,
    serviceType: serviceType ?? name,
    url: buildCanonicalUrl(path),
    provider: organizationReference(),
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };
}

export function buildServiceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    ...buildServiceNode(input),
  };
}

export function buildServicesCatalogSchema() {
  const catalogServices = [
    ...services.map((service) => ({
      name: service.title,
      description: service.description,
      serviceType: service.title,
      path: servicePathById[service.id] ?? "/marketing",
    })),
    {
      name: "Web Design",
      description:
        "Professional, responsive web design services for businesses that need high-converting, modern websites.",
      serviceType: "Web Design",
      path: "/pricing/website-design",
    },
    {
      name: "Branding",
      description:
        "Complete branding services including logo design, brand identity systems, and visual guidelines.",
      serviceType: "Branding",
      path: "/pricing/branding",
    },
    {
      name: "Social Media Marketing",
      description:
        "Social media marketing services for content creation, campaign management, and audience growth.",
      serviceType: "Social Media Marketing",
      path: "/pricing/smm",
    },
    {
      name: "Automation",
      description:
        "Business automation solutions that streamline workflows, customer engagement, and marketing operations.",
      serviceType: "Business Automation",
      path: "/marketing",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${buildCanonicalUrl("/marketing")}#service-catalog`,
    name: `${ORG_NAME} Marketing`,
    description: ORG_DESCRIPTION,
    url: buildCanonicalUrl("/marketing"),
    provider: organizationReference(),
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${ORG_NAME} Service Catalog`,
      itemListElement: catalogServices.map((service) => ({
        "@type": "Offer",
        itemOffered: buildServiceNode(service),
      })),
    },
  };
}

export function buildSoftwareApplicationSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: buildCanonicalUrl(path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: organizationReference(),
    },
    provider: organizationReference(),
  };
}

export function buildWebApplicationSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: buildCanonicalUrl(path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    provider: organizationReference(),
  };
}

const servicePathById: Record<string, string> = {
  "talking-websites": "/talking-website",
  "custom-website-development": "/web-apps",
  "ai-video-creation": "/video-editing",
  "ai-marketing": "/plans-and-pricing",
  "ai-influencers": "/video-editing",
};

export function buildGlobalSchemas() {
  return [
    buildOrganizationSchema(),
    buildWebsiteSchema(),
    buildLocalBusinessSchema(),
  ];
}
