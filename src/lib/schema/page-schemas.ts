import {
  buildAboutPageSchema,
  buildContactPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildServicesCatalogSchema,
  buildSoftwareApplicationSchema,
  buildWebApplicationSchema,
  buildWebPageSchema,
} from "./builders";
import type { PageSchemaConfig } from "./types";

export function buildPageSchemas(config: PageSchemaConfig) {
  const pageInput = {
    name: config.title,
    description: config.description,
    path: config.path,
  };

  const schemas: Record<string, unknown>[] = [buildBreadcrumbSchema(config.breadcrumbs)];

  if (config.variant === "about") {
    schemas.push(buildAboutPageSchema(pageInput));
  } else if (config.variant === "contact") {
    schemas.push(buildContactPageSchema(pageInput));
  } else {
    schemas.push(buildWebPageSchema(pageInput));
  }

  if (config.serviceCatalog) {
    schemas.push(buildServicesCatalogSchema());
  }

  if (config.services) {
    const serviceList = Array.isArray(config.services) ? config.services : [config.services];
    schemas.push(...serviceList.map((service) => buildServiceSchema(service)));
  }

  if (config.faq?.length) {
    schemas.push(buildFaqSchema(config.faq));
  }

  if (config.softwareApplication) {
    schemas.push(buildSoftwareApplicationSchema(pageInput));
  }

  if (config.webApplication) {
    schemas.push(buildWebApplicationSchema(pageInput));
  }

  return schemas;
}
