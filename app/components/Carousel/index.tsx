import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Carousel({ children }: { children: React.ReactNode[] }) {
  return (
    <>
      <Swiper
        // freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          3024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {children &&
          children.map((node) => {
            return <SwiperSlide>{node}</SwiperSlide>;
          })}
      </Swiper>
    </>
  );
}
