import { JsonLd } from "@/components/Seo/JsonLd";
import { buildPageSchemas } from "@/lib/schema/page-schemas";
import type { PageSchemaConfig } from "@/lib/schema/types";

type PageSchemaProps = PageSchemaConfig;

export function PageSchema(props: PageSchemaProps) {
  return <JsonLd data={buildPageSchemas(props)} />;
}
