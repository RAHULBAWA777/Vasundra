import React from 'react'
import './completedProjects.css'
import lP from '../../images/lorvenParadise_home.jpg'
import airport from '../../images/airport.jpg'
import goldLeaf from '../../images/home.jpg'
import fortuneClub from '../../images/01.jpg'
import fortuneHome from '../../images/02.jpg'
import anthem from '../../images/anthem.jpg'
import ambiencefort from '../../images/ambiencefort.jpg'
import temple from '../../images/temple-town-front1.jpg'
import GolfImage from '../../images/golfview_img_banner.jpg'
import LakeImage from '../../images/main_img.jpg'
import vista from '../../images/Picture4.jpg'
import swan from '../../images/Picture10.jpg'
import FortImage from '../../images/fortview_main.jpg'



const CompletedProjects = () => {
  return (
    <>
      <div className=' container spaceDown' style={{ height: '100%', marginTop: '1rem' }}>

        <div className='row'>
          <div className="col-sm-4">
            <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
            <img style={{height:'15rem', width: '22rem' }} src={lP} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mx-auto">Lorven's Paradise</h5>
                <p className="card-text mx-auto">Kandukur Mandal</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
            <img style={{height:'15rem', width: '22rem' }} src={airport} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mx-auto">Lorven City</h5>
                <p className="card-text mx-auto">Nandigoan Village</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
            <img style={{height:'15rem', width: '22rem' }} src={goldLeaf} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mx-auto">Lorven's Gold Leaf</h5>
                <p className="card-text mx-auto">Srinagar Colony, Hyderabad</p>
              </div>
            </div>
          </div>

          < div className="col-sm-4">
            <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
            <img style={{height:'15rem', width: '22rem' }} src={fortuneClub} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{fontSize:'20px'}} className="card-title mx-auto">Lorven's Fortune Club</h5>
                <p className="card-text mx-auto">Atchuthapuram, Visakhapatnam</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
            <img style={{height:'15rem', width: '22rem' }} src={fortuneHome} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{fontSize:'19px'}} className="card-title mx-auto">Lorven's Fortune Homes</h5>
                <p className="card-text mx-auto">Visakhapatnam  Atchuthapuram highway</p>
              </div>
            </div>
          </div>

          {/* <div className="col-sm-4">
            <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
              <img style={{height:'13rem', width: '22rem' }} src={anthem} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mx-auto">Ambience Anthem</h5>
                <p className="card-text mx-auto"> Secunderabad, Medchal</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
              <img style={{height:'13rem', width: '22rem' }} src={ambiencefort} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mx-auto">Ambience Fort</h5>
                <p className="card-text mx-auto">Attapur, Rajendra Nagar</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
              <img style={{height:'13rem', width: '22rem' }} src={GolfImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mx-auto">Theme Golf View</h5>
                <p className="card-text">Nanakramguda ORR junction, Gachibowli</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
              <img style={{height:'13rem', width: '22rem' }} src={LakeImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mx-auto">Lake View</h5>
                <p className="card-text">Shaikpet, Towli Chowki</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
              <img style={{height:'13rem', width: '22rem' }} src={temple} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{fontSize:'1.3rem'}} className="card-title mx-auto">Tirupathi Temple Town Phase-1</h5>
                <p className="card-text">Renigunta -Tirupati Road</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
              <img style={{height:'13rem', width: '22rem' }} src={vista} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{fontSize:'1.3rem'}} className="card-title mx-auto">Theme Vista</h5>
                <p className="card-text">Golconda Fort, Bapu Ghat</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
              <img style={{height:'13rem', width: '22rem' }} src={swan} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{fontSize:'1.3rem'}} className="card-title mx-auto">Swan Lake</h5>
                <p className="card-text">Kukatpally</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
              <img style={{height:'13rem', width: '22rem' }} src={FortImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 style={{fontSize:'1.3rem'}} className="card-title mx-auto">Fort View</h5>
                <p className="card-text">Hydershakote on the Chilkur Balaji Temple, Gandipet Road</p>
              </div>
            </div>
          </div> */}


        </div>
      </div>
   
    </>
  )
}

export default CompletedProjects