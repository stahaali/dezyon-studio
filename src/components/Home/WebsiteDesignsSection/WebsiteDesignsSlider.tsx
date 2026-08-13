"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { websiteDesignsShowcase } from "@/data/website-designs-showcase";
import styles from "./WebsiteDesignsSlider.module.css";

const sliderMocks = [
  ...websiteDesignsShowcase.templates,
  ...websiteDesignsShowcase.templates,
];

export function WebsiteDesignsSlider() {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        spaceBetween={18}
        speed={3800}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { spaceBetween: 22 },
          1024: { spaceBetween: 26 },
        }}
        className={styles.swiper}
        aria-label="Website design mockups"
      >
        {sliderMocks.map((template, index) => (
          <SwiperSlide
            key={`${template.id}-${index}`}
            className={styles.slide}
          >
            <a
              className={styles.card}
              href={template.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the ${template.name} website in a new tab`}
            >
              <Image
                src={template.image}
                alt={template.alt}
                width={280}
                height={580}
                sizes="(max-width: 640px) 50vw, 264px"
                className={styles.cardImage}
              />
              <span className={styles.cardLabel}>
                <span className={styles.cardLabelText}>{template.name}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
