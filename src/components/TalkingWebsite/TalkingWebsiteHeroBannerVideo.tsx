import { videoEditingHeroVisual } from "@/data/video-editing";
import styles from "./TalkingWebsite.module.css";

export function TalkingWebsiteHeroBannerVideo() {
  return (
    <div className={styles.heroImageWrap}>
      <video
        className={styles.heroBannerVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Talking website showcase"
      >
        <source src={videoEditingHeroVisual.columnVideo} type="video/mp4" />
      </video>
    </div>
  );
}
