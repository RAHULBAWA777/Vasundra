import React from 'react'
import FortImage from '../../images/fortview_main.jpg'
import './currentViews.css'

const FortView = () => {
    return (
        <div className='fort'>
            <img src={FortImage} />
            <h1 style={{margin:'2rem 0'}}>FORT VIEW</h1>
            <p style={{fontSize:'.8rem'}}>Fort View a dream of spacious and luxurious apartments that is set in between the lush green tranquility of nature and yet which is at an arms distance to the hub of "Happening Hyderabad". One can taste the flavour of history all around and at the same time enjoy the benefits of ultra modern comforts and amenities.
                Fort views is a new venture from Theme Projects, a trusted name on the real estate horizon, with rich experience and innovation appraoch. The Quality of construction and innovative designs is what gives an edge over the other players. Fort View is yet another testimony of their unflinching commitment towards total customer satisfaction.

                Mall, Monument or Mass Transport - all within arms reach

                Fort View is located in Hydersha Kote which is very near to Langar House. Accessibility to any shopping mall, schools, corporate hospital or restaurant in the city or driving to any of the major transport terminals like Railway Stations, Airports will never be a problem.
                Fort View also shares close proximity to the Outer Ring Road and A.P. Police Academy.</p>
        </div>
    )
}

export default FortView