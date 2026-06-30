import { PAGE_SEO } from "@/lib/seo";
import { packageCategoryMeta, type PackageCategoryId } from "@/data/packages";
import type { ServiceSchemaInput } from "./types";

export const SERVICE_PAGE_DEFINITIONS: Record<string, ServiceSchemaInput> = {
  "/video-editing": {
    name: "Video Editing",
    serviceType: "Video Editing",
    description: PAGE_SEO.videoEditing.description,
    path: "/video-editing",
  },
  "/talking-website": {
    name: "AI Talking Websites",
    serviceType: "AI Talking Website Development",
    description: PAGE_SEO.talkingWebsite.description,
    path: "/talking-website",
  },
  "/web-apps": {
    name: "Web Design",
    serviceType: "Web Design",
    description: PAGE_SEO.webApps.description,
    path: "/web-apps",
  },
  "/website-audit": {
    name: "Website Audit",
    serviceType: "Website Audit",
    description: PAGE_SEO.websiteAudit.description,
    path: "/website-audit",
  },
  "/plans-and-pricing": {
    name: "AI Marketing Services",
    serviceType: "Digital Marketing",
    description: PAGE_SEO.plansAndPricing.description,
    path: "/plans-and-pricing",
  },
  "/combo-packages": {
    name: "Branding & Website Bundles",
    serviceType: "Branding",
    description: PAGE_SEO.comboPackages.description,
    path: "/combo-packages",
  },
};

const pricingServiceNames: Record<PackageCategoryId, { name: string; serviceType: string }> = {
  logo: { name: "Logo Design", serviceType: "Branding" },
  "website-design": { name: "Web Design", serviceType: "Web Design" },
  branding: { name: "Branding", serviceType: "Branding" },
  ecommerce: { name: "E-Commerce Development", serviceType: "E-Commerce Development" },
  wordpress: { name: "WordPress Web Design", serviceType: "Web Design" },
  shopify: { name: "Shopify Development", serviceType: "E-Commerce Development" },
  "video-animation": { name: "AI Video Ads", serviceType: "Video Production" },
  seo: { name: "SEO Services", serviceType: "Search Engine Optimization" },
  "web-portal": { name: "Web Portal Development", serviceType: "Web Application Development" },
};

export function getPricingServiceDefinition(category: PackageCategoryId): ServiceSchemaInput {
  const meta = packageCategoryMeta[category];
  const labels = pricingServiceNames[category];

  return {
    name: labels.name,
    serviceType: labels.serviceType,
    description: meta.description,
    path: `/pricing/${category}`,
  };
}
