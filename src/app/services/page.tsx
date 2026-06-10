import { CTA } from "@/components/CTA/CTA";
import { ServicesGrid } from "@/components/Services/ServicesGrid/ServicesGrid";
import { ServicesHero } from "@/components/Services/ServicesHero/ServicesHero";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getServicesJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";
import styles from "./page.module.css";

export const metadata = createPageMetadata("services");

export default function ServicesPage() {
  const servicesSeo = PAGE_SEO.services;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          getWebPageJsonLd({
            name: servicesSeo.title,
            description: servicesSeo.description,
            path: servicesSeo.path,
          }),
          getServicesJsonLd(),
        ]}
      />
      <div className={styles.page}>
        <ServicesHero />
        <ServicesGrid />
        <div className={styles.ctaWrap}>
          <CTA />
        </div>
      </div>
    </>
  );
}
