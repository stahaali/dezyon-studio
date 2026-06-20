import Image from "next/image";
import { portfolioBanner } from "@/data/portfolio";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { PortfolioBannerLogoGrid } from "./PortfolioBannerLogoGrid";
import styles from "./PortfolioBanner.module.css";

export function PortfolioBanner() {
  const { stars } = portfolioBanner;

  return (
    <section className={styles.section} aria-labelledby="portfolio-banner-heading">
      <div className={styles.bannerBg} aria-hidden="true">
        <PortfolioBannerLogoGrid />
        <div className={styles.bannerBgOverlay} />
      </div>

      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.headingWrap}>
              <div className={styles.titleRow}>
                <Image
                  src={stars.left.src}
                  alt={stars.left.alt}
                  width={stars.left.width}
                  height={stars.left.height}
                  className={styles.starLeft}
                  aria-hidden="true"
                />
                <h1
                  id="portfolio-banner-heading"
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
                >
                  <span className={splitTitleStyles.lightOnDark}>
                    {portfolioBanner.titlePrefix}
                    <span className={styles.wordHighlight}>
                      {portfolioBanner.titleHighlight}
                    </span>
                  </span>
                </h1>
                <Image
                  src={stars.right.src}
                  alt={stars.right.alt}
                  width={stars.right.width}
                  height={stars.right.height}
                  className={styles.starRight}
                  aria-hidden="true"
                />
              </div>
            </div>
            <p className={styles.description}>{portfolioBanner.description}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
