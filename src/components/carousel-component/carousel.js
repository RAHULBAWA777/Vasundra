import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import FortImage from '../../images/Picture.jpg'
import GolfImage from '../../images/Picture1.jpg'
import LakeImage from '../../images/Highcompressed_1588995805.jpg'
import templeImage from '../../images/Highcompressed_2057613182.jpg'
import { useState,useEffect } from "react";

export default function CarouselComponent() {
    const [screen, setScreen] = useState(0);
    
    let resizeWindow = () => {
        setScreen(window.innerWidth);
    };
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);
    return (
        <>
        <div className="carousel-wrapper" style={{marginTop:'-3rem'}}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} >
                <div >
                <img className="pixy" alt="img3" src={LakeImage} style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
                <div>
                    <img className="pixy" alt="img4" src={templeImage} style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
                <div>
                    <img className="pixy" alt="img1" src={GolfImage}  style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
                <div>
                    <img className="pixy" alt="img2" src={FortImage} style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
            </Carousel>
        </div>
        </>
    );
}