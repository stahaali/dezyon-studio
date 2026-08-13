import type { MetadataRoute } from "next";
import { buildCanonicalUrl, PAGE_SEO, type PageSeoKey } from "@/lib/seo";

export const dynamic = "force-static";

const SITEMAP_CONFIG: Record<
  PageSeoKey,
  { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
> = {
  home: { changeFrequency: "weekly", priority: 1 },
  about: { changeFrequency: "monthly", priority: 0.8 },
  services: { changeFrequency: "weekly", priority: 0.9 },
  videoEditing: { changeFrequency: "weekly", priority: 0.85 },
  webApps: { changeFrequency: "weekly", priority: 0.85 },
  contact: { changeFrequency: "monthly", priority: 0.8 },
  websiteAudit: { changeFrequency: "weekly", priority: 0.9 },
  talkingWebsite: { changeFrequency: "weekly", priority: 0.9 },
  plansAndPricing: { changeFrequency: "weekly", priority: 0.9 },
  privacyPolicy: { changeFrequency: "yearly", priority: 0.3 },
  termsAndConditions: { changeFrequency: "yearly", priority: 0.3 },
  refundPolicy: { changeFrequency: "yearly", priority: 0.3 },
  thankYou: { changeFrequency: "yearly", priority: 0.1 },
  blogWebsiteSalesperson: { changeFrequency: "monthly", priority: 0.7 },
  seoServices: { changeFrequency: "weekly", priority: 0.9 },
  bookPublishing: { changeFrequency: "weekly", priority: 0.85 },
};

const INDEXABLE_PAGE_KEYS = (Object.keys(PAGE_SEO) as PageSeoKey[]).filter(
  (key) => !PAGE_SEO[key].noIndex,
);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pageEntries = INDEXABLE_PAGE_KEYS.map((key) => ({
    url: buildCanonicalUrl(PAGE_SEO[key].path),
    lastModified,
    changeFrequency: SITEMAP_CONFIG[key].changeFrequency,
    priority: SITEMAP_CONFIG[key].priority,
  }));

  return pageEntries;
}
