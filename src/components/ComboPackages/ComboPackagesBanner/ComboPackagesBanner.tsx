import Image from "next/image";
import { comboPackagesBanner } from "@/data/combo-packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./ComboPackagesBanner.module.css";

export function ComboPackagesBanner() {
  const { stars } = comboPackagesBanner;

  return (
    <section
      className={styles.section}
      aria-labelledby="combo-packages-banner-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.headingWrap}>
              <div className={styles.titleRow}>
                <Image
                  src={stars.left.src}
                  alt=""
                  width={stars.left.width}
                  height={stars.left.height}
                  className={styles.starLeft}
                  aria-hidden="true"
                />
                <h1
                  id="combo-packages-banner-heading"
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
                >
                  <span className={splitTitleStyles.lightOnDark}>
                    {comboPackagesBanner.titlePrefix}
                    <span className={styles.wordHighlight}>
                      {comboPackagesBanner.titleHighlight}
                    </span>
                  </span>
                </h1>
                <Image
                  src={stars.right.src}
                  alt=""
                  width={stars.right.width}
                  height={stars.right.height}
                  className={styles.starRight}
                  aria-hidden="true"
                />
              </div>
            </div>
            <p className={styles.description}>{comboPackagesBanner.description}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
