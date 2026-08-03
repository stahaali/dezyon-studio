import { MarketingSolutions } from "@/components/Marketing/MarketingSolutions/MarketingSolutions";
import { MarketingWhyChoose } from "@/components/Marketing/MarketingWhyChoose/MarketingWhyChoose";
import { MarketingVideoReels } from "@/components/Marketing/MarketingVideoReels/MarketingVideoReels";
import { ServicesHero } from "@/components/Services/ServicesHero/ServicesHero";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { buildPageSeoMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageSeoMetadata("services");

export default function MarketingPage() {
  const marketingSeo = PAGE_SEO.services;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Marketing Studio", path: "/marketing" },
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
