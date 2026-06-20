import { TermsContent } from "@/components/Legal/TermsContent/TermsContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = createPageMetadata("termsAndConditions");

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
