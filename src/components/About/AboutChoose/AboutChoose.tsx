import { aboutChoose } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { AboutChooseStack } from "./AboutChooseStack";
import styles from "./AboutChoose.module.css";

export function AboutChoose() {
  return (
    <section className={styles.choose} aria-label={aboutChoose.title}>
      <Container className={styles.container}>
        <AboutChooseStack cards={aboutChoose.cards} />
      </Container>
    </section>
  );
}
