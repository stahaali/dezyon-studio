import Script from "next/script";
import { AHREFS_ANALYTICS_KEY } from "@/lib/analytics-config";

export function AhrefsAnalytics() {
  if (!AHREFS_ANALYTICS_KEY) {
    return null;
  }

  return (
    <Script
      id="ahrefs-analytics"
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={AHREFS_ANALYTICS_KEY}
      strategy="afterInteractive"
    />
  );
}
