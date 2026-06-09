import { aboutStats } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./AboutStats.module.css";

export function AboutStats() {
  return (
    <section className={styles.section} aria-label="Company statistics">
      <Container>
        <ScrollReveal>
          <div className={styles.card}>
            <div className={styles.grid}>
              {aboutStats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.value}>{stat.value}</span>
                  <span className={styles.label}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
