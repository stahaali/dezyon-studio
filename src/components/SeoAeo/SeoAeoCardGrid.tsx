import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SeoAeoIcon, seoAeoTone, type SeoAeoIconName } from "./SeoAeoIcon";
import styles from "./SeoAeo.module.css";

type SeoAeoCardItem = {
  icon: SeoAeoIconName;
  title: string;
  description: string;
};

type SeoAeoCardGridProps = {
  items: readonly SeoAeoCardItem[];
};

export function SeoAeoCardGrid({ items }: SeoAeoCardGridProps) {
  return (
    <ul className={styles.cardGrid}>
      {items.map((item, index) => (
        <ScrollReveal as="li" key={item.title} delay={(index % 3) * 0.06}>
          <article className={styles.card}>
            <div className={styles.cardIcon}>
              <SeoAeoIcon name={item.icon} tone={seoAeoTone(index)} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.description}</p>
          </article>
        </ScrollReveal>
      ))}
    </ul>
  );
}
