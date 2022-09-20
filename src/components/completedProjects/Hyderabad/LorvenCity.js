import React from 'react'
import airport from '../../../images/airport.jpg'
import routemapLorvenCity from '../../../images/completed/Lorvens City/routmap-s.jpg'
import layoutLorvenCity from '../../../images/completed/Lorvens City/layout-s.jpg'
import brochureLorvenCity from '../../../images/completed/Lorvens City/e-brochure-01s.jpg'
import '../completedProjects.css'

const LorvenCity = () => {
  // const [hide, setHide] = useState(false);

  return (
    <>
      {/* MAIN DIV */}

      <div className='OngoingProjectsMainDiv'>
      <div class="bg-image"><img src={airport} /></div>
        {/* ACCORDIAN */}

        <div className='accorInnerDiv' data-aos="zoom-in-down">
        <h1>Lorven's City</h1>
          <div class="accordion accordion-flush" id="accordionFlushExample">

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  About
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">      Located near Hyderabad-Bangalore Highway (NH-7) at Nandigoan Village, next to Kothur Flyover on Shamshabad-Shadnagar route, Lorven City blends urban stylishness with rural serenity.<br />
                  Lorven City is DTCP approved layout; done up in two phases. Each of these completed phases has sold over 1,000 plots. These phases are conceptualized to be modern self-contained residential townships. Being spacious, serene and beautiful, they offer the resplendent charm of living amidst lush green landscapes. With modern amenities like security, wide tree lined roads and rain water drainage system, 24-hour water from bore wells and power lines on all roads, street lights, playgrounds, etc, it offers secured sanctuary to several people.<br />
                  The area around Lorven City is wrapped in tranquility and has a solitude that is enchanting. Yet it remains close to urban conveniences like shopping centers, recreation zones, educational institutions, hospitals, etc. And what’s more, it offers easy accessibility to - Lorven City is one -of-a-kind modernist masterpiece in a picturesque setting!
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Features & Amenities
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul>
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
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Project Highlights
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul>
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

                    <h4>Educational Institutions :</h4>
                    <li>Ideal School</li>
                    <li>Symbiosis & TISS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                 Gallery
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">      No images provided   </div>
              </div>
            </div> */}

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Routemap
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">       <img src={routemapLorvenCity} alt='routemap' />      </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  Layout
                </button>
              </h2>
              <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">       <img src={layoutLorvenCity} alt='layoutLorvenCity' />       </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  e-Brochure
                </button>
              </h2>
              <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">       <img src={brochureLorvenCity} alt='brochureLorvenCity' />      </div>
              </div>
            </div>

            {/* <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingEight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                Video
                </button>
              </h2>
              <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">       Brick masonry with A-class moulded Fly-ash/ AAC blocks.      </div>
              </div>
            </div> */}

          </div>
        </div>

        {/* ############################## END ########################################### */}

      </div>

    </>
  )
}

export default LorvenCity