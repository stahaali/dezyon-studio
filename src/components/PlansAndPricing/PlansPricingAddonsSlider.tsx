"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  LineChart,
  MessageSquare,
  Sparkles,
  Video,
} from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  plansPricingAddons,
  type PlansPricingAddonIcon,
} from "@/data/plans-and-pricing";
import { Container } from "@/components/Shared/Container";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./PlansPricingAddonsSlider.module.css";

import "swiper/css";

const addonIcons: Record<PlansPricingAddonIcon, typeof Bot> = {
  bot: Bot,
  message: MessageSquare,
  chart: LineChart,
  video: Video,
  sparkles: Sparkles,
};

export function PlansPricingAddonsSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.section} aria-labelledby="pricing-addons-heading">
      <Container className={styles.container}>
        <div className={styles.header}>
          <PlansPricingHeading
            id="pricing-addons-heading"
            title={plansPricingAddons.title}
            size="section"
            className={styles.title}
          />

          <div className={styles.nav}>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Previous add-on"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft size={18} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Next add-on"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <Swiper
          className={styles.swiper}
          slidesPerView={1.1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2.1, spaceBetween: 16 },
            1024: { slidesPerView: 3.1, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {plansPricingAddons.items.map((item) => {
            const Icon = addonIcons[item.icon];

            return (
              <SwiperSlide key={item.id} className={styles.slide}>
                <article className={styles.card}>
                  <div className={styles.iconWrap} aria-hidden="true">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>

                  <div className={styles.priceBlock}>
                    {item.priceLabel ? (
                      <span className={styles.priceLabel}>{item.priceLabel}</span>
                    ) : null}
                    <p className={styles.price}>${item.price}</p>
                    {item.note ? <p className={styles.note}>{item.note}</p> : null}
                  </div>

                  <Link href={item.cta.href} className={styles.cta}>
                    {item.cta.label}
                  </Link>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
}
