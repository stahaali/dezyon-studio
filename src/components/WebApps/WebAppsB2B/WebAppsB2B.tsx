import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { webAppsB2B } from "@/data/web-apps";
import { packagesActions } from "@/data/packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import catalogStyles from "@/components/Packages/PackagesCatalog/PackagesCatalog.module.css";
import styles from "./WebAppsB2B.module.css";

export function WebAppsB2B() {
  return (
    <section className={styles.section} aria-labelledby="web-apps-b2b-heading">
      <Container className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal className={styles.imageCol}>
            <figure className={styles.figure}>
              <Image
                src={webAppsB2B.image}
                alt={webAppsB2B.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className={styles.image}
              />
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className={styles.contentCol}>
            <div className={styles.content}>
              <h2
                id="web-apps-b2b-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
              >
                <span className={styles.titleLight}>
                  {webAppsB2B.titlePrefix}
                </span>
                <span className={styles.wordHighlight}>
                  {webAppsB2B.titleHighlight}
                </span>
                <span className={styles.titleLight}>
                  {webAppsB2B.titleSuffix}
                </span>
              </h2>

              {webAppsB2B.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

              <ul className={catalogStyles.features}>
                {webAppsB2B.services.map((service) => (
                  <li key={service} className={catalogStyles.feature}>
                    <Check
                      size={14}
                      className={catalogStyles.checkIcon}
                      aria-hidden="true"
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Link href={packagesActions.orderHref} className={styles.primaryBtn}>
                  Get Started
                </Link>
                <Link
                  href={packagesActions.chatHref}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Chat With Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
