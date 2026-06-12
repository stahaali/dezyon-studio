import { TalkingWebsiteContent } from "@/components/TalkingWebsite/TalkingWebsiteContent";
import { JsonLd } from "@/components/Seo/JsonLd";
import { SITE_NAME } from "@/lib/constants";
import {
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Talking Website™ AI — 24/7 Voice Sales Assistant | ${SITE_NAME}`,
  description:
    "Turn your website into a 24/7 sales representative with Talking Website™ AI. Real-time voice conversations, lead qualification, appointment booking, and CRM integration.",
};

export default function TalkingWebsitePage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Talking Website™ AI", path: "/talking-website" },
          ]),
          getWebPageJsonLd({
            name: "Talking Website™ AI",
            description:
              "AI voice assistant for your website — qualify leads, book appointments, and convert visitors through real-time conversation.",
            path: "/talking-website",
          }),
        ]}
      />
      <TalkingWebsiteContent />
    </>
  );
}
