import Image from "next/image";
import { bookPublishingSupport } from "@/data/book-publishing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import layoutStyles from "@/components/About/AboutHelps/AboutHelps.module.css";
import bpStyles from "./BookPublishing.module.css";

export function BookPublishingSupport() {
  const { visuals } = bookPublishingSupport;

  return (
    <section className={layoutStyles.section} aria-labelledby="book-publishing-support-heading">
      <Container className={layoutStyles.container}>
        <div className={layoutStyles.grid}>
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

          <ScrollReveal className={layoutStyles.contentCol}>
            <h2
              id="book-publishing-support-heading"
              className={`${splitTitleStyles.title} ${bpStyles.sectionTitle} ${bpStyles.title} ${bpStyles.splitHeading}`}
            >
              {bookPublishingSupport.title.prefix}{" "}
              <span className={bpStyles.wordHighlight}>
                {bookPublishingSupport.title.highlight}
              </span>
            </h2>

            {bookPublishingSupport.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className={layoutStyles.paragraph}>
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
