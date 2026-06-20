import { PlansAndPricingContent } from "@/components/PlansAndPricing/PlansAndPricingContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { SERVICE_PAGE_DEFINITIONS } from "@/lib/structured-data";

export const metadata = createPageMetadata("plansAndPricing");

export default function PlansAndPricingPage() {
  const plansSeo = PAGE_SEO.plansAndPricing;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Plans & Pricing", path: "/plans-and-pricing" },
        ]}
        title={plansSeo.title}
        description={plansSeo.description}
        path={plansSeo.path}
        services={SERVICE_PAGE_DEFINITIONS["/plans-and-pricing"]}
      />
      <PlansAndPricingContent />
    </>
  );
}
