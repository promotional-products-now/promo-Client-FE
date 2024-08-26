import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Parallax, Navigation } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper";

import "../../style.css";

export default function Carousel({
  children,
  numberOfItems,
}: {
  children: React.ReactNode[];
  numberOfItems?: number;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  React.useEffect(() => {
    divRef.current?.focus();
  }, []);

  return (
    <div className="relative">
      <div className="px-1 md:px-12 relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            enabled: true,
          }}
          // parallax={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 40,
            },
            1200: {
              slidesPerView: numberOfItems ? numberOfItems : 3,
              // spaceBetween: 40,
            },
            3024: {
              slidesPerView: numberOfItems ? numberOfItems : 4,
              // spaceBetween: 50,
            },
          }}
          modules={[Navigation, Parallax, A11y]}
        >
          {children &&
            children.map((node) => {
              return <SwiperSlide key={uuidv4()}>{node}</SwiperSlide>;
            })}
        </Swiper>
      </div>

      <div
        aria-disabled="false"
        className="swiper-button-next border border-transparent"
        onClick={() => swiperRef.current && swiperRef.current.slideNext()}
      ></div>
      <div
        aria-disabled="false"
        className="swiper-button-prev"
        onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
      ></div>
    </div>
  );
}
