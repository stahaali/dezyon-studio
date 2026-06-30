import { AhrefsAnalytics } from "@/components/Seo/AhrefsAnalytics";
import { GoogleAnalytics } from "@/components/Seo/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/Seo/MicrosoftClarity";

export function SiteAnalytics() {
  return (
    <>
      <AhrefsAnalytics />
      <GoogleAnalytics />
      <MicrosoftClarity />
    </>
  );
}
