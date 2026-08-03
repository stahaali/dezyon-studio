import Image from "next/image";
import { seoPage } from "@/data/seo-page";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { MarketingCtaBanner } from "@/components/Marketing/MarketingCtaBanner/MarketingCtaBanner";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./SeoPageContent.module.css";

export function SeoPageContent() {
  const { hero, intro, problems, approach, bottomLine, cta, banner } = seoPage;

  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        aria-labelledby="seo-hero-heading"
        data-section-reveal="skip"
      >
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgImage}>
            <Image
              src={hero.bannerImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className={styles.heroBgImageEl}
            />
          </div>
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroCenter}>
          <Container>
            <div className={styles.heroContent}>
              <span className={styles.badge}>{hero.badge}</span>
              <h1
                id="seo-hero-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.heroTitle}`}
              >
                <span className={styles.titleLine}>{hero.titlePrefix}</span>
                <span className={`${styles.titleLine} ${styles.titleLinePair}`}>
                  <span className={styles.titleInline}>{hero.titleInline}</span>
                  <span className={styles.wordHighlight}>{hero.titleHighlight}</span>
                </span>
                <span className={styles.titleLine}>{hero.titleSuffix}</span>
              </h1>
              <Button href={hero.cta.href} size="lg">
                {hero.cta.label}
              </Button>
            </div>
          </Container>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="seo-intro-heading">
        <Container className={styles.container}>
          <div className={styles.introGrid}>
            <ScrollReveal className={styles.introCopy}>
              <h2
                id="seo-intro-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.introTitle}`}
              >
                <span className={styles.titleLine}>{intro.titlePrefix}</span>
                <span className={styles.titleLine}>
                  <span className={styles.wordHighlight}>{intro.titleHighlight}</span>
                </span>
              </h2>
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
              <Button href={intro.cta.href} size="lg" className={styles.introCta}>
                {intro.cta.label}
              </Button>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className={styles.introVisual}>
                <Image
                  src={intro.image}
                  alt={intro.imageAlt}
                  fill
                  sizes="(max-width: 991px) 90vw, 42vw"
                  className={styles.introImage}
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.sectionNoPadTop}`}
        aria-labelledby="seo-problems-heading"
      >
        <Container className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeading}>
              <h2
                id="seo-problems-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.sectionTitle}`}
              >
                <span className={styles.titleLine}>{problems.titlePrefix}</span>
                <span className={styles.titleLine}>
                  <span className={styles.wordHighlight}>{problems.titleHighlight}</span>
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className={styles.problemsGrid}>
            {problems.items.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.05} as="article">
                <article className={styles.problemCard}>
                  <h3 className={styles.problemTitle}>{item.title}</h3>
                  <p className={styles.problemDesc}>{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.sectionNoPadTop}`}
        aria-labelledby="seo-approach-heading"
      >
        <Container className={styles.container}>
          <div className={styles.approachGrid}>
            <ScrollReveal className={styles.approachCopy}>
              <h2
                id="seo-approach-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.introTitle}`}
              >
                <span className={styles.titleLine}>{approach.titlePrefix}</span>
                <span className={styles.titleLine}>
                  <span className={styles.wordHighlight}>{approach.titleHighlight}</span>
                </span>
              </h2>
              <p className={styles.paragraph}>{approach.intro}</p>
              <ul className={styles.approachList}>
                {approach.items.map((item) => (
                  <li key={item.lead} className={styles.approachItem}>
                    <span className={styles.approachDot} aria-hidden="true" />
                    <span>
                      <strong className={styles.approachLead}>{item.lead}</strong>
                      {" — "}
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className={styles.approachVisual}>
                <Image
                  src={approach.image}
                  alt={approach.imageAlt}
                  fill
                  sizes="(max-width: 991px) 90vw, 40vw"
                  className={styles.approachImage}
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.sectionNoPadTop}`}
        aria-labelledby="seo-bottom-heading"
      >
        <Container className={styles.container}>
          <div className={styles.bottomGrid}>
            <ScrollReveal delay={0.06}>
              <div className={styles.bottomVisual}>
                <Image
                  src={bottomLine.image}
                  alt={bottomLine.imageAlt}
                  fill
                  sizes="(max-width: 991px) 90vw, 45vw"
                  className={styles.bottomImage}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.bottomCopy}>
              <h2
                id="seo-bottom-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.introTitle}`}
              >
                <span className={styles.titleLine}>{bottomLine.titlePrefix}</span>{" "}
                <span className={styles.wordHighlight}>{bottomLine.titleHighlight}</span>
              </h2>
              {bottomLine.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.ctaSection} aria-labelledby="seo-cta-heading">
        <Container className={styles.container}>
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <div className={styles.ctaBg} aria-hidden="true" />
              <div className={styles.ctaContent}>
                <h2
                  id="seo-cta-heading"
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.ctaTitle}`}
                >
                  <span className={styles.titleLine}>{cta.titlePrefix}</span>
                  <span className={styles.titleLine}>
                    <span className={styles.wordHighlight}>{cta.titleHighlight}</span>
                  </span>
                </h2>
                {cta.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.ctaParagraph}>
                    {paragraph}
                  </p>
                ))}
                <Button href={cta.button.href} size="lg" className={styles.ctaButton}>
                  {cta.button.label}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <MarketingCtaBanner banner={banner} />
    </div>
  );
}
