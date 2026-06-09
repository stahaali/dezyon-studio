import { stats } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./HomeStats.module.css";

export function HomeStats() {
  return (
    <section className={styles.section} aria-label="Company statistics">
      <Container>
        <ScrollReveal>
          <div className={styles.statsCard}>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
