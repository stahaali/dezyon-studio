import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServiceCard.module.css";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: string;
  iconWidth?: number;
  iconHeight?: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  index,
  iconWidth = 48,
  iconHeight = 48,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrap}>
          <Image
            src={icon}
            alt=""
            width={iconWidth}
            height={iconHeight}
            className={styles.icon}
            aria-hidden="true"
          />
        </div>
        <span className={styles.index}>{index}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <span className={styles.link}>
        Learn more
        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
      </span>
    </article>
  );
}
