import type { PackageCategoryId } from "@/data/packages";
import { getPricingCategoryPath, packageCategories } from "@/data/packages";

export type PricingMenuItem = {
  id: PackageCategoryId;
  label: string;
  href: string;
  color: string;
};

const categoryColors: Record<PackageCategoryId, string> = {
  logo: "#abf503",
  "website-design": "#3b82f6",
  branding: "#a855f7",
  ecommerce: "#f97316",
  wordpress: "#0ea5e9",
  shopify: "#22c55e",
  "video-animation": "#ef4444",
  seo: "#eab308",
  smm: "#ec4899",
  "web-portal": "#6366f1",
};

export const pricingMenuItems: PricingMenuItem[] = packageCategories.map((category) => ({
  id: category.id,
  label: category.label,
  href: getPricingCategoryPath(category.id),
  color: categoryColors[category.id],
}));
