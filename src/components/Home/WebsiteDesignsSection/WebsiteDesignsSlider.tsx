"use client";

import Image from "next/image";
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
        speed={5000}
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
            <div className={styles.card}>
              <Image
                src={template.image}
                alt={template.alt}
                width={400}
                height={810}
                sizes="(max-width: 640px) 42vw, 220px"
                className={styles.cardImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
