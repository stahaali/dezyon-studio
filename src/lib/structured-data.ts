export {
  buildAboutPageSchema as getAboutPageJsonLd,
  buildBreadcrumbSchema as getBreadcrumbJsonLd,
  buildContactPageSchema as getContactPageJsonLd,
  buildFaqSchema as getFaqPageJsonLd,
  buildOrganizationSchema as getOrganizationJsonLd,
  buildServiceSchema as getServiceJsonLd,
  buildServicesCatalogSchema as getServicesJsonLd,
  buildSoftwareApplicationSchema as getSoftwareApplicationJsonLd,
  buildWebApplicationSchema as getWebApplicationJsonLd,
  buildWebPageSchema as getWebPageJsonLd,
  buildWebsiteSchema as getWebSiteJsonLd,
  buildLocalBusinessSchema as getLocalBusinessJsonLd,
} from "@/lib/schema/builders";

export type { BreadcrumbItem } from "@/lib/schema/types";

export { buildPageSchemas } from "@/lib/schema/page-schemas";
export { SERVICE_PAGE_DEFINITIONS, getPricingServiceDefinition } from "@/lib/schema/service-definitions";
