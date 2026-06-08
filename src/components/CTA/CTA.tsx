import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import styles from "./CTA.module.css";

const CTA_ASSETS = "/assets/img/cta";

export function CTA() {
  return (
    <section
      id="contact"
      className={`page-section ${styles.section}`}
      aria-labelledby="cta-heading"
    >
      <Container className={styles.ctaContainer}>
        <ScrollReveal>
          <div className={styles.banner}>
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
              <SplitTitle
                id="cta-heading"
                title="Prevent costly mistakes"
                theme="dark"
                size="section"
                lineBreak={false}
                className={styles.title}
              />
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
