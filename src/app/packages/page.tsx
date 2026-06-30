import { redirect } from "next/navigation";
import { getPricingCategoryPath } from "@/data/packages";
import { buildPageMetadata, createPageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

const logoPricingPath = getPricingCategoryPath("logo");

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Dezyon Studio Packages — Logo, Website & Branding Pricing",
    description: "Browse Dezyon Studio design and development packages.",
    keywords: ["design packages", "website packages", "Dezyon Studio pricing"],
    path: logoPricingPath,
    noIndex: true,
  }),
  alternates: createPageAlternates(logoPricingPath),
};

export default function PackagesPage() {
  redirect(logoPricingPath);
}
