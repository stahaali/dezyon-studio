import { notFound } from "next/navigation";
import { PackagesBanner } from "@/components/Packages/PackagesBanner/PackagesBanner";
import { PackagesCatalog } from "@/components/Packages/PackagesCatalog/PackagesCatalog";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import {
  getPricingCategoryPath,
  isPackageCategoryId,
  packageCategories,
  packageCategoryMeta,
  type PackageCategoryId,
} from "@/data/packages";
import { createPageAlternates, createPricingCategoryMetadata } from "@/lib/seo";
import { getPricingServiceDefinition } from "@/lib/structured-data";

type PricingCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return packageCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: PricingCategoryPageProps) {
  const { category } = await params;

  if (!isPackageCategoryId(category)) {
    const path = getPricingCategoryPath("logo");
    return {
      ...createPricingCategoryMetadata("logo"),
      alternates: createPageAlternates(path),
    };
  }

  const path = getPricingCategoryPath(category);

  return {
    ...createPricingCategoryMetadata(category),
    alternates: createPageAlternates(path),
  };
}

export default async function PricingCategoryPage({ params }: PricingCategoryPageProps) {
  const { category } = await params;

  if (!isPackageCategoryId(category)) {
    notFound();
  }

  const label =
    packageCategories.find((item) => item.id === category)?.label ?? "Pricing";
  const meta = packageCategoryMeta[category];
  const pageTitle = `${label} Pricing Packages`;
  const pagePath = `/pricing/${category}`;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Plans & Pricing", path: "/plans-and-pricing" },
          { name: `${label} Pricing`, path: pagePath },
        ]}
        title={pageTitle}
        description={meta.description}
        path={pagePath}
        services={getPricingServiceDefinition(category as PackageCategoryId)}
      />
      <PackagesBanner categoryId={category as PackageCategoryId} />
      <PackagesCatalog category={category as PackageCategoryId} />
    </>
  );
}
