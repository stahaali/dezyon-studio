"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeCapabilitiesLogos } from "@/data/home-capabilities";
import styles from "./CapabilitiesLogoSlider.module.css";

import "swiper/css";

const sliderLogos = [...homeCapabilitiesLogos, ...homeCapabilitiesLogos];

export function CapabilitiesLogoSlider() {
  return (
    <div className={styles.slider} aria-label="Client logos">
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        spaceBetween={28}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { spaceBetween: 36 },
          1024: { spaceBetween: 44 },
        }}
        className={styles.swiper}
      >
        {sliderLogos.map((brand, index) => (
          <SwiperSlide key={`${brand.src}-${index}`} className={styles.slide}>
            <Image
              src={brand.src}
              alt={brand.alt}
              width={90}
              height={22}
              className={styles.logo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
