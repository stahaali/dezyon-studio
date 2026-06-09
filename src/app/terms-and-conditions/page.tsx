import { TermsContent } from "@/components/Legal/TermsContent/TermsContent";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata = createPageMetadata("termsAndConditions");

export default function TermsAndConditionsPage() {
  const termsSeo = PAGE_SEO.termsAndConditions;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Terms and Conditions", path: "/terms-and-conditions" },
          ]),
          getWebPageJsonLd({
            name: termsSeo.title,
            description: termsSeo.description,
            path: termsSeo.path,
          }),
        ]}
      />
      <TermsContent />
    </>
  );
}
