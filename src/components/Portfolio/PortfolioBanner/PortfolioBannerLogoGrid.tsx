import Image from "next/image";
import { portfolioBanner } from "@/data/portfolio";
import styles from "./PortfolioBannerLogoGrid.module.css";

const GRID_TILE_COUNT = 48;

export function PortfolioBannerLogoGrid() {
  const { logoGrid } = portfolioBanner;

  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.gridWrap}>
        <div className={styles.grid}>
          {Array.from({ length: GRID_TILE_COUNT }, (_, index) => {
            const src = logoGrid[index % logoGrid.length];

            return (
              <div key={`${src}-${index}`} className={styles.tile}>
                <Image
                  src={src}
                  alt=""
                  width={120}
                  height={48}
                  className={styles.logo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
