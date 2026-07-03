import { TalkingWebsiteContent } from "@/components/TalkingWebsite/TalkingWebsiteContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { buildPageSeoMetadata, PAGE_SEO } from "@/lib/seo";
import { SERVICE_PAGE_DEFINITIONS } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageSeoMetadata("talkingWebsite");

export default function TalkingWebsitePage() {
  const talkingWebsiteSeo = PAGE_SEO.talkingWebsite;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Talking Website AI", path: "/talking-website" },
        ]}
        title={talkingWebsiteSeo.title}
        description={talkingWebsiteSeo.description}
        path={talkingWebsiteSeo.path}
        services={SERVICE_PAGE_DEFINITIONS["/talking-website"]}
        softwareApplication
      />
      <TalkingWebsiteContent />
    </>
  );
}