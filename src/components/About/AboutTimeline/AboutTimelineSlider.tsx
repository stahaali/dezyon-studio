"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { aboutTimeline } from "@/data/about";
import styles from "./AboutTimeline.module.css";

import "swiper/css";

type SwiperInstance = {
  activeIndex: number;
  update: () => void;
};

const defaultActiveIndex = aboutTimeline.findIndex(
  (item) => "active" in item && item.active,
);

export function AboutTimelineSlider() {
  const [activeIndex, setActiveIndex] = useState(
    defaultActiveIndex >= 0 ? defaultActiveIndex : 0,
  );

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleSwiper = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.activeIndex);
    requestAnimationFrame(() => swiper.update());
  };

  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides
      slideToClickedSlide
      watchOverflow={false}
      observer
      observeParents
      initialSlide={defaultActiveIndex >= 0 ? defaultActiveIndex : 0}
      spaceBetween={0}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiper}
      className={styles.swiper}
    >
      {aboutTimeline.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <SwiperSlide key={item.year} className={styles.slide}>
            <article
              className={`${styles.box} ${isActive ? styles.boxActive : ""}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.description}
                  width={400}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.year}>{item.year}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
