import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { SiteAnalytics } from "@/components/Seo/SiteAnalytics";
import { GlobalSchema } from "@/components/Seo/schemas/GlobalSchema";
import { AppShell } from "@/components/Shared/AppShell";
import { GTM_CONTAINER_ID } from "@/lib/analytics-config";
import { siteMetadata } from "@/lib/metadata";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  ...siteMetadata,
  metadataBase: new URL(CANONICAL_SITE_ORIGIN),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      {GTM_CONTAINER_ID ? <GoogleTagManager gtmId={GTM_CONTAINER_ID} /> : null}
      <head>
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <GlobalSchema />
      </head>
      <body
        className="min-h-full flex flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <SiteAnalytics />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

