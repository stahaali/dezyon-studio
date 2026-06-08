import { trustedLogos } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import styles from "./LogoCloud.module.css";

export function LogoCloud() {
  return (
    <section className={styles.section} aria-label="Trusted companies">
      <Container>
        <ul className={styles.logoRow}>
          {trustedLogos.map((name) => (
            <li key={name} className={styles.logoItem}>
              <span className={styles.logoText}>{name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
