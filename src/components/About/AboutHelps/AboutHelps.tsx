import { Camera, Clapperboard, Sparkles, Video } from "lucide-react";
import Image from "next/image";
import { aboutHelps } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { TalkingWebsiteGradientIcon } from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./AboutHelps.module.css";

const featureIcons = [Sparkles, Clapperboard, Video, Camera] as const;

export function AboutHelps() {
  const { visuals } = aboutHelps;

  return (
    <section className={styles.section} aria-labelledby="about-helps-heading">
      <Container className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal className={styles.contentCol}>
            <h2
              id="about-helps-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              <span className={styles.titleLine}>{aboutHelps.title.prefix}</span>
              <span className={styles.titleLine}>
                <span className={styles.wordHighlight}>
                  {aboutHelps.title.highlight}
                </span>
              </span>
            </h2>

            {aboutHelps.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <ul className={styles.featureList}>
              {aboutHelps.features.map((feature, index) => (
                <li key={feature.label} className={styles.featureItem}>
                  <TalkingWebsiteGradientIcon
                    icon={featureIcons[index]}
                    tone={feature.tone}
                    size="benefit"
                  />
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className={styles.visualCol}>
            <figure className={styles.figure}>
              <Image
                src={visuals.image}
                alt={visuals.imageAlt}
                fill
                sizes="(max-width: 991px) 90vw, 42vw"
                className={styles.image}
              />
            </figure>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
