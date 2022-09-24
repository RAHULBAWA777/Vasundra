import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../completedProjects.css'
import Tirumala from '../../../images/completed/Tirumala Enclave/thirumulaenclave1.jpg'
import TirumalaRoutemap from '../../../images/completed/Tirumala Enclave/thirumalaroutemap.jpg'

const TirumulaEnclave = () => {

  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        'Tirumala Enclave'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      showCursor:false
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <>
      <div className='patternBackground'>
        <h1 style={{ width: '50%', margin:'4rem 0' }}><span style={{ whiteSpace: 'pre' }} ref={el} /></h1>
        
        <div className='swapLeft' data-aos="fade-up-right"   data-aos-easing="linear"  data-aos-duration="500">
        <div className='patternContentAbout'>
          <h1 style={{ paddingRight: '1rem' }}>About</h1>
          <p style={{fontSize:'1rem',padding:'1rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>

        <div className='swapRight' data-aos="fade-up-left"  data-aos-easing="linear"  data-aos-duration="500">
        <div className='patternContentFeatures'>
          <h1 style={{ paddingRight: '1rem'}}>Features & Amenities</h1>
          <p style={{fontSize:'1rem',padding:'1rem'}}>
          <ul style={{textAlign:'left'}}>
                    <li>100% Clear Title & Vaasthu</li>
                    <li>33' & 50 feet wide BT Roads</li>
                    <li>Underground Drainage System</li>
                    <li>24 hrs water supply from OHT</li>
                    <li>Electricity</li>
                    <li>Park with children play area</li>
                    <li>Excellent landscaping & Avenue plantation</li>
                    <li>5 Yrs maintenance and 24x7 Security</li>
                    <li>Fencing around the venture with main Entrance Arch & Gate</li>
                    <li>Sports & Recreation Facility</li>
                  </ul>
          </p>
        </div>
        </div>


        <div className='swapLeft' data-aos="fade-up-right"  data-aos-easing="linear"  data-aos-duration="500">
        <div className='patternContentHighlights'>
          <h1 style={{ paddingRight: '1rem' }}>Highlights</h1>
          <p style={{fontSize:'1rem',padding:'1rem'}}>
          <ul style={{textAlign:'left'}}>
                    <h4>Project Highlights</h4>
                    <li>Layout in Residential R1 Zone</li>
                    <li>Plot sizes: 200, 400, 500, & 1000 Sq. Yds</li>
                    <li>Just 15 Min Drive from rajivgandhi International Airport</li>
                    <li>Near to 3 Star hotel Papyrus port</li>
                    <li>Adjacent to Proposed Amusement Zone & MNC Projects in 824 acres (120 ft road to this project runs parallet to our venture)</li>
                    <li>Very near to Symbiosis University (40 acres)</li>
                    <li>Very near to Tata Institute of Sociences (TISS) (100 acres)</li>
                    <li>Near to JOHNSON & JOHNSON Manufacturing Unit.</li>
                    <li>Very near to Cargo railway terminal @ kothur.</li>
                    <li>Prop. Shamshabad Metro Rail & MMTS connectivity Hyderabad</li>
                    <li>Just 03 kms from TEXTILE PARK</li>
                    <li>GMR & Apollo Health city near by kothur.</li>
                    <li>Very near to DLF HOUSING PROJECT.</li>
                    <li>Very near to P&G (Procter & Gamble Unit) (CINCINNATTI, US)</li>

                    <h4>Educational Institutions</h4>
                    <li>Ideal School</li>
                    <li>Symbiosis & TISS</li>
                  </ul>
          </p>
        </div>
        </div>
      

        <div className='swapRight' data-aos="fade-up-left"  data-aos-easing="linear"  data-aos-duration="500">
        <div className='patternContentRoutemap'>
          <h1 style={{ paddingRight: '1rem'}}>Routemap</h1>
          <img src={TirumalaRoutemap} alt='routemap'/>
        </div>
        </div>



      </div>
    </>
  )
}

export default TirumulaEnclave