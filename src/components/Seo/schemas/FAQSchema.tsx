import { JsonLd } from "@/components/Seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema/builders";
import type { FaqItem } from "@/lib/schema/types";

type FAQSchemaProps = {
  items: readonly FaqItem[];
};

export function FAQSchema({ items }: FAQSchemaProps) {
  return <JsonLd data={buildFaqSchema(items)} />;
}
