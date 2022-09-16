import {useState} from 'react'
import './currentViews.css'
import Logo from '../../images/Theme-Imperial-logo.png'
import ground from '../../images/Master Plan LOW RES.jpg'
import pi1 from '../../images/Picture6.jpg'
import pi2 from '../../images/Picture7.jpg'
import pi3 from '../../images/Picture8.jpg'
import pi4 from '../../images/Picture9.jpg'

import CustomModal from './customModal/CustomModal'

const Project = () => {
  const[hiddenState,setHiddenState]=useState(false)
  return (
    <>
      <div className='proj'>
        <iframe style= {{ width: '90%'}} className='frame' src='https://theme-imperial-3-d-project.vercel.app/'
          title='3D Project'
          frameBorder='0' referrerPolicy='no-referrer-when-downgrade' />
      </div>
      
      <div className='banner'>
   <div className={hiddenState&&'drop'}>  <button id='btn'  onClick={()=>setHiddenState(!hiddenState)}>-</button></div>
      <div className={hiddenState&&'banner-hidden'} >
        <img  src={Logo} alt='logo' height={90} width={200} />
        <h1 style={{ fontSize: '16px' }}>Theme Ambience Group</h1>
        <h6 style={{fontSize:'14px'}}>TS RERA No:P02400004462</h6>
        <hr className='hh' />
        <h2 style={{ fontSize: '20px' }}>Attarpur, Hyderbad</h2>
        <h3 style={{ fontSize: '17px' }}>Total Units | 404 Units</h3>
        <h4 style={{ fontSize: '15px' }}>2BHK Apartments | 208 Units</h4>
        <h5 style={{ fontSize: '14px' }}>1470 Sq.ft - 1368 Sq.ft</h5>
        <hr className='hh' />
        <h4 style={{ fontSize: '15px' }}>3BHK Apartments | 196 Units</h4>
        <h5 style={{ fontSize: '14px' }}>1845 Sq.ft - 2655 Sq.ft</h5>
      </div>
      </div>
 
      <div className='projectSpecs'>
        <h1>Theme Imperial</h1>
        <br />
        <h2> Attapur, Hyderabad</h2>
        
        <h5>
          <ul className='u'>
            <li>2.25 Acres of Land situated at Attapur, Hyderabad. </li>

            <li>Planning to develop a total of 208 Apartments</li>

            <li>Total 12 Floors with Built up area up to 434000 sft</li>
          </ul>

          The venture is surrounded by Hospitals such as Zoi, Germanten Hospital, etc… which are just in the range of 1 to 3 Kms
          On the other hand schools like Glendale, Kangaroo Kids, Army School, etc.. are in the vicinity.
        </h5>
      
        <img className='gd' src={ground} alt='stilt'/>
      </div>
      <h1 className='tourr'>3BHK 360<span>&#176;</span> Virtual Tour</h1>
      <iframe src="https://app.lapentor.com/sphere/3bhk-imperial" frameBorder="0" width="75%" height="550px" scrolling="no" allow="vr,gyroscope,accelerometer" allowFullScreen={true}  mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='buildingView container'>
        <h1>Gallery</h1>

        <div className='row'>

          <div className="col-sm-6">
            <div className="card f" >
              <img className="card-img-top vi" src={pi1} alt="Card image cap" />
            </div>
          </div>

         
          <div className="col-sm-6">
            <div className="card f" >
              <img className="card-img-top vi" src={pi2} alt="Card image cap"/>
            </div>
          </div>
    

          
          <div className="col-sm-6">
            <div className="card f" >
              <img className="card-img-top vi" src={pi3} alt="Card image cap"/>
            </div>
          </div>
         

          
          <div className="col-sm-6">
            <div className="card f" >
              <img className="card-img-top vi" src={pi4} alt="Card image cap"  />
            </div>
          </div>
         
        </div>
      </div>


{/* ##################### GALLERY ################################################## */}

      <div className='gallery container'>
        <h1 style={{marginTop:'5rem'}}>Floor Plan</h1>
      <CustomModal/>
        {/* <div className='row'>

          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f1} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img style={{ height:'14rem'}} className="card-img-top" src={f2} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f3} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f4} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f5} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f6} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f7} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f8} alt="Card image cap" />
            </div>
          </div>

         
        </div> */}
      </div>
    </>
  )
}

export default Project