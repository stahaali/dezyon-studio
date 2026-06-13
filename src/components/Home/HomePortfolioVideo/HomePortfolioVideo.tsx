import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePortfolioSection } from "@/data/home-portfolio";
import { portfolioBanner } from "@/data/portfolio";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./HomePortfolioVideo.module.css";

export function HomePortfolioVideo() {
  return (
    <section
      id="portfolio"
      className={styles.section}
      aria-labelledby="home-portfolio-heading"
    >
      <Container className={styles.sectionContainer}>
        <ScrollReveal>
          <header className={styles.header}>
            <h2
              id="home-portfolio-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              {homePortfolioSection.titlePrefix}
              <span className={styles.wordHighlight}>
                {homePortfolioSection.titleHighlight}
              </span>
              {homePortfolioSection.titleSuffix}
            </h2>
            <p className={styles.subtitle}>{homePortfolioSection.description}</p>
          </header>
        </ScrollReveal>
      </Container>

      <div className={styles.videoWrap}>
        <video
          className={styles.video}
          src={portfolioBanner.video}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <Container className={styles.sectionContainer}>
        <ScrollReveal>
          <div className={styles.footerCta}>
            <Link href={homePortfolioSection.cta.href} className={styles.ctaBtn}>
              {homePortfolioSection.cta.label}
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
