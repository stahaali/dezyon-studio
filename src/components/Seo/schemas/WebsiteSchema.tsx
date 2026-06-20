import { JsonLd } from "@/components/Seo/JsonLd";
import { buildWebsiteSchema } from "@/lib/schema/builders";

export function WebsiteSchema() {
  return <JsonLd data={buildWebsiteSchema()} />;
}
