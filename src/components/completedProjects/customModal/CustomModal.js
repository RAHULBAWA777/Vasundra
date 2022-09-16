import { useState } from 'react'
import './CustomModal.css'
import f1 from '../../../images/f1.jpeg'
import f2 from '../../../images/f2.jpeg'
import f3 from '../../../images/f3.jpeg'
import f4 from '../../../images/f4.jpeg'
import f5 from '../../../images/f5.jpeg'
import f6 from '../../../images/f6.jpeg'
import f7 from '../../../images/f7.jpeg'
import f8 from '../../../images/f8.jpeg'
import f9 from '../../../images/f9.jpeg'

const CustomModal = () => {
    const imgData = [
        {
            imgSrc: f1
        },
        {
            imgSrc: f2
        },
        {
            imgSrc: f3
        },
        {
            imgSrc: f4
        },
        {
            imgSrc: f5
        },
        {
            imgSrc: f6
        },
        {
            imgSrc: f7
        },
        {
            imgSrc: f8
        },
        {
            imgSrc: f9
        }
    ]
    const [mod,setMod]=useState(false);
    const [tempImgSrc,setTeampImgSrc]=useState("");

    const getImg=(imgSrc) =>{
      setTeampImgSrc(imgSrc);
      setMod(true);
    }
    return (
        <>
        <div className={mod?"mod open":"mod"}>
            <img src={tempImgSrc} alt='floorPlan'/>
            <i className="fa-solid fa-xmark" onClick={()=>setMod(false)}/>
        </div>

        <div className='row'>
            {imgData.map((item, index) => {
                return (
                    <>
                    <div className="col-sm-3">
                    <div className="card s florPlan" style={{width: '20rem'}} key={index} onClick={() =>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} className="card-img-top lenghtt" alt="..." />
                    </div>
                    </div>
                    </>
                )
            })}
            </div>

        </>
    )
}

export default CustomModal