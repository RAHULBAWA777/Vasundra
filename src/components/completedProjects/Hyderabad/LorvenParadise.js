import React from 'react'
import lP from '../../../images/lorvenParadise_home.jpg'
import routemapLorvenParadise from '../../../images/completed/lorevens paradise/rouemap_s.jpg'
import phase1s from '../../../images/completed/lorevens paradise/phase1s.jpg'
import phase2s from '../../../images/completed/lorevens paradise/phase2s.jpg'
import brochureLorvenParadise from '../../../images/completed/lorevens paradise/brochure1.jpg'
import '../completedProjects.css'

const LorvenParadise = () => {
    return (
        <>
            {/* MAIN DIV */}

            <div className='OngoingProjectsMainDiv'>
                <div class="bg-image"><img src={lP} /></div>

                {/* ACCORDIAN */}

                <div className='accorInnerDiv' data-aos="zoom-in-down">
                    <div class="accordion accordion-flush" id="accordionFlushExample">

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    About
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>Are you tired of all the traffic snarls and chaotic malls?</li>
                                        <li>Are you put off by all the stress that comes with living in a city?</li>
                                        <li>Are you fed up of all the bottlenecks of a city life?</li>
                                    </ul>
                                    If so, then Lorven's Paradise fulfills your aspirations to get away from the hustle-bustle of city's life, yet be close to its reverberating energy and innumerable conveniences. Located at Kandukur Mandal near Srisailam National Highway, it is a pollution-free zone and spread over 200 acres of land with over 2,000 plots.
                                    <br />
                                    You can sense your desires come alive in all its form at Lorven's Paradise. Dotted with fruit bearing trees, you can sense the feeling of living in idyllic surroundings pampered by modern conveniences. You can revel in its tranquil serenity and enjoy the expansive green space, trials and ponds taking a cool walk along its corridors. You can literally soak in its abundant panoramic attractions.
                                    Pick the plot of your choice in the size that suits to your taste. Build a home of your choice in a style that makes a uniquely personal statement of what living is all about, that is, gracious living in a home of unmatched quality and craftsmanship. In addition to it, you can add a lovely garden, a swanky parking lot and an enduring terrace where you can gaze admiringly at nature's unmatched grandeur. Beyond beautiful exteriors and custom floor plans, we offer you the assurance that you will enjoy your new home in comfort.
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
                                        <li>50 & 33 Feet wide black top roads</li>
                                        <li>24 hours water facility</li>
                                        <li>Underground drainage system</li>
                                        <li>Overhead water tank</li>
                                        <li>Electricity supply</li>
                                        <li>Modern street lighting</li>
                                        <li>Avenue plantation</li>
                                        <li>Round the clock security with</li>
                                        <li>Barbed wire fencing</li>
                                        <li>Pollution-free environment</li>
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
                                        <li>20 mins drive from international Airport</li>
                                        <li>Proposed 4 lines of 237kms from Hyderabad to Srisailam</li>
                                        <li>8 lines up to Mohabbat Nagar, Close to our Venture</li>
                                        <li>Aadibhatla Aerospace</li>
                                        <li>Close to ITIR Zone 2, With 15 lakh Employment by 2016</li>
                                        <li>APHB Township in 600 acres</li>
                                        <li>AP State Trading Corporation</li>
                                        <li>IT SEZs</li>
                                        <li>TCS, COGNIZANT (25,000 Employment by 2014)</li>
                                        <li>Mak Projects (with premium villas)</li>
                                        <li>Tummaluru IT Cluster.</li>
                                        <li>Videocon Royal Suites & Villas (40 acres)</li>
                                        <li>Bio-Tech Park</li>
                                        <li>Close to JIMS Hospital</li>
                                        <li>Close to Golf village & Race Tracks</li>

                                        <h4>Educational Institutions :</h4>
                                        <li>Aghakhan International School.</li>
                                        <li>Nishitha Engineering College</li>
                                        <li>Aryabhatta Institute</li>
                                        <li>NRI Institute of Technology</li>
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
                                <div class="accordion-body">       <img src={routemapLorvenParadise} alt='routemap' />      </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    Phase 1
                                </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">       <img src={phase1s} alt='layoutLorvenParadise' />       </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    Phase 2
                                </button>
                            </h2>
                            <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">    <img src={phase2s} alt='layoutLorvenParadise' />       </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingEight">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                    e-Brochure
                                </button>
                            </h2>
                            <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">       <img src={brochureLorvenParadise} alt='brochureLorvenCity' />      </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ############################## END ########################################### */}

            </div>
        </>
    )
}

export default LorvenParadise