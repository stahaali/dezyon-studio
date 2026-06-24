"use client";

import { websiteDesignsShowcase } from "@/data/website-designs-showcase";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { WebsiteDesignsSlider } from "@/components/Home/WebsiteDesignsSection/WebsiteDesignsSlider";
import styles from "./WebsiteDesignsSection.module.css";

export function WebsiteDesignsSection() {
  const { titleHighlight, titleLight } = websiteDesignsShowcase;

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
                className={`${splitTitleStyles.title} ${styles.titleComposition}`}
              >
                <span className={`${styles.headingWord} ${styles.wordHighlight}`}>
                  {titleHighlight}
                </span>
                <span className={`${styles.headingWord} ${styles.wordLight}`}>
                  {titleLight}
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
