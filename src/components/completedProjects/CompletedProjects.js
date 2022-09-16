import React from 'react'
import './completedProjects.css'

// HYDERABAD
import lP from '../../images/lorvenParadise_home.jpg'
import airport from '../../images/airport.jpg'
import goldLeaf from '../../images/home.jpg'
import filmcity from '../../images/filmcity.jpg'
import angel from '../../images/about.jpg'

// VISAKHAPATNAM
import fortuneClub from '../../images/01.jpg'
import fortuneHome from '../../images/02.jpg'
import hiland from '../../images/hilland1.jpg'
import vensai from '../../images/vensaitownship.jpg'

import { Link } from 'react-router-dom'



const CompletedProjects = () => {
  return (
    <>
      <div className=' container spaceDown' style={{ height: '100%', marginTop: '1rem' }}>

        <h1>Hyderabad</h1>

        <div className='row'>
          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <Link class="text-decoration-none" to="/LorvenParadise">
                <img style={{ height: '15rem', width: '22rem' }} src={lP} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title mx-auto">Lorven's Paradise</h5>
                  <p className="card-text mx-auto">Kandukur Mandal</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <Link class="text-decoration-none" to="/LorvenCity">
                <img style={{ height: '15rem', width: '22rem' }} src={airport} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title mx-auto">Lorven City</h5>
                  <p className="card-text mx-auto">Nandigoan Village</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <Link class="text-decoration-none" to="/LorvenParadise">
                <img style={{ height: '15rem', width: '22rem' }} src={goldLeaf} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title mx-auto">Lorven's Gold Leaf</h5>
                  <p className="card-text mx-auto">Srinagar Colony, Hyderabad</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <Link class="text-decoration-none" to="/LorvenParadise">
                <img style={{ height: '15rem', width: '22rem' }} src={filmcity} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title mx-auto">Tirumula Enclave</h5>
                  <p className="card-text mx-auto">Srinagar Colony, Hyderabad</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <Link class="text-decoration-none" to="/LorvenParadise">
                <img style={{ height: '15rem', width: '22rem' }} src={angel} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 style={{fontSize:'1.2rem'}} className="card-title mx-auto">Angel Hills @ Ghatkesar</h5>
                  <p className="card-text mx-auto">Srinagar Colony, Hyderabad</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <Link class="text-decoration-none" to="/LorvenParadise">
                <img style={{ height: '15rem', width: '22rem' }} src={goldLeaf} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 style={{fontSize:'.9rem'}} className="card-title mx-auto">Lorven's Enclave @ Ghatkesar</h5>
                  <p className="card-text mx-auto">Srinagar Colony, Hyderabad</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <Link class="text-decoration-none" to="/LorvenParadise">
                <img style={{ height: '15rem', width: '22rem' }} src={goldLeaf} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 style={{fontSize:'1rem'}} className="card-title mx-auto">Victoria Valey @ Ghatkesar</h5>
                  <p className="card-text mx-auto">Srinagar Colony, Hyderabad</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='row hite'>

          <h1>Visakhapatnam</h1>

          < div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <img style={{ height: '15rem', width: '22rem' }} src={fortuneClub} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{ fontSize: '20px' }} className="card-title mx-auto">Lorven's Fortune Club</h5>
                <p className="card-text mx-auto">Atchuthapuram, Visakhapatnam</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <img style={{ height: '15rem', width: '22rem' }} src={fortuneHome} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{ fontSize: '19px' }} className="card-title mx-auto">Lorven's Fortune Homes</h5>
                <p className="card-text mx-auto">Visakhapatnam  Atchuthapuram highway</p>
              </div>
            </div>
          </div>

          < div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <img style={{ height: '15rem', width: '22rem' }} src={hiland} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{ fontSize: '20px' }} className="card-title mx-auto">Lorven's Hiland</h5>
                <p className="card-text mx-auto">Atchuthapuram, Visakhapatnam</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{ height: '22rem', width: '22rem', marginTop: '3rem' }}>
              <img style={{ height: '15rem', width: '22rem' }} src={vensai} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{ fontSize: '19px' }} className="card-title mx-auto">Vensai Township</h5>
                <p className="card-text mx-auto">Visakhapatnam  Atchuthapuram highway</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CompletedProjects