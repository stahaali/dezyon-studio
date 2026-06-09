import type { Metadata } from "next";
import { WebAppsBanner } from "@/components/WebApps/WebAppsBanner/WebAppsBanner";
import { WebAppsB2B } from "@/components/WebApps/WebAppsB2B/WebAppsB2B";
import { WebAppsDevelopment } from "@/components/WebApps/WebAppsDevelopment/WebAppsDevelopment";
import { WebAppsPackages } from "@/components/WebApps/WebAppsPackages/WebAppsPackages";
import { WebAppsTechnologies } from "@/components/WebApps/WebAppsTechnologies/WebAppsTechnologies";
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
      <WebAppsB2B />
      <WebAppsDevelopment />
      <WebAppsTechnologies />
      <WebAppsPackages />
    </>
  );
}
