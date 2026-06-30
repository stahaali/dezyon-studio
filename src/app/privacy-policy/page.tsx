import { PrivacyContent } from "@/components/Legal/PrivacyContent/PrivacyContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata("privacyPolicy"),
  alternates: createPageAlternates(PAGE_SEO.privacyPolicy.path),
};

export default function PrivacyPolicyPage() {
  const privacySeo = PAGE_SEO.privacyPolicy;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
        title={privacySeo.title}
        description={privacySeo.description}
        path={privacySeo.path}
      />
      <PrivacyContent />
    </>
  );
}
