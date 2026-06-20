import { JsonLd } from "@/components/Seo/JsonLd";
import { buildGlobalSchemas } from "@/lib/schema/builders";

export function GlobalSchema() {
  return <JsonLd data={buildGlobalSchemas()} />;
}
