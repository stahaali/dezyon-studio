import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";
import { createPageMetadata, getDocumentTitle, PAGE_SEO } from "./seo";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/assets/img/favicon.webp", type: "image/webp" }],
    shortcut: "/assets/img/favicon.webp",
    apple: "/assets/img/favicon.webp",
  },
  ...createPageMetadata("home"),
  title: {
    default: getDocumentTitle(PAGE_SEO.home),
    template: `%s | ${SITE_NAME}`,
  },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};
