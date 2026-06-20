import { JsonLd } from "@/components/Seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema/builders";
import type { ServiceSchemaInput } from "@/lib/schema/types";

type ServiceSchemaProps = ServiceSchemaInput;

export function ServiceSchema(props: ServiceSchemaProps) {
  return <JsonLd data={buildServiceSchema(props)} />;
}
