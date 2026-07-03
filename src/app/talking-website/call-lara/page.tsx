import { TalkingWebsiteVoicePage } from "@/components/Vapi/TalkingWebsiteVoicePage";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const CALL_LARA_PATH = "/talking-website/call-lara";

export const metadata: Metadata = {
  ...createPageMetadata("talkingWebsite"),
  title: "Call Lara | Talking Website AI | Dezyon Studio",
  description:
    "Talk live with Lara, your AI website assistant. Get answers about Dezyon Studio services, pricing, and talking websites.",
  alternates: createPageAlternates(CALL_LARA_PATH),
};

export default function CallLaraPage() {
  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Talking Website AI", path: "/talking-website" },
          { name: "Call Lara", path: CALL_LARA_PATH },
        ]}
        title="Call Lara"
        description="Talk live with Lara, your AI website assistant."
        path={CALL_LARA_PATH}
      />
      <TalkingWebsiteVoicePage />
    </>
  );
}