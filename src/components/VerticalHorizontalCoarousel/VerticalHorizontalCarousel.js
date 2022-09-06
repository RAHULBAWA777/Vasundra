import { useState } from 'react'
import "./VertiHoriCarousel.css";
import { ImageData } from "./CarouselData/ImageData";
import { InfoData } from "./CarouselData/InfoData";
import years from '../../images/40 years.png'

// import FortImage from '../../images/Picture.jpg'


const VerticalHorizontalCarousel = ({ slides, slides2 }) => {

    const [current, setCurrent] = useState(0);
    const [current2, setCurrent2] = useState(0);
    const length = slides.length;
    const length2 = slides2.length;
    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setCurrent2(current2 === length2 - 1 ? 0 : current2 + 1)
    }
    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setCurrent2(current2 === 0 ? length2 - 1 : current2 - 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0) { // COMPLIMENTARY
        return null;
    }
    return (
        <>
            <div className='mainDiv'>
                <div className='leftWrapper'>
                    <div className='carouselDiv2'>

                        {InfoData.map((slide2, index2) => {
                            return (
                                <div className={index2 === current2 ? 'slide2 active2' : 'slide2'} key={index2}>
                                    {index2 === current2 && (slide2.info)}
                                </div>
                            )
                        })}
                    </div>

                    <div className='carouselDiv3'>
      
                        <button className="arrow-left" onClick={prevImage}><i className="fa-solid fa-arrow-left"></i></button>
                       
                        <button className="arrow-right" onClick={nextImage}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className='carouselDiv1'>
                    {ImageData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img src={slide.image} alt='pic' />)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default VerticalHorizontalCarousel