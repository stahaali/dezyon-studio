import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { StatsGrid } from "@/components/Shared/StatsGrid/StatsGrid";
import styles from "./HomeStats.module.css";

type HomeStatsProps = {
  className?: string;
};

export function HomeStats({ className = "" }: HomeStatsProps) {
  return (
    <section
      className={`${styles.section} ${className}`.trim()}
      aria-label="Company statistics"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <StatsGrid variant="dark" animate colorful />
        </ScrollReveal>
      </Container>
    </section>
  );
}
