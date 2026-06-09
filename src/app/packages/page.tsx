import type { Metadata } from "next";
import { PackagesBanner } from "@/components/Packages/PackagesBanner/PackagesBanner";
import { PackagesCatalog } from "@/components/Packages/PackagesCatalog/PackagesCatalog";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Packages | ${SITE_NAME}`,
  description:
    "Browse Dezyon Studio packages for logos, websites, branding, e-commerce, SEO, and more.",
};

export default function PackagesPage() {
  return (
    <>
      <PackagesBanner />
      <PackagesCatalog />
    </>
  );
}
