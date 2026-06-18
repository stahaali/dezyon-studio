import Image from "next/image";
import styles from "./VideoEditingFinalCta.module.css";

type VideoEditingCtaLaptopProps = {
  screenSrc: string;
};

export function VideoEditingCtaLaptop({ screenSrc }: VideoEditingCtaLaptopProps) {
  return (
    <div className={styles.laptop}>
      <div className={styles.laptopBezel}>
        <span className={styles.laptopCamera} aria-hidden="true" />
        <div className={styles.laptopScreen}>
          <Image
            src={screenSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 62vw, 360px"
            className={styles.laptopScreenImage}
          />
        </div>
      </div>
      <div className={styles.laptopHinge} aria-hidden="true" />
      <div className={styles.laptopBase} aria-hidden="true" />
    </div>
  );
}
