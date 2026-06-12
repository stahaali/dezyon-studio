"use client";

import { useState } from "react";
import Link from "next/link";
import { CapabilitiesLogoSlider } from "@/components/Home/CapabilitiesSection/CapabilitiesLogoSlider";
import {
  homeCapabilitiesSection,
  homeCapabilitiesTabs,
} from "@/data/home-capabilities";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./CapabilitiesSection.module.css";

export function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = homeCapabilitiesTabs[activeIndex];

  return (
    <section
      className={styles.section}
      aria-labelledby="capabilities-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <h2
              id="capabilities-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              {homeCapabilitiesSection.titlePrefix}
              <span className={styles.wordHighlight}>
                {homeCapabilitiesSection.titleHighlight}
              </span>
              {homeCapabilitiesSection.titleSuffix}
            </h2>
            <p className={styles.subtitle}>
              {homeCapabilitiesSection.subtitle}
            </p>
          </header>

          <div className={styles.tabBar}>
            <ul className={styles.tabList} role="tablist">
              {homeCapabilitiesTabs.map((tab, index) => (
                <li key={tab.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-controls={`capabilities-panel-${tab.id}`}
                    id={`capabilities-tab-${tab.id}`}
                    className={`${styles.tabBtn} ${activeIndex === index ? `${styles.tabBtnActive} ${styles[`tabBtnActive${tab.id}`]}` : ""}`.trim()}
                    onClick={() => setActiveIndex(index)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            key={activeTab.id}
            id={`capabilities-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`capabilities-tab-${activeTab.id}`}
            className={styles.panel}
          >
            <div
              className={`${styles.panelBg} ${styles[`panelBg${activeTab.id}`]}`}
              aria-hidden="true"
            >
              {activeTab.backgroundImage ? (
                <span
                  className={styles.panelBgImage}
                  style={{
                    backgroundImage: `url(${activeTab.backgroundImage})`,
                  }}
                />
              ) : null}
              <span className={styles.panelBgOverlay} />
              <span className={styles.shapeOne} />
              <span className={styles.shapeTwo} />
              <span className={styles.shapeThree} />
              <span className={styles.shapeFour} />
            </div>

            <div className={styles.panelContent}>
              <p className={styles.badge}>{activeTab.badge}</p>
              <h3 className={styles.panelTitle}>{activeTab.title}</h3>
              <p className={styles.panelDesc}>{activeTab.description}</p>

              <div className={styles.tagsWrap}>
                <span className={styles.tagsLabel}>Included services:</span>
                <ul className={styles.tags}>
                  {activeTab.tags.map((tag) => (
                    <li key={tag}>
                      <span className={styles.tag}>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={activeTab.cta.href} className={styles.cta}>
                {activeTab.cta.label}
              </Link>
            </div>

            <CapabilitiesLogoSlider />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
