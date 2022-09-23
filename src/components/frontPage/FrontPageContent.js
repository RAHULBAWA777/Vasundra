import React, { useState,useEffect,useRef } from 'react';
import TextCard from "../text-card-component/TextCard";

// import CarouselComponent from "../carousel-component/carousel";
import TextCardLeft from "../text-card-left-component/TextCardLeft";
import PopUpComponent from "../popUp/PopUp";
import vangoorPic1 from '../../images/VangoorPics/100FT ROAD 1.jpg'
import vangoorPic2 from '../../images/VangoorPics/Arch.jpg'
import { ImageData } from '../VerticalHorizontalCoarousel/CarouselData/ImageData';
import { InfoData } from '../VerticalHorizontalCoarousel/CarouselData/InfoData';
import VerticalHorizontalCarousel from '../VerticalHorizontalCoarousel/VerticalHorizontalCarousel';
import FooterComponent from '../footer-component/FooterComponent';
import Cards from '../floatingCards/Cards';
import scanner from '../../images/qr code.png'
import "./frontPage.css"

const FrontPageContent = () => {

  const [popUpState, setPopUpState] = useState(true);

 

  return (
    <>

      <PopUpComponent popUpState={popUpState} setPopUpState={setPopUpState} />
      <div className={popUpState && 'wrapper-blurred'}>
        <VerticalHorizontalCarousel slides={ImageData} slides2={InfoData} />
        {/* <CarouselComponent /> */}


        <TextCard
          heading=""
          para="Vasundhara Projects (P) Ltd is a premier real estate development company with more than a decade of rich experience in execution of landmark projects across the length and breadth of Hyderabad. Founded in 2002 by Mr. K. V. Ramesh, Vasundhara has carved a permanent niche for itself by adopting quality system standards and meeting people's aspirations and desire for a comfortable lifestyle. Our goal is to provide quality plots with international standards and enhance the quality of life of our customers."
          imgOrder="-1"
        />


        <TextCardLeft
          heading="Vangoor Pride"
          subHeading="The Vision & DNA"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          // Planning to develop a total of 208 Apartments
          // Total 12 Floors with Built up area up to 434000 sft
          // The venture is surrounded by Hospitals such as Zoi, Germanten Hospital, etc… which are just in the range of 1 to 3 Kms On the other hand schools like Glendale, Kangaroo Kids, Army School, etc.. are in the vicinity."
          link="read more ....."
          img={vangoorPic2}
          imgOrder="-1"
        />

        <TextCardLeft
          heading="Vangoor Pride"
          subHeading="#HeartOfHyderabad"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          // link="read more ....."
          img={vangoorPic1}
          imgOrder="0"
        />


        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 data-aos="zoom-out" className='walkHeader' style={{ width: '40%', margin: '70px auto' }}> 360<span>&#176;</span> Virtual Tour</h1>
        <iframe data-aos="zoom-out" src="https://app.lapentor.com/sphere/aerial-360" frameBorder="0" width="75%" height="550px" scrolling="no" allow="vr,gyroscope,accelerometer" allowFullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>      <br />
        <br />
        <br />
        <br />
        <br />
        <h1 data-aos="zoom-out" className='walkHeader' style={{ width: '40%', margin: '70px auto' }}> 360<span>&#176;</span> Virtual Tour</h1>
        <iframe data-aos="zoom-out" src="https://app.lapentor.com/sphere/vangoor-pride-3d" frameBorder="0" width="75%" height="550px" scrolling="no" allow="vr,gyroscope,accelerometer" allowFullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>      <br />
        <br />

        <Cards />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <h1 style={{width:'40%',margin:'70px auto'}}>Our Location</h1> */}
        <div className='loc'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8220962137225!2d78.53111710041769!3d17.3722915380292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ee44de1977%3A0xe77df5ba7b53bdfb!2sChaitanya%20Chambers!5e0!3m2!1sen!2sin!4v1662485971088!5m2!1sen!2sin" width="70%" height="450" style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* <div className='sc'><h2>Scan QR Code <br/> For Location</h2> <img src={scanner}></img></div> */}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <FooterComponent />
      </div>
    </>
  )
}

export default FrontPageContent