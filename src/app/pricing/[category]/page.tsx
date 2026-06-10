import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackagesBanner } from "@/components/Packages/PackagesBanner/PackagesBanner";
import { PackagesCatalog } from "@/components/Packages/PackagesCatalog/PackagesCatalog";
import {
  isPackageCategoryId,
  packageCategories,
  packageCategoryMeta,
  type PackageCategoryId,
} from "@/data/packages";
import { SITE_NAME } from "@/lib/constants";

type PricingCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return packageCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({
  params,
}: PricingCategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!isPackageCategoryId(category)) {
    return { title: `Pricing | ${SITE_NAME}` };
  }

  const label = packageCategories.find((item) => item.id === category)?.label ?? "Pricing";
  const description = packageCategoryMeta[category].description;

  return {
    title: `${label} Pricing | ${SITE_NAME}`,
    description,
  };
}

export default async function PricingCategoryPage({ params }: PricingCategoryPageProps) {
  const { category } = await params;

  if (!isPackageCategoryId(category)) {
    notFound();
  }

  return (
    <>
      <PackagesBanner categoryId={category as PackageCategoryId} />
      <PackagesCatalog category={category as PackageCategoryId} />
    </>
  );
}
