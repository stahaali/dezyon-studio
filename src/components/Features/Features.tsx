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
  const [activeIndex, setActiveIndex] = useState(3);
  const activeTab = smartFeatureTabs[activeIndex];

  return (
    <section id="features" className={`page-section ${styles.section}`}>
      <Container>
        <ScrollReveal>
          <div className={styles.header}>
            <h2
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Smart features for your{" "}
              <span className={styles.wordHighlight}>business</span>
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
                  <Image
                    src={activeTab.image}
                    alt={activeTab.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                  />
                  {activeTab.showTrafficOverlay && (
                    <div className={styles.trafficOverlay} aria-hidden="true">
                      <span className={styles.trafficTitle}>Traffic report</span>
                      <div className={styles.trafficRow}>
                        <span className={styles.trafficIcon}>📊</span>
                        <span className={styles.trafficBar}>
                          <span className={styles.trafficFill} style={{ width: "72%" }} />
                        </span>
                      </div>
                      <div className={styles.trafficRow}>
                        <span className={styles.trafficIcon}>🌐</span>
                        <span className={styles.trafficBar}>
                          <span className={styles.trafficFill} style={{ width: "55%" }} />
                        </span>
                      </div>
                      <div className={styles.trafficRow}>
                        <span className={styles.trafficIcon}>🖱</span>
                        <span className={styles.trafficBar}>
                          <span className={styles.trafficFill} style={{ width: "88%" }} />
                        </span>
                      </div>
                    </div>
                  )}
                </figure>
              </div>

              <div className={styles.textCol}>
                <SplitTitle
                  as="h3"
                  title={activeTab.title}
                  size="panel"
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
