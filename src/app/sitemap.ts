import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { PAGE_SEO, type PageSeoKey } from "@/lib/seo";

const SITEMAP_CONFIG: Record<
  PageSeoKey,
  { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
> = {
  home: { changeFrequency: "weekly", priority: 1 },
  about: { changeFrequency: "monthly", priority: 0.8 },
  services: { changeFrequency: "weekly", priority: 0.9 },
  portfolio: { changeFrequency: "weekly", priority: 0.85 },
  webApps: { changeFrequency: "weekly", priority: 0.85 },
  privacyPolicy: { changeFrequency: "yearly", priority: 0.3 },
  termsAndConditions: { changeFrequency: "yearly", priority: 0.3 },
  refundPolicy: { changeFrequency: "yearly", priority: 0.3 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return (Object.keys(PAGE_SEO) as PageSeoKey[]).map((key) => ({
    url: `${SITE_URL}${PAGE_SEO[key].path}`,
    lastModified,
    changeFrequency: SITEMAP_CONFIG[key].changeFrequency,
    priority: SITEMAP_CONFIG[key].priority,
  }));
}
