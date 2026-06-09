import { BrandSlider } from "@/components/Hero/BrandSlider";
import { Container } from "@/components/Shared/Container";
import styles from "./ContactLogos.module.css";

export function ContactLogos() {
  return (
    <section className={styles.section} aria-label="Trusted brands">
      <Container className={styles.container}>
        <div className={styles.brandSlider}>
          <BrandSlider />
        </div>
      </Container>
    </section>
  );
}
