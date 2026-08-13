import { ShieldCheck } from "lucide-react";
import { seoAeoDashboard } from "@/data/seo-aeo";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SeoAeoCounter } from "./SeoAeoCounter";
import {
  DashboardChart,
  DashboardProgress,
  ScoreRing,
} from "./SeoAeoDashboardVisuals";
import { SeoAeoSectionHeading } from "./SeoAeoSectionHeading";
import styles from "./SeoAeo.module.css";

export function SeoAeoDashboard() {
  return (
    <section className={styles.section} aria-labelledby="seo-aeo-results-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <SeoAeoSectionHeading
            id="seo-aeo-results-heading"
            title={seoAeoDashboard.title}
            description={seoAeoDashboard.description}
          />
        </ScrollReveal>

        <dl className={styles.statsGrid}>
          {seoAeoDashboard.stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.06}>
              <div className={styles.statCard}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>
                  <SeoAeoCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>

        <div className={styles.dashGrid}>
          <ScrollReveal delay={0.08}>
            <div className={styles.dashPanel}>
              <DashboardChart
                points={seoAeoDashboard.chart.points}
                label={seoAeoDashboard.chart.label}
                caption={seoAeoDashboard.chart.caption}
              />

              <div className={styles.progressList}>
                {seoAeoDashboard.progress.map((item, index) => (
                  <DashboardProgress
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    delay={index * 0.12}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className={`${styles.dashPanel} ${styles.dashPanelSide}`}>
              <ScoreRing
                value={seoAeoDashboard.pageSpeed.value}
                label={seoAeoDashboard.pageSpeed.label}
              />

              <div className={styles.vitalsCard}>
                <span className={styles.vitalsIcon}>
                  <ShieldCheck size={26} strokeWidth={2} aria-hidden="true" />
                </span>
                <p className={styles.vitalsLabel}>
                  {seoAeoDashboard.coreWebVitals.label}
                </p>
                <p className={styles.vitalsStatus}>
                  {seoAeoDashboard.coreWebVitals.status}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
