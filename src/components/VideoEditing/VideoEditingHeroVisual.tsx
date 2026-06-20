"use client";

import { useEffect, useRef } from "react";
import { videoEditingHeroVisual } from "@/data/video-editing";
import styles from "./VideoEditingHeroVisual.module.css";

const BACKGROUND_PLAYBACK_RATE = 1.35;

export function VideoEditingHeroVisual() {
  const { poster, posterAlt, video } = videoEditingHeroVisual;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    const applyPlaybackRate = () => {
      videoElement.playbackRate = BACKGROUND_PLAYBACK_RATE;
    };

    applyPlaybackRate();
    videoElement.addEventListener("loadedmetadata", applyPlaybackRate);

    return () => {
      videoElement.removeEventListener("loadedmetadata", applyPlaybackRate);
    };
  }, []);

  return (
    <div className={styles.videoWrap}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.heroVideoThumb}
        src={poster}
        alt={posterAlt}
        width={1920}
        height={1080}
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      <video
        ref={videoRef}
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
