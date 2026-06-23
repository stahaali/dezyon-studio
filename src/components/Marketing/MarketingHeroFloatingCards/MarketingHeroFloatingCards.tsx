"use client";

import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useMemo } from "react";
import {
  marketingHeroFloatingCards,
  type HeroCardVisibility,
  type MarketingHeroFloatingCard,
} from "@/data/marketing-hero-cards";
import { MarketingHeroCard } from "./MarketingHeroCard";
import styles from "./MarketingHeroFloatingCards.module.css";

type MarketingHeroFloatingCardsProps = {
  scrollProgress: MotionValue<number>;
};

const STAGGER_WINDOW = 0.16;

function visibilityClass(visibility: HeroCardVisibility) {
  if (visibility === "all") return styles.visibilityAll;
  if (visibility === "tablet") return styles.visibilityTablet;
  return styles.visibilityDesktop;
}

function getScatterY(top: string, parallax: number) {
  const topPercent = Number.parseFloat(top);

  if (topPercent <= 38) return -42 * parallax;
  if (topPercent >= 62) return 42 * parallax;
  return 0;
}

function buildScatterOrder(cards: MarketingHeroFloatingCard[]) {
  const left = [...cards.filter((card) => card.side === "left")].sort(
    (a, b) => Number.parseFloat(a.top) - Number.parseFloat(b.top),
  );
  const right = [...cards.filter((card) => card.side === "right")].sort(
    (a, b) => Number.parseFloat(a.top) - Number.parseFloat(b.top),
  );

  const orderMap = new Map<string, number>();
  let order = 0;
  const max = Math.max(left.length, right.length);

  for (let index = 0; index < max; index += 1) {
    if (left[index]) {
      orderMap.set(left[index].id, order);
      order += 1;
    }
    if (right[index]) {
      orderMap.set(right[index].id, order);
      order += 1;
    }
  }

  return orderMap;
}

function FloatingCard({
  card,
  scatterOrder,
  scatterTotal,
  scrollProgress,
  reducedMotion,
}: {
  card: MarketingHeroFloatingCard;
  scatterOrder: number;
  scatterTotal: number;
  scrollProgress: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const maxStart = Math.max(1 - STAGGER_WINDOW, 0);
  const step = scatterTotal > 1 ? maxStart / (scatterTotal - 1) : 0;
  const start = scatterOrder * step;
  const end = Math.min(start + STAGGER_WINDOW, 1);

  const cardProgress = useTransform(scrollProgress, (progress) => {
    if (progress <= start) return 0;
    if (progress >= end) return 1;
    return (progress - start) / (end - start);
  });

  const scatterX =
    card.side === "left" ? -200 * card.parallax : 200 * card.parallax;
  const scatterY = getScatterY(card.top, card.parallax);

  const x = useTransform(cardProgress, [0, 1], [0, scatterX]);
  const y = useTransform(cardProgress, [0, 1], [0, scatterY]);
  const opacity = useTransform(cardProgress, [0, 0.55, 1], [1, 0.75, 0]);
  const scale = useTransform(
    cardProgress,
    [0, 1],
    [card.depthScale, card.depthScale * 0.86],
  );

  const sideStyle =
    card.side === "left"
      ? { left: card.inset, right: "auto" as const }
      : { right: card.inset, left: "auto" as const };

  return (
    <motion.div
      className={`${styles.card} ${visibilityClass(card.visibility)}`}
      style={{
        top: card.top,
        width: `clamp(180px, 34vw, ${card.width}px)`,
        zIndex: card.zIndex,
        ...sideStyle,
        x: reducedMotion ? 0 : x,
        y: reducedMotion ? 0 : y,
        opacity: reducedMotion ? 1 : opacity,
        scale: reducedMotion ? card.depthScale : scale,
        rotate: card.rotation,
      }}
      aria-hidden="true"
    >
      <div className={styles.cardShell}>
        <MarketingHeroCard card={card} />
      </div>
    </motion.div>
  );
}

export function MarketingHeroFloatingCards({
  scrollProgress,
}: MarketingHeroFloatingCardsProps) {
  const reducedMotion = useReducedMotion();
  const scatterOrderMap = useMemo(
    () => buildScatterOrder(marketingHeroFloatingCards),
    [],
  );
  const scatterTotal = scatterOrderMap.size;

  return (
    <div className={styles.cardsLayer} aria-hidden="true">
      {marketingHeroFloatingCards.map((card) => (
        <FloatingCard
          key={card.id}
          card={card}
          scatterOrder={scatterOrderMap.get(card.id) ?? 0}
          scatterTotal={scatterTotal}
          scrollProgress={scrollProgress}
          reducedMotion={Boolean(reducedMotion)}
        />
      ))}
    </div>
  );
}
