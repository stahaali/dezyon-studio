"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroBrands } from "@/data/hero";
import styles from "./BrandSlider.module.css";

const sliderBrands = [...heroBrands, ...heroBrands];

export function BrandSlider() {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        spaceBetween={48}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { spaceBetween: 56 },
          1024: { spaceBetween: 64 },
        }}
        className={styles.swiper}
      >
        {sliderBrands.map((brand, index) => (
          <SwiperSlide key={`${brand.src}-${index}`} className={styles.slide}>
            <Image
              src={brand.src}
              alt={brand.alt}
              width={165}
              height={48}
              className={styles.brandImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
