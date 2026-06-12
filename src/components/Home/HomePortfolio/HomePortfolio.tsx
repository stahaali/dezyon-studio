"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {
  homePortfolioSection,
  homePortfolioTabs,
} from "@/data/home-portfolio";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./HomePortfolio.module.css";

export function HomePortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = homePortfolioTabs[activeIndex];
  const galleryId = `portfolio-${activeTab.id}`;

  useEffect(() => {
    Fancybox.bind(`[data-fancybox="${galleryId}"]`, {
      dragToClose: false,
      placeFocusBack: true,
      Carousel: {
        infinite: true,
      },
    });

    return () => {
      Fancybox.unbind(`[data-fancybox="${galleryId}"]`);
      Fancybox.close();
    };
  }, [galleryId]);

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

          <div className={styles.tabBar}>
            <ul className={styles.tabList} role="tablist">
              {homePortfolioTabs.map((tab, index) => (
                <li key={tab.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-controls={`portfolio-panel-${tab.id}`}
                    id={`portfolio-tab-${tab.id}`}
                    className={`${styles.tabBtn} ${activeIndex === index ? styles.tabBtnActive : ""}`.trim()}
                    onClick={() => setActiveIndex(index)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            id={`portfolio-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`portfolio-tab-${activeTab.id}`}
            className={styles.panel}
          >
            <div className={styles.portfolioGrid}>
              {activeTab.projects.map((project) => (
                <article key={project.id} className={styles.projectCard}>
                  <a
                    href={project.image}
                    data-fancybox={galleryId}
                    className={styles.projectLink}
                    aria-label={`View ${project.title}`}
                  >
                    <div className={styles.projectImageWrap}>
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1023px) 50vw, 25vw"
                        className={styles.projectImage}
                      />
                      <div className={styles.projectHover} aria-hidden="true">
                        <span className={styles.plusIcon}>
                          <Plus size={28} strokeWidth={2} />
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.footerCta}>
            <Button href={homePortfolioSection.cta.href} size="lg">
              {homePortfolioSection.cta.label}
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
