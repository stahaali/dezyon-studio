import { JsonLd } from "@/components/Seo/JsonLd";
import { buildOrganizationSchema } from "@/lib/schema/builders";

export function OrganizationSchema() {
  return <JsonLd data={buildOrganizationSchema()} />;
}
