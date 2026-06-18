import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Shared/Container";
import styles from "./AboutCtaBanner.module.css";

export function AboutCtaBanner() {
  return (
    <section className={styles.section} aria-label="Contact Dezyon Studio">
      <Container className={styles.container}>
        <Link href="/contact" className={styles.link}>
          <Image
            src="/assets/img/about/about-cta.jpg"
            alt="Get in touch with Dezyon Studio"
            width={1280}
            height={360}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className={styles.image}
          />
        </Link>
      </Container>
    </section>
  );
}
