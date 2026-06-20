import { Suspense } from "react";
import { WebsiteAuditTool } from "@/components/WebsiteAudit/WebsiteAuditTool";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { SERVICE_PAGE_DEFINITIONS } from "@/lib/structured-data";

export const metadata = createPageMetadata("websiteAudit");

export default function WebsiteAuditPage() {
  const seo = PAGE_SEO.websiteAudit;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Website Audit", path: "/website-audit" },
        ]}
        title={seo.title}
        description={seo.description}
        path={seo.path}
        services={SERVICE_PAGE_DEFINITIONS["/website-audit"]}
        webApplication
      />
      <Suspense fallback={<div className="min-h-screen bg-[#000200]" />}>
        <WebsiteAuditTool />
      </Suspense>
    </>
  );
}
