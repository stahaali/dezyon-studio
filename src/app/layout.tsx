import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { SiteAnalytics } from "@/components/Seo/SiteAnalytics";
import { GlobalSchema } from "@/components/Seo/schemas/GlobalSchema";
import { AppShell } from "@/components/Shared/AppShell";
import { GTM_CONTAINER_ID } from "@/lib/analytics-config";
import { siteMetadata } from "@/lib/metadata";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-url";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-lexend",
  preload: true,
  adjustFontFallback: true,
});

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
    <html
      lang="en"
      className={`h-full scroll-smooth ${lexend.variable}`}
      suppressHydrationWarning
    >
      {GTM_CONTAINER_ID ? <GoogleTagManager gtmId={GTM_CONTAINER_ID} /> : null}
      <head>
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <GlobalSchema />
      </head>
      <body
        className={`min-h-full flex flex-col font-sans antialiased ${lexend.className}`}
        suppressHydrationWarning
      >
        <SiteAnalytics />
        <AppShell>{children}</AppShell>

        <Script id="crisp-chat" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="069490b1-9da8-40f7-a708-3cc7b39d5068";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
