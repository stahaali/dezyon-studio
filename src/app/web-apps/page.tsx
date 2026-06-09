import type { Metadata } from "next";
import { WebAppsBanner } from "@/components/WebApps/WebAppsBanner/WebAppsBanner";
import { WebAppsCatalog } from "@/components/WebApps/WebAppsCatalog/WebAppsCatalog";
import { WebAppsTrust } from "@/components/WebApps/WebAppsTrust/WebAppsTrust";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Web Apps | ${SITE_NAME}`,
  description:
    "Custom web applications and digital platforms built by Dezyon Studio for startups and enterprises.",
};

export default function WebAppsPage() {
  return (
    <>
      <WebAppsBanner />
      <WebAppsTrust />
      <WebAppsCatalog />
    </>
  );
}
