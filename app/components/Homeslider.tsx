"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function Homeslider() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-96 w-full  "
    >
      <SwiperSlide className="bg-primary">slide 1</SwiperSlide>
      <SwiperSlide>slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}
