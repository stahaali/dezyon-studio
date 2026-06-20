import { RefundContent } from "@/components/Legal/RefundContent/RefundContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = createPageMetadata("refundPolicy");

export default function RefundPolicyPage() {
  const refundSeo = PAGE_SEO.refundPolicy;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Refund Policy", path: "/refund-policy" },
        ]}
        title={refundSeo.title}
        description={refundSeo.description}
        path={refundSeo.path}
      />
      <RefundContent />
    </>
  );
}
