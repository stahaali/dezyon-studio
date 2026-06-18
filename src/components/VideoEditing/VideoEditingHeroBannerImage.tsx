import { videoEditingHeroVisual } from "@/data/video-editing";
import styles from "./VideoEditing.module.css";

export function VideoEditingHeroBannerImage() {
  return (
    <div className={styles.heroImageWrap}>
      <video
        className={styles.heroBannerVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Video editing showcase"
      >
        <source src={videoEditingHeroVisual.columnVideo} type="video/mp4" />
      </video>
    </div>
  );
}
