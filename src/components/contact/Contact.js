import React from 'react'
import FormComponent from '../form-component/FormComponent'
import './contact.css'
import globe from '../../images/icons8-globe.gif'
import call from '../../images/icons8-missed-call.gif'
import mail from '../../images/icons8-gmail-logo.gif'

const Contact = () => {
  return (
    <>
      <div className='row'>
        <div className="col-sm-6">
          <div className="cont">
            <div className='one'>
              <img className='pic' src={globe} alt='globe' />
              {/* <h1>Theme Ambience</h1> */}
              <h3>Corporate  Office</h3>
              <h5> Vasundhara Projects Pvt. Ltd.#502 ,</h5>
              <h5>  Chaitanya Chambers
            Chaitanyapuri, Kothapet,</h5>
              <h5> Hyderabad - 500060, Telangana
            <br />
            Landmark - Beside HP Petrol Bunk</h5>
            </div>
            <div className='two'>
              <img className='pic' src={call} alt='globe' />
              <h3>Phones</h3>
              <h5>+91 40 66816622     +91 40 66816632</h5>

            </div>
            <div className='three'>
              <img className='pic' src={mail} alt='globe' />
              <h3>Write Us</h3>
              <h5>Email : <a style={{color:'black'}} href="mailto: info@vasundharaprojects.com">info@vasundharaprojects.com</a> (For sales and marketing queries)</h5>
              {/* <h5>Email : <a href="mailto: themeambience@gmail.com">themeambience@gmail.com</a>  (For contractors and other queries)</h5> */}
            </div>
          </div>
        </div>

        <div className="col-sm-6 c">
          <FormComponent />
        </div>
      </div>
    </>
  )
}

export default Contact