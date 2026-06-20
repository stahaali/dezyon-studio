import { CTA } from "@/components/CTA/CTA";
import { ServicesGrid } from "@/components/Services/ServicesGrid/ServicesGrid";
import { ServicesHero } from "@/components/Services/ServicesHero/ServicesHero";
import gridStyles from "@/components/Services/ServicesGrid/ServicesGrid.module.css";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata("services");

export default function ServicesPage() {
  const servicesSeo = PAGE_SEO.services;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        title={servicesSeo.title}
        description={servicesSeo.description}
        path={servicesSeo.path}
        serviceCatalog
      />
      <div className={styles.page}>
        <ServicesHero />
        <ServicesGrid />
        <CTA compact containerClassName={gridStyles.container} />
      </div>
    </>
  );
}
