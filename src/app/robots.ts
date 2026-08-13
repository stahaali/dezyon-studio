import type { MetadataRoute } from "next";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-url";

export const dynamic = "force-static";

const DISALLOW_PATHS = [
  "/portfolio/",
  "/combo-packages/",
  "/pricing/",
  "/packages/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: DISALLOW_PATHS,
    },
    sitemap: `${CANONICAL_SITE_ORIGIN}/sitemap.xml`,
  };
}
