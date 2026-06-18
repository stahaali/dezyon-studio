import Image from "next/image";
import { videoEditingHeroVisual } from "@/data/video-editing";
import styles from "./VideoEditing.module.css";

export function VideoEditingHeroBannerImage() {
  return (
    <div className={styles.heroImageWrap}>
      <Image
        src={videoEditingHeroVisual.banner}
        alt="Professional video editing and AI content creation"
        width={960}
        height={640}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles.heroBannerImage}
        priority
      />
    </div>
  );
}
