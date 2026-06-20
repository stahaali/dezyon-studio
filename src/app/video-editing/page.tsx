import { VideoEditingContent } from "@/components/VideoEditing/VideoEditingContent";
import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { SERVICE_PAGE_DEFINITIONS } from "@/lib/structured-data";

export const metadata = createPageMetadata("videoEditing");

export default function VideoEditingPage() {
  const videoEditingSeo = PAGE_SEO.videoEditing;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Video Editing", path: "/video-editing" },
        ]}
        title={videoEditingSeo.title}
        description={videoEditingSeo.description}
        path={videoEditingSeo.path}
        services={SERVICE_PAGE_DEFINITIONS["/video-editing"]}
      />
      <TalkingWebsiteVoiceAssistant>
        <VideoEditingContent />
      </TalkingWebsiteVoiceAssistant>
    </>
  );
}
