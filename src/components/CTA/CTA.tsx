import Image from "next/image";
import {
  BadgeCheck,
  Camera,
  Check,
  Megaphone,
  MousePointer2,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import {
  homeCtaCards,
  homeCtaContent,
  homeCtaImages,
  homeCtaPills,
} from "@/data/home-cta";
import styles from "./CTA.module.css";

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
          <div
            className={`${styles.stage} ${compact ? styles.stageCompact : ""}`.trim()}
          >
            <div className={styles.stageInner}>
            <div className={styles.panelBg} aria-hidden="true">
              <span className={styles.shapeOne} />
              <span className={styles.shapeTwo} />
              <span className={styles.shapeThree} />
              <span className={styles.shapeFour} />
            </div>

            <div className={styles.floatLayer} aria-hidden="true">
              <div className={`${styles.card} ${styles.cardUgc}`}>
                <div className={styles.cardHead}>
                  <UserRound size={11} strokeWidth={2.2} aria-hidden="true" />
                  <span>{homeCtaCards.ugc.title}</span>
                  <span className={styles.cardCounter}>
                    <span className={styles.counterDot} aria-hidden="true" />
                    {homeCtaCards.ugc.counter}
                  </span>
                </div>
                <div className={styles.ugcPhotos}>
                  {homeCtaImages.ugc.map((src, index) => (
                    <div
                      key={src}
                      className={`${styles.ugcPhoto} ${index === 1 ? styles.ugcPhotoCenter : ""}`}
                    >
                      <Image
                        src={src}
                        alt=""
                        width={58}
                        height={92}
                        className={styles.photoImg}
                      />
                    </div>
                  ))}
                </div>
                <span className={styles.ugcBadge}>
                  <Camera size={9} strokeWidth={2.2} aria-hidden="true" />
                  {homeCtaCards.ugc.badge}
                  <Check size={9} strokeWidth={3} aria-hidden="true" />
                </span>
              </div>

              <div className={`${styles.card} ${styles.cardMarketing}`}>
                <div className={styles.cardHead}>
                  <Megaphone size={11} strokeWidth={2.2} aria-hidden="true" />
                  <span>{homeCtaCards.marketing.title}</span>
                </div>
                <div className={styles.marketingPanel}>
                  <div className={styles.marketingProfile}>
                    <span className={styles.marketingAvatar} />
                    <span className={styles.marketingProfileText}>
                      <strong>
                        {homeCtaCards.marketing.profileName}
                        <BadgeCheck
                          size={10}
                          strokeWidth={2.2}
                          className={styles.verifiedIcon}
                          aria-hidden="true"
                        />
                      </strong>
                      <span>{homeCtaCards.marketing.profileMeta}</span>
                    </span>
                  </div>
                  <div className={styles.marketingThumb}>
                    <Image
                      src={homeCtaImages.marketingThumb}
                      alt=""
                      width={176}
                      height={78}
                      className={styles.photoImg}
                    />
                  </div>
                </div>

                <div className={styles.visualizingWrap}>
                  <MousePointer2
                    size={11}
                    strokeWidth={2.2}
                    className={styles.visualizingCursor}
                    aria-hidden="true"
                  />
                  <span className={styles.visualizingPill}>
                    {homeCtaPills.visualizing}
                  </span>
                </div>

                <div className={styles.hookTagWrap}>
                  <span className={styles.hookTag}>
                    {homeCtaCards.marketing.hookTag}
                  </span>
                  <MousePointer2
                    size={12}
                    strokeWidth={2.2}
                    className={styles.hookCursor}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <div className={styles.center}>
              <div className={styles.centerStack}>
              <div className={styles.heroVisual}>
                <Image
                  src={homeCtaImages.heroVisual}
                  alt=""
                  width={1080}
                  height={720}
                  className={styles.heroVisualImg}
                  priority
                />
              </div>

              <div className={styles.copyStack}>
              <h2
                id="cta-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
              >
                {homeCtaContent.titlePrefix ? (
                  <span className={styles.titleText}>
                    {homeCtaContent.titlePrefix}
                  </span>
                ) : null}
                {homeCtaContent.titleHighlight ? (
                  <span className={styles.wordHighlight}>
                    {homeCtaContent.titleHighlight}
                  </span>
                ) : null}
                {homeCtaContent.titleSuffix ? (
                  <span className={styles.titleText}>
                    {homeCtaContent.titleSuffix}
                  </span>
                ) : null}
              </h2>

              <p className={styles.subtitle}>{homeCtaContent.subtitle}</p>
              </div>
              </div>
            </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
