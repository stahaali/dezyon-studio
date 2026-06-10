import { PortfolioBanner } from "@/components/Portfolio/PortfolioBanner/PortfolioBanner";
import { PortfolioGrid } from "@/components/Portfolio/PortfolioGrid/PortfolioGrid";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";
import styles from "./page.module.css";

export const metadata = createPageMetadata("portfolio");

export default function PortfolioPage() {
  const portfolioSeo = PAGE_SEO.portfolio;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
          getWebPageJsonLd({
            name: portfolioSeo.title,
            description: portfolioSeo.description,
            path: portfolioSeo.path,
          }),
        ]}
      />
      <div className={styles.page}>
        <PortfolioBanner />
        <PortfolioGrid />
      </div>
    </>
  );
}
