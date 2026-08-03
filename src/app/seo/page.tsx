import { SeoPageContent } from "@/components/SeoPage/SeoPageContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { buildPageSeoMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageSeoMetadata("seoServices");

export default function SeoServicesPage() {
  const seo = PAGE_SEO.seoServices;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "SEO", path: "/seo" },
        ]}
        title={seo.title}
        description={seo.description}
        path={seo.path}
        serviceCatalog
      />
      <div className={styles.page}>
        <SeoPageContent />
      </div>
    </>
  );
}
