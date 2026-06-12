"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { timeline } from "@/data/site";
import styles from "./Timeline.module.css";

import "swiper/css";

type SwiperInstance = {
  activeIndex: number;
  update: () => void;
};

const defaultActiveIndex = timeline.findIndex((item) => "active" in item && item.active);

export function TimelineSlider() {
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
      centerInsufficientSlides
      slideToClickedSlide
      watchOverflow={false}
      observer
      observeParents
      initialSlide={defaultActiveIndex >= 0 ? defaultActiveIndex : 0}
      spaceBetween={0}
      breakpoints={{
        1024: {
          slidesPerView: timeline.length,
          centeredSlides: false,
          centerInsufficientSlides: false,
          allowTouchMove: true,
        },
      }}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiper}
      className={styles.swiper}
    >
      {timeline.map((item, index) => {
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
