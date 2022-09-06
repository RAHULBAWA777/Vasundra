import React from 'react'
import GolfImage from '../../images/golfview_img_banner.jpg'
import './currentViews.css'

const GolfView = () => {
  return (
    <div className='golf'>
        <img src={GolfImage} />
        <h1 style={{margin:'2rem 0'}}>GOLF VIEW</h1>
        <p >A Futuristic location par excellence Surrounded by software giants like Microsoft, Infosys, Wipro and Indian School of Business. Hyderabad’s elite schools Oakridge and Delhi Public School are in the vicinity. Ramanaidu Cine Studios have set up their base nearby.
{/* <br/> */}
The State Government is also setting up a new financial district. The area is appreciating in value everyday, naturally ! ORR/Express-way junction leading to International Airport is at a stone throw distance from the project with 80 feet connecting road.
{/* <br/> */}
A total number of 378 apartments with a built up area of 5,60,000 Sqft the high rise apartments are carefully designed to fulfill costumers dreams, by leading architects and building technicians. The project is overlooking 18 Hole Golf Course developed by EMMAR Properties and State Government jointly. The project will have facilities matching international standards such as Full Fledged Departmental Store, Day Care Center, Play Ground, Full Fledged club having air conditioned gymnasium, banquet hall dining area and indoor games.
{/* <br/> */}
The well-laid roads and the open areas are developed into breathtaking landscapes and keeping health in mind providing swimming pool and fitness center and jogging track. The apartments will be well connected with the securities and emergency power backup through generators and Internet facilities. The plans for the proposed project are already approved by HUDA / GHMC.</p>
    </div>
  )
}

export default GolfView