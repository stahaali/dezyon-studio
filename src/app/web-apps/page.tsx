import { JsonLd } from "@/components/Seo/JsonLd";
import { WebAppsBanner } from "@/components/WebApps/WebAppsBanner/WebAppsBanner";
import { WebAppsB2B } from "@/components/WebApps/WebAppsB2B/WebAppsB2B";
import { WebAppsDevelopment } from "@/components/WebApps/WebAppsDevelopment/WebAppsDevelopment";
import { WebAppsPackages } from "@/components/WebApps/WebAppsPackages/WebAppsPackages";
import { WebAppsTechnologies } from "@/components/WebApps/WebAppsTechnologies/WebAppsTechnologies";
import { WebAppsTrust } from "@/components/WebApps/WebAppsTrust/WebAppsTrust";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata = createPageMetadata("webApps");

export default function WebAppsPage() {
  const webAppsSeo = PAGE_SEO.webApps;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Web Apps", path: "/web-apps" },
          ]),
          getWebPageJsonLd({
            name: webAppsSeo.title,
            description: webAppsSeo.description,
            path: webAppsSeo.path,
          }),
        ]}
      />
      <WebAppsBanner />
      <WebAppsTrust />
      <WebAppsB2B />
      <WebAppsDevelopment />
      <WebAppsTechnologies />
      <WebAppsPackages />
    </>
  );
}
