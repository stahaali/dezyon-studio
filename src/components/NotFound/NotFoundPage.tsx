import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { Logo } from "@/components/Shared/Logo";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <section className={styles.section} aria-labelledby="not-found-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.card}>
            <div className={styles.logoWrap}>
              <Logo variant="light" className={styles.logo} />
            </div>

            <p className={styles.code} aria-hidden="true">
              404
            </p>

            <h1 id="not-found-heading" className={styles.title}>
              Page Not Found
            </h1>

            <p className={styles.message}>
              The page you are looking for does not exist or may have been moved.
              Let&apos;s get you back on track.
            </p>

            <div className={styles.actions}>
              <Button href="/" size="lg" className={styles.homeBtn}>
                Back to Home
              </Button>
              <Button
                href="/contact/"
                size="lg"
                variant="outline"
                className={styles.contactBtn}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
