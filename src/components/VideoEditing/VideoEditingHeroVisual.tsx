"use client";

import { videoEditingHeroVisual } from "@/data/video-editing";
import styles from "./VideoEditingHeroVisual.module.css";

export function VideoEditingHeroVisual() {
  const { poster, video } = videoEditingHeroVisual;

  return (
    <div className={styles.videoWrap}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.heroVideoThumb}
        src={poster}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={video} type="video/webm" />
      </video>
    </div>
  );
}
