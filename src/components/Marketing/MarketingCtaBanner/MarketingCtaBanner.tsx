import Link from "next/link";
import { videoEditingCtaBanner } from "@/data/video-editing";
import { Container } from "@/components/Shared/Container";
import styles from "./MarketingCtaBanner.module.css";

type CtaBannerConfig = typeof videoEditingCtaBanner;

type MarketingCtaBannerProps = {
  banner?: CtaBannerConfig;
};

export function MarketingCtaBanner({
  banner = videoEditingCtaBanner,
}: MarketingCtaBannerProps) {
  return (
    <section className={styles.section} aria-label="Contact Dezyon Studio">
      <Container className={styles.container}>
        <Link href={banner.href} className={styles.link}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={banner.src}
            alt={banner.alt}
            width={banner.width}
            height={banner.height}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </Link>
      </Container>
    </section>
  );
}
