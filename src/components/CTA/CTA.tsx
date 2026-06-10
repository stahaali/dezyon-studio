import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./CTA.module.css";

const CTA_ASSETS = "/assets/img/cta";

type CTAProps = {
  compact?: boolean;
};

export function CTA({ compact = false }: CTAProps) {
  return (
    <section
      id="contact"
      className={`page-section ${styles.section} ${compact ? styles.sectionCompact : ""}`.trim()}
      aria-labelledby="cta-heading"
    >
      <Container className={styles.ctaContainer}>
        <ScrollReveal>
          <div className={`${styles.banner} ${compact ? styles.bannerCompact : ""}`.trim()}>
            <div className={styles.illustrationLeft} aria-hidden="true">
              <Image
                src={`${CTA_ASSETS}/talking.svg`}
                alt=""
                width={195}
                height={254}
                className={styles.illustration}
              />
            </div>

            <div className={styles.content}>
              <h2
                id="cta-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
              >
                <span className={styles.titleText}>Prevent costly</span>
                <span className={styles.wordHighlight}>mistakes</span>
              </h2>
              <p className={styles.subtitle}>
                Create pre-approved templates and lock all legal information.
              </p>
              <Button href="#pricing" size="lg" className={styles.button}>
                Try it now
                <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
              </Button>
              <p className={styles.note}>14-day trial, no credit card required.</p>
            </div>

            <div className={styles.illustrationRight} aria-hidden="true">
              <Image
                src={`${CTA_ASSETS}/chatting.svg`}
                alt=""
                width={255}
                height={283}
                className={styles.illustration}
              />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
