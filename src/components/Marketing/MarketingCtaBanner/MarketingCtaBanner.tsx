import type { CSSProperties } from "react";
import Link from "next/link";
import { marketingCtaBanner } from "@/data/marketing";
import { Container } from "@/components/Shared/Container";
import styles from "./MarketingCtaBanner.module.css";

export function MarketingCtaBanner() {
  return (
    <section className={styles.section} aria-label="Contact Dezyon Studio">
      <Container className={styles.container}>
        <Link
          href={marketingCtaBanner.href}
          className={styles.link}
          style={
            {
              "--cta-image": `url("${marketingCtaBanner.src}")`,
            } as CSSProperties
          }
        >
          <span className={styles.srOnly}>{marketingCtaBanner.alt}</span>
        </Link>
      </Container>
    </section>
  );
}
