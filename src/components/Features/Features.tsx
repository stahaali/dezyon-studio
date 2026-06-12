"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { smartFeatureTabs, smartFeaturesSection } from "@/data/features";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import styles from "./Features.module.css";

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = smartFeatureTabs[activeIndex];

  return (
    <section id="features" className={`page-section ${styles.section}`}>
      <Container>
        <ScrollReveal>
          <div className={styles.header}>
            <h2
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Modern Businesses{" "}
              <span className={styles.wordHighlight}>Ai-Powered</span>
            </h2>
            <p className={styles.subtitle}>{smartFeaturesSection.description}</p>
          </div>

          <div className={styles.tabBar}>
            <ul className={styles.tabList} role="tablist">
              {smartFeatureTabs.map((tab, index) => (
                <li key={tab.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-controls={`feature-panel-${tab.id}`}
                    id={`feature-tab-${tab.id}`}
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
            id={`feature-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`feature-tab-${activeTab.id}`}
            className={styles.panel}
          >
            <div className={styles.split}>
              <div className={styles.imageCol}>
                <figure className={styles.imageFigure}>
                  {"video" in activeTab && activeTab.video ? (
                    <video
                      key={activeTab.video}
                      className={styles.media}
                      src={activeTab.video}
                      poster={activeTab.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label={activeTab.title}
                    />
                  ) : (
                    <Image
                      src={activeTab.image}
                      alt={activeTab.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.media}
                    />
                  )}
                </figure>
              </div>

              <div className={styles.textCol}>
                {"subtitle" in activeTab && activeTab.subtitle ? (
                  <p className={styles.panelSubtitle}>{activeTab.subtitle}</p>
                ) : null}
                <SplitTitle
                  as="h3"
                  title={activeTab.title}
                  accent={
                    "titleAccent" in activeTab ? activeTab.titleAccent : undefined
                  }
                  light={
                    "titleLight" in activeTab ? activeTab.titleLight : undefined
                  }
                  nowrapLight={"titleLight" in activeTab}
                  size="panel"
                  theme="dark"
                  className={styles.panelTitle}
                />
                <p className={styles.panelDesc}>{activeTab.description}</p>
                <a href="#integrations" className={styles.ctaLink}>
                  Let&apos;s find out
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
