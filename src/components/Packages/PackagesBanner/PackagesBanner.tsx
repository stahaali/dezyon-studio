import Image from "next/image";
import {
  packageCategoryMeta,
  packagesBanner,
  type PackageCategoryId,
} from "@/data/packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./PackagesBanner.module.css";

type PackagesBannerProps = {
  categoryId: PackageCategoryId;
};

export function PackagesBanner({ categoryId }: PackagesBannerProps) {
  const banner = packageCategoryMeta[categoryId];
  const { stars } = packagesBanner;

  return (
    <section className={styles.section} aria-labelledby="packages-banner-heading">
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
                  id="packages-banner-heading"
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
                >
                  <span className={splitTitleStyles.lightOnDark}>
                    {banner.titlePrefix}
                    <span className={styles.wordHighlight}>
                      {banner.titleHighlight}
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
            <p className={styles.description}>{banner.description}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
