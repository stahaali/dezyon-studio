import { BookOpen, FileText, LayoutTemplate, PenLine } from "lucide-react";
import Image from "next/image";
import { bookPublishingIntro } from "@/data/book-publishing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { TalkingWebsiteGradientIcon } from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import layoutStyles from "@/components/About/AboutHelps/AboutHelps.module.css";
import bpStyles from "./BookPublishing.module.css";

const featureIcons = [PenLine, LayoutTemplate, BookOpen, FileText] as const;

export function BookPublishingIntro() {
  const { visuals } = bookPublishingIntro;

  return (
    <section className={layoutStyles.section} aria-labelledby="book-publishing-intro-heading">
      <Container className={layoutStyles.container}>
        <div className={layoutStyles.grid}>
          <ScrollReveal className={layoutStyles.contentCol}>
            <h2
              id="book-publishing-intro-heading"
              className={`${splitTitleStyles.title} ${bpStyles.sectionTitle} ${bpStyles.title} ${bpStyles.splitHeading}`}
            >
              {bookPublishingIntro.title.prefix}{" "}
              <span className={bpStyles.wordHighlight}>
                {bookPublishingIntro.title.highlight}
              </span>
            </h2>

            {bookPublishingIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className={layoutStyles.paragraph}>
                {paragraph}
              </p>
            ))}

            <ul className={layoutStyles.featureList}>
              {bookPublishingIntro.features.map((feature, index) => (
                <li key={feature.label} className={layoutStyles.featureItem}>
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

          <ScrollReveal delay={0.08} className={layoutStyles.visualCol}>
            <figure className={layoutStyles.figure}>
              <Image
                src={visuals.image}
                alt={visuals.imageAlt}
                fill
                sizes="(max-width: 991px) 90vw, 42vw"
                className={layoutStyles.image}
              />
            </figure>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
