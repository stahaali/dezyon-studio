import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { siteMetadata } from "@/lib/metadata";
import {
  getOrganizationJsonLd,
  getSoftwareApplicationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/structured-data";
import { AppShell } from "@/components/Shared/AppShell";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    getOrganizationJsonLd(),
    getWebSiteJsonLd(),
    getSoftwareApplicationJsonLd(),
  ];

  return (
    <html lang="en" className={`${lexend.variable} h-full scroll-smooth`}>
      <head>
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
