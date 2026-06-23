import Image from "next/image";
import type { MarketingHeroFloatingCard } from "@/data/marketing-hero-cards";
import styles from "./MarketingHeroFloatingCards.module.css";

type MarketingHeroCardProps = {
  card: MarketingHeroFloatingCard;
};

export function MarketingHeroCard({ card }: MarketingHeroCardProps) {
  return (
    <div className={styles.imageCard}>
      <Image
        src={card.image}
        alt={card.imageAlt}
        width={640}
        height={760}
        className={styles.mediaImage}
        sizes="(max-width: 767px) 42vw, 420px"
      />
    </div>
  );
}
