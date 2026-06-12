import type { Metadata } from "next";
import { siteMetadata } from "@/lib/metadata";
import {
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/structured-data";
import { AppShell } from "@/components/Shared/AppShell";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [getOrganizationJsonLd(), getWebSiteJsonLd()];

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
