import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay, Pagination } from "swiper";
// import "./styles.css";
import "swiper/css/pagination";
// import required modules
import "./App.css";
export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, honu) {
      return '<span class=" ' + honu + '">' + index + "</span>";
    },
  };
  return (
    <>
      <Swiper
        // direction={"vertical"}
        pagination={{
          el: ".swipper-pagination-virticale",
        }}
        // modules={[]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="w-[50rem] h-[20rem] grid place-items-center bg-blue-500 text-white">
          <h3 className="slider-sub-title">Lorem ipsum dolor sit amet.</h3>
        </SwiperSlide>
        <SwiperSlide className="w-[50rem] h-[20rem] grid place-items-center bg-blue-500 text-white">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="w-[50rem] h-[20rem] grid place-items-center bg-blue-500 text-white">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="w-[50rem] h-[20rem] grid place-items-center bg-blue-500 text-white">
          Slide 4
        </SwiperSlide>
        <div className="swipper-pagination-virticale"></div>
      </Swiper>

      <div className="mt-9 w-[100vw] h-[50vh] grid place-items-start px-8">
        <div className="dvi_curve ">
          <div className="right_div"></div>
          <div className="left_div"></div>
          <div className="bottom_div"></div>
        </div>
      </div>
    </>
  );
}
