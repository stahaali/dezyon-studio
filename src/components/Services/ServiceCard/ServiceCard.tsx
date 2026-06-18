import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/Services/ServiceCard/ServiceIcon";
import styles from "./ServiceCard.module.css";

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  index: string;
}

export function ServiceCard({
  id,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <ServiceIcon serviceId={id} />
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
