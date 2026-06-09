import { RefundContent } from "@/components/Legal/RefundContent/RefundContent";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata = createPageMetadata("refundPolicy");

export default function RefundPolicyPage() {
  const refundSeo = PAGE_SEO.refundPolicy;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Refund Policy", path: "/refund-policy" },
          ]),
          getWebPageJsonLd({
            name: refundSeo.title,
            description: refundSeo.description,
            path: refundSeo.path,
          }),
        ]}
      />
      <RefundContent />
    </>
  );
}
