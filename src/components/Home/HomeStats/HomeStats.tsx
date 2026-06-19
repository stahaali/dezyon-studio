import { stats } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { StatValue } from "@/components/Home/HomeStats/StatValue";
import styles from "./HomeStats.module.css";

export function HomeStats() {
  return (
    <section className={styles.section} aria-label="Company statistics">
      <Container>
        <ScrollReveal>
          <div className={styles.statsCard}>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label || stat.value} className={styles.stat}>
                  <StatValue value={stat.value} />
                  {stat.label ? (
                    <span className={styles.statLabel}>{stat.label}</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
