import { ComboAdvanceSection } from "@/components/ComboPackages/ComboAdvanceSection/ComboAdvanceSection";
import { ComboPackagesBanner } from "@/components/ComboPackages/ComboPackagesBanner/ComboPackagesBanner";
import { ComboPackagesCatalog } from "@/components/ComboPackages/ComboPackagesCatalog/ComboPackagesCatalog";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { SERVICE_PAGE_DEFINITIONS } from "@/lib/structured-data";

export const metadata = createPageMetadata("comboPackages");

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
