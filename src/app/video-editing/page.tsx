import { VideoEditingContent } from "@/components/VideoEditing/VideoEditingContent";
import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/structured-data";

export const metadata = createPageMetadata("videoEditing");

export default function VideoEditingPage() {
  const videoEditingSeo = PAGE_SEO.videoEditing;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Video Editing", path: "/video-editing" },
          ]),
          getWebPageJsonLd({
            name: videoEditingSeo.title,
            description: videoEditingSeo.description,
            path: videoEditingSeo.path,
          }),
        ]}
      />
      <TalkingWebsiteVoiceAssistant>
        <VideoEditingContent />
      </TalkingWebsiteVoiceAssistant>
    </>
  );
}
