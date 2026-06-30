import { RefundContent } from "@/components/Legal/RefundContent/RefundContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata("refundPolicy"),
  alternates: createPageAlternates(PAGE_SEO.refundPolicy.path),
};

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
