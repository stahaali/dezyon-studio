import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { TalkingWebsiteContent } from "@/components/TalkingWebsite/TalkingWebsiteContent";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getSoftwareApplicationJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata = createPageMetadata("talkingWebsite");

export default function TalkingWebsitePage() {
  const talkingWebsiteSeo = PAGE_SEO.talkingWebsite;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Talking Website AI", path: "/talking-website" },
          ]),
          getWebPageJsonLd({
            name: talkingWebsiteSeo.title,
            description: talkingWebsiteSeo.description,
            path: talkingWebsiteSeo.path,
          }),
          getSoftwareApplicationJsonLd({
            name: talkingWebsiteSeo.title,
            description: talkingWebsiteSeo.description,
            path: talkingWebsiteSeo.path,
          }),
        ]}
      />
      <TalkingWebsiteVoiceAssistant>
        <TalkingWebsiteContent />
      </TalkingWebsiteVoiceAssistant>
    </>
  );
}
