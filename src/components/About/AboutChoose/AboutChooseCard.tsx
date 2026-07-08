"use client";

import { useEffect, useRef, type CSSProperties, type Ref } from "react";
import type { aboutChoose } from "@/data/about";
import { Button } from "@/components/Shared/Button";
import styles from "./AboutChoose.module.css";

type ChooseCard = Omit<(typeof aboutChoose.cards)[number], "variant"> & {
  variant: "light" | "dark";
};

type AboutChooseCardProps = {
  card: ChooseCard;
  id?: string;
  articleRef?: Ref<HTMLElement>;
  className?: string;
  style?: CSSProperties;
};

function CardMedia({ video }: { video: ChooseCard["video"] }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!frameRef.current || !videoRef.current) return;

    const element = frameRef.current;
    const media = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void media.play().catch(() => {});
          return;
        }

        media.pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className={styles.mediaFrame}>
      <video
        ref={videoRef}
        className={styles.mediaVideo}
        src={video.src}
        width={video.width}
        height={video.height}
        muted
        loop
        playsInline
        preload="none"
        aria-label={video.alt}
      />
    </div>
  );
}

export function AboutChooseCard({
  card,
  id,
  articleRef,
  className = "",
  style,
}: AboutChooseCardProps) {
  return (
    <article
      id={id}
      ref={articleRef}
      data-card-id={card.id}
      className={`${styles.card} ${
        card.variant === "dark" ? styles.cardDark : styles.cardLight
      } ${className}`.trim()}
      style={style}
    >
      <div className={styles.cardInner}>
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          {card.description ? (
            <p className={styles.cardDescription}>{card.description}</p>
          ) : null}
          {card.cta ? (
            <Button
              href={card.cta.href}
              size="lg"
              className={styles.ctaButton}
              animated={false}
            >
              {card.cta.label}
            </Button>
          ) : null}
        </div>

        <div className={styles.media}>
          <CardMedia video={card.video} />
        </div>
      </div>
    </article>
  );
}
