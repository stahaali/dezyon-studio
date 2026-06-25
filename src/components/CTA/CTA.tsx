import Image from "next/image";
import { homeCtaImages } from "@/data/home-cta";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./CTA.module.css";

type CTAProps = {
  containerClassName?: string;
  className?: string;
};

export function CTA({
  containerClassName = "",
  className = "",
}: CTAProps) {
  return (
    <section
      id="contact"
      className={`page-section ${styles.section} ${className}`.trim()}
      aria-label="Homepage banner"
    >
      <Container className={containerClassName || styles.ctaContainer}>
        <ScrollReveal>
          <figure className={styles.bannerFigure}>
            <Image
              src={homeCtaImages.banner}
              alt={homeCtaImages.bannerAlt}
              width={1600}
              height={533}
              className={styles.bannerImage}
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
          </figure>
        </ScrollReveal>
      </Container>
    </section>
  );
}
