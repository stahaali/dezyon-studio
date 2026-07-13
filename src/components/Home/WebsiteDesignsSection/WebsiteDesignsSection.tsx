"use client";

import { websiteDesignsShowcase } from "@/data/website-designs-showcase";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { WebsiteDesignsSlider } from "@/components/Home/WebsiteDesignsSection/WebsiteDesignsSlider";
import styles from "./WebsiteDesignsSection.module.css";

export function WebsiteDesignsSection() {
  const { titleLine1, titleHighlight } = websiteDesignsShowcase;

  return (
    <section
      id="website-designs"
      className={`page-section ${styles.section}`}
      aria-labelledby="website-designs-heading"
    >
      <ScrollReveal>
        <div className={styles.showcaseStage}>
          <header className={styles.header}>
            <div className={styles.headingBlock}>
              <h2
                id="website-designs-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
              >
                <span className={styles.titleLine}>{titleLine1}</span>
                <span className={styles.titleLine}>
                  <span className={styles.wordHighlight}>{titleHighlight}</span>
                </span>
              </h2>
            </div>
          </header>

          <div className={styles.trackWrap} aria-labelledby="website-designs-heading">
            <WebsiteDesignsSlider />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
