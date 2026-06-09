import Image from "next/image";
import { heroSliderColumns } from "@/data/hero";
import styles from "./HeroImageSlider.module.css";

const columnDirections = ["up", "down", "up"] as const;

export function HeroImageSlider() {
  return (
    <div className={styles.slider} aria-hidden="true">
      <div className={styles.columns}>
        {heroSliderColumns.map((images, columnIndex) => {
          const direction = columnDirections[columnIndex];
          const trackClass =
            direction === "up" ? styles.trackUp : styles.trackDown;

          return (
            <div key={`column-${columnIndex}`} className={styles.column}>
              <div className={`${styles.track} ${trackClass}`}>
                {[...images, ...images].map((image, imageIndex) => (
                  <div
                    key={`${image.src}-${imageIndex}`}
                    className={styles.card}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 33vw, 180px"
                      className={styles.cardImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
