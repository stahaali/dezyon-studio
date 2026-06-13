import { PlansAndPricingContent } from "@/components/PlansAndPricing/PlansAndPricingContent";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata = createPageMetadata("plansAndPricing");

export default function PlansAndPricingPage() {
  const plansSeo = PAGE_SEO.plansAndPricing;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Plans & Pricing", path: "/plans-and-pricing" },
          ]),
          getWebPageJsonLd({
            name: plansSeo.title,
            description: plansSeo.description,
            path: plansSeo.path,
          }),
        ]}
      />
      <PlansAndPricingContent />
    </>
  );
}
