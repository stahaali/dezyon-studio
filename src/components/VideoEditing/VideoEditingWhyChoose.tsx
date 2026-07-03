import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import {
  videoEditingBenefits,
  videoEditingBenefitsIntro,
  videoEditingHero,
  videoEditingWhyChooseVisual,
} from "@/data/video-editing";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import heroStyles from "@/components/VideoEditing/VideoEditing.module.css";
import styles from "./VideoEditingWhyChoose.module.css";

export function VideoEditingWhyChoose() {
  const { experience } = videoEditingWhyChooseVisual;

  return (
    <section className={styles.section} aria-labelledby="video-editing-benefits-heading">
      <Container className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal className={styles.visualCol}>
            <div className={styles.visualWrap}>
              <span className={styles.bgShape} aria-hidden="true" />
              <figure className={styles.mainFigure}>
                <Image
                  src={videoEditingWhyChooseVisual.mainImage}
                  alt={videoEditingWhyChooseVisual.mainImageAlt}
                  fill
                  sizes="(min-width: 992px) 42vw, 100vw"
                  className={styles.image}
                />
              </figure>
              <div className={styles.experienceCard}>
                <Image
                  src={experience.icon}
                  alt={experience.iconAlt}
                  width={48}
                  height={48}
                  className={styles.experienceIcon}
                />
                <div className={styles.experienceCopy}>
                  <span className={styles.experienceValue}>{experience.value}</span>
                  <span className={styles.experienceLabel}>{experience.label}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className={styles.contentCol}>
            <h2
              id="video-editing-benefits-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              <span className={splitTitleStyles.lightOnDark}>
                {videoEditingBenefitsIntro.titlePrefix}
                <span className={styles.wordHighlight}>
                  {videoEditingBenefitsIntro.titleHighlight}
                </span>
              </span>
            </h2>
            <p className={styles.description}>{videoEditingBenefitsIntro.description}</p>
            <ul className={styles.featureGrid}>
              {videoEditingBenefits.map((benefit) => (
                <li key={benefit} className={styles.featureItem}>
                  <span className={styles.featureIcon} aria-hidden="true">
                    <Check size={14} strokeWidth={2.8} />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Button
                href={videoEditingHero.cta.href}
                size="lg"
                className={heroStyles.heroCtaButton}
              >
                {videoEditingHero.cta.label}
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
