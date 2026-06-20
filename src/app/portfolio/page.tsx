import { PortfolioBanner } from "@/components/Portfolio/PortfolioBanner/PortfolioBanner";
import { HomePortfolio } from "@/components/Home/HomePortfolio/HomePortfolio";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata("portfolio");

export default function PortfolioPage() {
  const portfolioSeo = PAGE_SEO.portfolio;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ]}
        title={portfolioSeo.title}
        description={portfolioSeo.description}
        path={portfolioSeo.path}
      />
      <div className={styles.page}>
        <PortfolioBanner />
        <div className={styles.portfolioContent}>
          <HomePortfolio showHeader={false} />
        </div>
      </div>
    </>
  );
}
