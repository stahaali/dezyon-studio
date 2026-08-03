import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_TWITTER_DESCRIPTION,
  SITE_TWITTER_HANDLE,
} from "./constants";
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
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: CANONICAL_SITE_ORIGIN,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: CANONICAL_SITE_ORIGIN,
    siteName: SITE_NAME,
    title: HOME_DOCUMENT_TITLE,
    description: SITE_OG_DESCRIPTION,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dezyon Studio - Custom Website Development & AI Call Assistant Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_DOCUMENT_TITLE,
    description: SITE_TWITTER_DESCRIPTION,
    images: [SITE_OG_IMAGE],
    creator: SITE_TWITTER_HANDLE,
  },
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
  verification: {
    google: "tdgsIkhSI_nNsDLaciiG_sgnCv_wJ7Kx-0s0yql-Mvc",
  },
  category: "technology",
  other: {
    title: HOME_DOCUMENT_TITLE,
  },
};
