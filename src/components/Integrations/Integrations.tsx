import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { integrations } from "@/data/site";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./Integrations.module.css";

export function Integrations() {
  return (
    <section id="integrations" className={`page-section ${styles.section}`}>
      <Container>
        <ScrollReveal>
          <SectionHeading
            className={styles.sectionHeading}
            light
            lineBreak={false}
            title="Boost your efficiency with integrations"
            description="Connect every part of your business with integrations that will simplify your workflow."
          />
        </ScrollReveal>

        <div className={styles.grid}>
          {integrations.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.05} as="article">
              <article className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardMeta}>
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    <span className={styles.category}>{item.category}</span>
                  </div>
                  <Image
                    src={item.logo}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.brandLogo}
                    aria-hidden="true"
                  />
                </div>
                <p className={styles.cardDesc}>{item.description}</p>
                <a href="#" className={styles.exploreLink}>
                  Explore
                  <ArrowRight size={14} />
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className={styles.ctaWrapper}>
            <Button variant="outline" href="#integrations">
              Explore all integrations
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
