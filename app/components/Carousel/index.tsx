import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Carousel({ children }: { children: React.ReactNode[] }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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
