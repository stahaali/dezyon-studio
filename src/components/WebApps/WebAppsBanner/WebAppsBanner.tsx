import Image from "next/image";
import { webAppsBanner } from "@/data/web-apps";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import headingStyles from "@/components/WebApps/WebAppsSectionHeading/WebAppsSectionHeading.module.css";
import styles from "./WebAppsBanner.module.css";

export function WebAppsBanner() {
  const { stars } = webAppsBanner;

  return (
    <section className={styles.section} aria-labelledby="web-apps-banner-heading">
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
                  id="web-apps-banner-heading"
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
                >
                  <span className={splitTitleStyles.lightOnDark}>
                    {webAppsBanner.titlePrefix}
                    <span className={headingStyles.wordHighlight}>
                      {webAppsBanner.titleHighlight}
                    </span>
                  </span>
                </h1>
                <Image
                  src={stars.right.src}
                  alt={stars.right.alt}
                  height={stars.right.height}
                  className={styles.starRight}
                  aria-hidden="true"
                />
              </div>
            </div>
            <p className={styles.description}>{webAppsBanner.description}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
