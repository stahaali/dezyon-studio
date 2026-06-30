import { ComboAdvanceSection } from "@/components/ComboPackages/ComboAdvanceSection/ComboAdvanceSection";
import { ComboPackagesBanner } from "@/components/ComboPackages/ComboPackagesBanner/ComboPackagesBanner";
import { ComboPackagesCatalog } from "@/components/ComboPackages/ComboPackagesCatalog/ComboPackagesCatalog";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { SERVICE_PAGE_DEFINITIONS } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata("comboPackages"),
  alternates: createPageAlternates(PAGE_SEO.comboPackages.path),
};

export default function ComboPackagesPage() {
  const comboSeo = PAGE_SEO.comboPackages;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Combo Packages", path: "/combo-packages" },
        ]}
        title={comboSeo.title}
        description={comboSeo.description}
        path={comboSeo.path}
        services={SERVICE_PAGE_DEFINITIONS["/combo-packages"]}
      />
      <ComboPackagesBanner />
      <ComboPackagesCatalog />
      <ComboAdvanceSection />
    </>
  );
}
