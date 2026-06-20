import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { StatsGrid } from "@/components/Shared/StatsGrid/StatsGrid";
import styles from "./HomeStats.module.css";

export function HomeStats() {
  return (
    <section className={styles.section} aria-label="Company statistics">
      <Container>
        <ScrollReveal>
          <StatsGrid variant="dark" animate />
        </ScrollReveal>
      </Container>
    </section>
  );
}
