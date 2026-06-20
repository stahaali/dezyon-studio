import Image from "next/image";
import { heroBrands } from "@/data/hero";
import { portfolioBanner } from "@/data/portfolio";
import styles from "./PortfolioBannerLogoGrid.module.css";

const GRID_TILE_COUNT = 48;

const LOGO_ALTS = Object.fromEntries(
  heroBrands.map((brand) => [brand.src, `${brand.alt} logo`]),
) as Record<string, string>;

function getLogoAlt(src: string): string {
  return LOGO_ALTS[src] ?? "Partner brand logo";
}

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
                  alt={getLogoAlt(src)}
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
