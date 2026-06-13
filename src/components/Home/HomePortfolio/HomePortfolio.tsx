"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();
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

  const panelMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] as const },
      };

  const cardMotion = (index: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28, scale: 0.96 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: {
            duration: 0.42,
            delay: Math.min(index * 0.04, 0.48),
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          },
        };

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

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              id={`portfolio-panel-${activeTab.id}`}
              role="tabpanel"
              aria-labelledby={`portfolio-tab-${activeTab.id}`}
              className={styles.panel}
              {...panelMotion}
            >
              <div className={styles.portfolioGrid}>
                {activeTab.projects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    className={styles.projectCard}
                    {...cardMotion(index)}
                  >
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
                        <div className={styles.projectOverlay} aria-hidden="true">
                          <span className={styles.plusIcon}>
                            <Plus size={24} strokeWidth={2} />
                          </span>
                        </div>
                        <div className={styles.projectMeta}>
                          <span className={styles.projectTitle}>{project.title}</span>
                        </div>
                      </div>
                    </a>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

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
