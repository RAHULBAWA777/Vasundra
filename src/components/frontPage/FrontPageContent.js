import React, { useState } from 'react';
// import TextCard from "../text-card-component/TextCard";
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

  const[popUpState,setPopUpState]=useState(true)


  return (
    <>
      
      <PopUpComponent popUpState={popUpState} setPopUpState={setPopUpState}/>
      <div className={popUpState&&'wrapper-blurred'}>
      <VerticalHorizontalCarousel slides={ImageData} slides2={InfoData}/>
      {/* <CarouselComponent /> */}
      {/* <TextCard
        heading="Welcome to Theme Ambience"
        para="Theme Ambience Constructions Pvt Ltd, a well established construction company headed by Mr. Bimal Kumar Kedia (MD) in the twin cities known for its uncompromising quality standards, and in schedule completion of projects, ever evolving to provide customers with an environment that truly understands their needs and aspirations.
  
  The firm has over Thirty Years of experience in the building industry, having built several buildings since inception. Given the immense scope in the housing industry in India, the company has been focusing on promoting a series of large residential townships and apartments in several areas in and around the city. All the ventures promoted by the firm so far have been highly successful. Theme Ambience Constructions Pvt Ltd is ISO-9001 certified Company."

        imgOrder="-1"
      /> */}


      <TextCardLeft
        heading="Vangoor Pride"
        subHeading="The Vision & DNA"
        // para="2.25 Acres of Land situated at Attapur, Hyderabad.
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
        // para="Tirupati Temple Town is a prestigiious venture floated by one of the most reputed promoters,who in ove two decades have reached commanding positions in the construction industry. It is the result of grand symbiosis of a team of highly experienced professionals who take meticulous care in aspect of Human Nature, Environment, Art, Architecture, Design Space, Landscape and Recreation. "
        // link="read more ....."
        img ={vangoorPic1} 
        imgOrder="0"
      />


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className='walkHeader' style={{width:'40%', margin:'70px auto'}}> 360<span>&#176;</span> Virtual Tour</h1>
      <iframe src="https://app.lapentor.com/sphere/aerial-360" frameBorder="0" width="75%" height="550px" scrolling="no" allow="vr,gyroscope,accelerometer" allowFullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className='walkHeader' style={{width:'40%', margin:'70px auto'}}> 360<span>&#176;</span> Virtual Tour</h1>
      <iframe src="https://app.lapentor.com/sphere/vangoor-pride-3d" frameBorder="0" width="75%" height="550px" scrolling="no" allow="vr,gyroscope,accelerometer" allowFullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>      <br/>
      <br/>

      <Cards />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     {/* <h1 style={{width:'40%',margin:'70px auto'}}>Our Location</h1> */}
     <div className='loc'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8220962137225!2d78.53111710041769!3d17.3722915380292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ee44de1977%3A0xe77df5ba7b53bdfb!2sChaitanya%20Chambers!5e0!3m2!1sen!2sin!4v1662485971088!5m2!1sen!2sin" width="70%" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    {/* <div className='sc'><h2>Scan QR Code <br/> For Location</h2> <img src={scanner}></img></div> */}
    </div>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <FooterComponent />
    </div>
    </>
  )
}

export default FrontPageContent