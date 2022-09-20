import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles1.css";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
    <div className="swiperMainDiv">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper1"
      >
        <SwiperSlide><div className="swiper-innerContent"><h1>Structure</h1><p> RCC framed structures to withstand wind and seismic loads as designed by licenced structural engineers.</p></div></SwiperSlide>
        <SwiperSlide><div className="swiper-innerContent"><h1>Lifts</h1><p>6 nos of high speed automatic ten passenger lifts and one 16 passengers lift with ARD rescue device with V3F for energy efficiency of Schindler/ OTIS/ Kone/Thyssenkrupp or similar make.</p></div></SwiperSlide>
        <SwiperSlide><div className="swiper-innerContent"><h1>Plastering</h1><p>Internal & External single coat plastering/Gypsum with sponge finish.</p></div></SwiperSlide>
        <SwiperSlide><div className="swiper-innerContent"><h1>Fire Fighting</h1><p>Fire fighting equipments as per standard Government norms for high rise buildings.</p></div></SwiperSlide>
        <SwiperSlide><div className="swiper-innerContent"><h1>Drainage</h1><p>PVC sanitary piping of Sudhakar /Prince or similar make.</p></div></SwiperSlide>
        <SwiperSlide><div className="swiper-innerContent"><h1>Water Supply</h1><p>CPVC /UPVC Of Ashirvad / Astral/Prince or similar make.</p></div></SwiperSlide>
        <SwiperSlide><div className="swiper-innerContent"><h1>Generators</h1><p>Emergency power supply full/partial for common areas, services and flats. Generators of Kirloskar/ Cummins or similar make.</p></div></SwiperSlide>
        <SwiperSlide><div className="swiper-innerContent">Slide 8</div></SwiperSlide>
        <SwiperSlide><div className="swiper-innerContent">Slide 9</div></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
