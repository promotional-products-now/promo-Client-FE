import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Parallax, Navigation } from "swiper/modules";

import "./style.css";

export default function MultipleBannerCarousel({
  children,
  numberOfItems,
}: {
  children: React.ReactNode[];
  numberOfItems?: number;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  React.useEffect(() => {
    divRef.current?.focus();
  }, []);

  return (
    <div className="relative">
      <div className="px-1 md:px-12 relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
            enabled: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          grabCursor={true}
          loop={true}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          // slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 1,
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
        ref={navigationNextRef}
        className="swiper-button-next border border-transparent"
        onClick={() => swiperRef.current && swiperRef.current.slideNext()}
      ></div>
      <div
        aria-disabled="false"
        ref={navigationPrevRef}
        className="swiper-button-prev"
        onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
      ></div>
    </div>
  );
}
