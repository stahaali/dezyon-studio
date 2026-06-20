import { JsonLd } from "@/components/Seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema/builders";

export function LocalBusinessSchema() {
  return <JsonLd data={buildLocalBusinessSchema()} />;
}
