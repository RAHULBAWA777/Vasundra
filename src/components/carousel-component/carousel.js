import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import c1 from '../../images/Welcome to Vasundhara Projects_files/1.jpg'
import c2 from '../../images/Welcome to Vasundhara Projects_files/2.jpg'
import c3 from '../../images/Welcome to Vasundhara Projects_files/3.jpg'
import c4 from '../../images/Welcome to Vasundhara Projects_files/4.jpg'
import c5 from '../../images/Welcome to Vasundhara Projects_files/5.jpg'
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
                <img className="pixy" alt="img3" src={c1} style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
                <div>
                    <img className="pixy" alt="img4" src={c2} style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
                <div>
                    <img className="pixy" alt="img1" src={c3}  style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
                <div>
                    <img className="pixy" alt="img2" src={c4} style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
                <div>
                    <img className="pixy" alt="img2" src={c5} style={{height:screen<480?'16rem':'45rem'}}/>
                </div>
            </Carousel>
        </div>
        </>
    );
}