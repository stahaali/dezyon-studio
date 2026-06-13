import { ComboAdvanceSection } from "@/components/ComboPackages/ComboAdvanceSection/ComboAdvanceSection";
import { ComboPackagesBanner } from "@/components/ComboPackages/ComboPackagesBanner/ComboPackagesBanner";
import { ComboPackagesCatalog } from "@/components/ComboPackages/ComboPackagesCatalog/ComboPackagesCatalog";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata = createPageMetadata("comboPackages");

export default function ComboPackagesPage() {
  const comboSeo = PAGE_SEO.comboPackages;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Combo Packages", path: "/combo-packages" },
          ]),
          getWebPageJsonLd({
            name: comboSeo.title,
            description: comboSeo.description,
            path: comboSeo.path,
          }),
        ]}
      />
      <ComboPackagesBanner />
      <ComboPackagesCatalog />
      <ComboAdvanceSection />
    </>
  );
}
