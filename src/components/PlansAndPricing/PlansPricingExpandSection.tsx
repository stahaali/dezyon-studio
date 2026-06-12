"use client";

import {
  Globe,
  Grid3x3,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  Smartphone,
  Users,
  Video,
} from "lucide-react";
import { plansPricingExpand, type PlansPricingExpandIcon } from "@/data/plans-and-pricing";
import { footerContact } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./PlansPricingExpandSection.module.css";

const expandIcons: Record<PlansPricingExpandIcon, typeof Headphones> = {
  headphones: Headphones,
  users: Users,
  video: Video,
  smartphone: Smartphone,
  monitor: Monitor,
  grid: Grid3x3,
  globe: Globe,
  message: MessageSquare,
  mappin: MapPin,
  mail: Mail,
};

type PlansPricingExpandSectionProps = {
  embedded?: boolean;
};

export function PlansPricingExpandSection({
  embedded = false,
}: PlansPricingExpandSectionProps) {
  const phoneHref = `tel:${footerContact.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section
      className={`${styles.section} ${embedded ? styles.sectionEmbedded : ""}`.trim()}
      aria-labelledby="pricing-expand-heading"
    >
      <Container className={styles.container}>
        <header className={styles.header}>
          <PlansPricingHeading
            id="pricing-expand-heading"
            title={plansPricingExpand.title}
            size="section"
            className={styles.title}
          />
          <p className={styles.subtitle}>
            Give us a call today:{" "}
            <a href={phoneHref} className={styles.phoneLink}>
              {footerContact.phone}
            </a>
          </p>
        </header>

        <div className={styles.grid}>
          {plansPricingExpand.items.map((item, index) => {
            const Icon = expandIcons[item.icon];
            const columnIndex = index % 3;
            const isLastInRow =
              (index + 1) % 3 === 0 || index === plansPricingExpand.items.length - 1;
            const showColumnDivider = columnIndex < 2 && !isLastInRow;

            return (
              <article
                key={item.id}
                className={`${styles.item} ${showColumnDivider ? styles.itemDivider : ""}`.trim()}
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                <div className={styles.content}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <p className={styles.itemPrice}>{item.price}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
