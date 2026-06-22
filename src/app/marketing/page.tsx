import { MarketingSolutions } from "@/components/Marketing/MarketingSolutions/MarketingSolutions";
import { MarketingVideoReels } from "@/components/Marketing/MarketingVideoReels/MarketingVideoReels";
import { MarketingWhyChoose } from "@/components/Marketing/MarketingWhyChoose/MarketingWhyChoose";
import { ServicesHero } from "@/components/Services/ServicesHero/ServicesHero";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata("services");

export default function MarketingPage() {
  const marketingSeo = PAGE_SEO.services;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Marketing", path: "/marketing" },
        ]}
        title={marketingSeo.title}
        description={marketingSeo.description}
        path={marketingSeo.path}
        serviceCatalog
      />
      <div className={styles.page}>
        <ServicesHero />
        <MarketingWhyChoose />
        <MarketingVideoReels />
        <MarketingSolutions />
      </div>
    </>
  );
}
