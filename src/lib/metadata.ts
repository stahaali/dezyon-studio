import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";
import { createPageMetadata, PAGE_SEO } from "./seo";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata("home"),
  title: {
    default: PAGE_SEO.home.title,
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
