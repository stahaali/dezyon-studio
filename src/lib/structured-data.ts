import { services } from "@/data/services";
import { footerContact } from "@/data/site";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants";
import { DEFAULT_OG_IMAGE } from "./seo";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
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
    sameAs: [
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
      "https://www.instagram.com/",
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
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
      item: `${SITE_URL}${item.path}`,
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
    url: `${SITE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "en-US",
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
      url: SITE_URL,
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
