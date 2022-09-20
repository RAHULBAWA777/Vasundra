import React, { useRef, useState } from 'react'
import '../currentViews.css'
import TextCardLeft from "../../text-card-left-component/TextCardLeft";
import SwiperCards from "./SwiperCards/SwiperCards"
import waterfall from '../../../images/vid.mp4'
import vangoorPic1 from '../../../images/VangoorPics/100FT ROAD 1.jpg'
import vangoorPic2 from '../../../images/VangoorPics/Arch.jpg'
import vangoorPic3 from '../../../images/VangoorPics/100FT ROAD 2.jpg'
import vangoorPic4 from '../../../images/VangoorPics/amphitheatre 1.jpg'
import vangoorPic5 from '../../../images/VangoorPics/Gazebo.jpg'
import vangoorPic6 from '../../../images/VangoorPics/jogging track.jpg'
import vangoorPic7 from '../../../images/VangoorPics/Open area 3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";



const Vangoor = () => {
  return (
    <>
    {/* <div className='mnm'> */}
      <div className="vid"><video src={waterfall} autoPlay muted loop id="myVideo"></video></div>
      <div className='welcome-wrapper'>
        <div className='welcome' data-aos="fade-up" data-aos-duration="2000">      Welcome       </div>
        <div className='welcome' data-aos="fade-up" data-aos-duration="2500">      to       </div>
        <div className='welcome' data-aos="fade-up" data-aos-duration="3000">      VANGOOR  PRIDE       </div>
      </div>

        <div className='dynamic-Pics' >
        <TextCardLeft
        heading="Vangoor Pride"
        subHeading="The Vision & DNA"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        link="read more ....."
        img={vangoorPic2}
        imgOrder="-1"
      />

      <TextCardLeft
        heading="Vangoor Pride"
        subHeading="#HeartOfHyderabad"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        link="read more ....."
        img ={vangoorPic1} 
        imgOrder="0"
      />
      </div>

      <div className='swipperRenders'>
        <h1>More Pictures</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          perspective:1000
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={vangoorPic1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vangoorPic2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vangoorPic3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vangoorPic4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vangoorPic5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vangoorPic6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vangoorPic7} />
        </SwiperSlide>
      </Swiper>
      
      <div className='swipperRenders1'>
        <h1>Specifications</h1>
      <SwiperCards/>
      </div>
      </div>
      {/* #################################################### */}

   

      
      {/* </div> */}
    </>
  )
}

export default Vangoor