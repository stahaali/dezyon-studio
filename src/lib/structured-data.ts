import { contactFaq } from "@/data/contact";
import { services } from "@/data/services";
import { footerContact } from "@/data/site";
import { SITE_DESCRIPTION, SITE_NAME } from "./constants";
import { buildCanonicalUrl, DEFAULT_OG_IMAGE } from "./seo";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqBlock =
  (typeof contactFaq.items)[number]["blocks"][number];

function extractFaqAnswer(blocks: readonly FaqBlock[]): string {
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

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: buildCanonicalUrl("/"),
    description: SITE_DESCRIPTION,
    logo: buildCanonicalUrl("/logo.svg"),
    image: buildCanonicalUrl(DEFAULT_OG_IMAGE),
    email: footerContact.email,
    telephone: footerContact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: footerContact.address,
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: footerContact.phone,
      email: footerContact.email,
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: buildCanonicalUrl("/"),
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: buildCanonicalUrl("/"),
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
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

export function getWebPageJsonLd({
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
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: buildCanonicalUrl("/"),
    },
    inLanguage: "en-US",
  };
}

export function getAboutPageJsonLd({
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
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: buildCanonicalUrl("/"),
    },
    inLanguage: "en-US",
    about: {
      "@type": "Organization",
      name: SITE_NAME,
      url: buildCanonicalUrl("/"),
    },
  };
}

export function getContactPageJsonLd({
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
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: buildCanonicalUrl("/"),
    },
    inLanguage: "en-US",
  };
}

export function getFaqPageJsonLd(
  items: readonly (typeof contactFaq.items)[number][] = contactFaq.items,
) {
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

export function getServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Agency Services",
    description:
      "Professional logo design, branding, website development, mobile apps, animation, and digital marketing services.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: buildCanonicalUrl("/"),
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${SITE_NAME} Services`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
          },
        },
      })),
    },
  };
}

export function getSoftwareApplicationJsonLd({
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
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: buildCanonicalUrl("/"),
    },
  };
}
