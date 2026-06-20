import type { contactFaq } from "@/data/contact";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type FaqItem = (typeof contactFaq.items)[number];

export type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
};

export type PageSchemaVariant = "web" | "about" | "contact";

export type PageSchemaConfig = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description: string;
  path: string;
  variant?: PageSchemaVariant;
  services?: ServiceSchemaInput | ServiceSchemaInput[];
  faq?: readonly FaqItem[];
  softwareApplication?: boolean;
  webApplication?: boolean;
  serviceCatalog?: boolean;
};
