"use client";

import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";
import { useVapiSimli } from "@/context/VapiSimliContext";
import {
  homeGrowthTeamCta,
  homeGrowthTeamMembers,
  homeGrowthTeamSection,
} from "@/data/home-team";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { HomeGrowthTeamMemberCard } from "./HomeGrowthTeamMemberCard";
import styles from "./HomeGrowthTeam.module.css";

export function HomeGrowthTeam() {
  const { openWidget } = useVapiSimli();

  return (
    <section
      id="team"
      className={`page-section ${styles.section}`}
      aria-labelledby="home-growth-team-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <h2
              id="home-growth-team-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              {homeGrowthTeamSection.titlePrefix}
              <span className={styles.wordHighlight}>
                {homeGrowthTeamSection.titleHighlight}
              </span>
              {homeGrowthTeamSection.titleSuffix}
            </h2>
            <p className={styles.subtitle}>{homeGrowthTeamSection.subtitle}</p>
          </header>
        </ScrollReveal>

        <div className={styles.cardGrid}>
          {homeGrowthTeamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.05}>
              <HomeGrowthTeamMemberCard member={member} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className={styles.ctaBar}>
            <div className={styles.ctaBrand}>
              <Image
                src={homeGrowthTeamCta.logoSrc}
                alt={homeGrowthTeamCta.logoAlt}
                width={56}
                height={56}
                className={styles.ctaLogo}
              />
              <div className={styles.ctaCopy}>
                <p className={styles.ctaTitle}>
                  {homeGrowthTeamCta.titlePrefix}
                  <span className={styles.ctaWordHighlight}>
                    {homeGrowthTeamCta.titleHighlight}
                  </span>
                  {homeGrowthTeamCta.titleSuffix}
                </p>
                <p className={styles.ctaSubtitle}>{homeGrowthTeamCta.subtitle}</p>
              </div>
            </div>

            <button
              type="button"
              className={styles.ctaButton}
              onClick={openWidget}
            >
              {homeGrowthTeamCta.buttonLabel}
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
