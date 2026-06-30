import { VideoEditingContent } from "@/components/VideoEditing/VideoEditingContent";
import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { SERVICE_PAGE_DEFINITIONS } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata("videoEditing"),
  alternates: createPageAlternates(PAGE_SEO.videoEditing.path),
};

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
