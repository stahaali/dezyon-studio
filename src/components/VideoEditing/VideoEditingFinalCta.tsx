"use client";

import { videoEditingFinalCta } from "@/data/video-editing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { VideoEditingCtaLaptop } from "@/components/VideoEditing/VideoEditingCtaLaptop";
import { useVapiSimli } from "@/context/VapiSimliContext";
import styles from "./VideoEditingFinalCta.module.css";

export function VideoEditingFinalCta() {
  const { openWidget, startCall } = useVapiSimli();

  const handleGetStarted = () => {
    openWidget();
    void startCall();
  };

  return (
    <section
      className={styles.cta}
      aria-labelledby="video-editing-cta-heading"
    >
      <Container className={styles.ctaContainer}>
        <ScrollReveal>
          <div className={styles.ctaCard}>
            <div className={styles.ctaCardBg} aria-hidden="true">
              <span className={styles.shapeOne} />
              <span className={styles.shapeTwo} />
              <span className={styles.shapeThree} />
              <span className={styles.shapeFour} />
            </div>
            <div className={styles.ctaGrid}>
              <div className={styles.ctaContent}>
                <span className={styles.ctaEyebrow}>
                  {videoEditingFinalCta.eyebrow}
                </span>

                <h2 id="video-editing-cta-heading" className={styles.ctaTitle}>
                  {videoEditingFinalCta.title}
                </h2>

                <div className={styles.ctaActions}>
                  <button
                    type="button"
                    className={styles.ctaButtonPrimary}
                    onClick={handleGetStarted}
                  >
                    {videoEditingFinalCta.primaryButton.label}
                  </button>
                </div>
              </div>

              <div className={styles.ctaVisual} aria-hidden="true">
                <div className={styles.ctaVisualGlow} />
                <div className={styles.laptopWrap}>
                  <VideoEditingCtaLaptop
                    screenSrc={videoEditingFinalCta.screenImage}
                    screenAlt={videoEditingFinalCta.screenImageAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
