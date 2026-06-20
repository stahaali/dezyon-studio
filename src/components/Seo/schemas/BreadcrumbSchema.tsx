import { JsonLd } from "@/components/Seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import type { BreadcrumbItem } from "@/lib/schema/types";

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return <JsonLd data={buildBreadcrumbSchema(items)} />;
}
