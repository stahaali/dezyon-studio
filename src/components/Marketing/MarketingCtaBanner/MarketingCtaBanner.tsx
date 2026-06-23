import type { CSSProperties } from "react";
import Link from "next/link";
import { marketingCtaBanner } from "@/data/marketing";
import { Container } from "@/components/Shared/Container";
import styles from "./MarketingCtaBanner.module.css";

type CtaBannerConfig = typeof marketingCtaBanner;

type MarketingCtaBannerProps = {
  banner?: CtaBannerConfig;
};

export function MarketingCtaBanner({
  banner = marketingCtaBanner,
}: MarketingCtaBannerProps) {
  const aspectRatio = `${banner.width} / ${banner.height}`;

  return (
    <section className={styles.section} aria-label="Contact Dezyon Studio">
      <Container className={styles.shell}>
        <Link
          href={banner.href}
          className={styles.link}
          style={
            {
              "--cta-image": `url("${banner.src}")`,
              "--cta-aspect": aspectRatio,
            } as CSSProperties
          }
        >
          <span className={styles.srOnly}>{banner.alt}</span>
        </Link>
      </Container>
    </section>
  );
}
