import type { Metadata } from "next";
import { siteMetadata } from "@/lib/metadata";
import { GlobalSchema } from "@/components/Seo/schemas/GlobalSchema";
import { AppShell } from "@/components/Shared/AppShell";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
