import type { Metadata } from "next";
import { ComboAdvanceSection } from "@/components/ComboPackages/ComboAdvanceSection/ComboAdvanceSection";
import { ComboPackagesBanner } from "@/components/ComboPackages/ComboPackagesBanner/ComboPackagesBanner";
import { ComboPackagesCatalog } from "@/components/ComboPackages/ComboPackagesCatalog/ComboPackagesCatalog";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Combo Packages | ${SITE_NAME}`,
  description:
    "Explore Dezyon Studio combo packages — bundled logo, website, and branding solutions at special prices.",
};

export default function ComboPackagesPage() {
  return (
    <>
      <ComboPackagesBanner />
      <ComboPackagesCatalog />
      <ComboAdvanceSection />
    </>
  );
}
