"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "@/lib/swiper-react";
import { timeline } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./Timeline.module.css";

import "swiper/css";

type SwiperInstance = {
  activeIndex: number;
  clickedIndex: number;
};

const defaultActiveIndex = timeline.findIndex((item) => "active" in item && item.active);

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(
    defaultActiveIndex >= 0 ? defaultActiveIndex : 0,
  );

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section
      id="timeline"
      className={`page-section ${styles.section}`}
      aria-labelledby="timeline-heading"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="How we got here"
            light
            lineBreak={false}
            className={styles.sectionHeading}
          />
        </ScrollReveal>
      </Container>

      <ScrollReveal delay={0.1}>
        <div className={styles.sliderOuter}>
          <Swiper
            slidesPerView="auto"
            centeredSlides
            slideToClickedSlide
            initialSlide={defaultActiveIndex >= 0 ? defaultActiveIndex : 0}
            spaceBetween={0}
            onSlideChange={handleSlideChange}
            onSwiper={handleSlideChange}
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
        </div>
      </ScrollReveal>
    </section>
  );
}
