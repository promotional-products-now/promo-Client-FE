import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Parallax, Navigation } from "swiper/modules";

export default function Carousel({
  children,
  numberOfItems,
}: {
  children: React.ReactNode[];
  numberOfItems?: number;
}) {
  return (
    <>
      <Swiper
        navigation
        parallax={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: numberOfItems || 3,
            // spaceBetween: 40,
          },
          1200: {
            slidesPerView: numberOfItems || 4,
            // spaceBetween: 40,
          },
          3024: {
            slidesPerView: numberOfItems || 4,
            // spaceBetween: 50,
          },
        }}
        modules={[Navigation, Parallax, A11y]}
      >
        {children &&
          children.map((node) => {
            return <SwiperSlide>{node}</SwiperSlide>;
          })}
      </Swiper>
    </>
  );
}
