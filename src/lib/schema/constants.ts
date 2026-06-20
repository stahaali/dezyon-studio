import { footerContact, footerSocialLinks, sideRailSocialLinks } from "@/data/site";
import { SITE_NAME } from "@/lib/constants";
import { buildCanonicalUrl } from "@/lib/seo";

export const SCHEMA_SITE_URL = "https://www.dezyonstudio.com";

export const ORG_ID = `${SCHEMA_SITE_URL}/#organization`;
export const WEBSITE_ID = `${SCHEMA_SITE_URL}/#website`;
export const LOCAL_BUSINESS_ID = `${SCHEMA_SITE_URL}/#localbusiness`;

export const ORG_NAME = SITE_NAME;

export const ORG_DESCRIPTION =
  "AI Advertising & Growth Agency specializing in AI Video Ads, AI Talking Websites, AI Influencers, Web Design, Automation, and Social Media Growth.";

export const ORG_LOGO = buildCanonicalUrl("/assets/img/logo-1.webp");

export const ORG_EMAIL = footerContact.email;
export const ORG_PHONE = "+1 346-421-2554";

export const ORG_ADDRESS = {
  streetAddress: footerContact.address,
  addressLocality: "Spring",
  addressRegion: "TX",
  postalCode: "77379",
  addressCountry: "US",
} as const;

export const ORG_SAME_AS = [
  ...new Set(
    [...footerSocialLinks, ...sideRailSocialLinks]
      .map((link) => link.href)
      .filter((href) => href.startsWith("http")),
  ),
];

export const BUSINESS_CATEGORIES = [
  "Advertising Agency",
  "Digital Marketing Agency",
] as const;
