import { Suspense } from "react";
import { WebsiteAuditTool } from "@/components/WebsiteAudit/WebsiteAuditTool";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/structured-data";

export const metadata = createPageMetadata("websiteAudit");

export default function WebsiteAuditPage() {
  const seo = PAGE_SEO.websiteAudit;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Website Audit", path: "/website-audit" },
          ]),
          getWebPageJsonLd({
            name: seo.title,
            description: seo.description,
            path: seo.path,
          }),
        ]}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#000200]" />}>
        <WebsiteAuditTool />
      </Suspense>
    </>
  );
}
