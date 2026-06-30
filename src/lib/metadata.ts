import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "./constants";
import { CANONICAL_SITE_ORIGIN } from "./site-url";
import { HOME_DOCUMENT_TITLE } from "./seo";

export const siteMetadata: Metadata = {
  metadataBase: new URL(CANONICAL_SITE_ORIGIN),
  icons: {
    icon: [{ url: "/assets/img/favicon.webp", type: "image/webp" }],
    shortcut: "/assets/img/favicon.webp",
    apple: "/assets/img/favicon.webp",
  },
  title: {
    default: HOME_DOCUMENT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
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
