import { TermsContent } from "@/components/Legal/TermsContent/TermsContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata("termsAndConditions"),
  alternates: createPageAlternates(PAGE_SEO.termsAndConditions.path),
};

export default function TermsAndConditionsPage() {
  const termsSeo = PAGE_SEO.termsAndConditions;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms-and-conditions" },
        ]}
        title={termsSeo.title}
        description={termsSeo.description}
        path={termsSeo.path}
      />
      <TermsContent />
    </>
  );
}
