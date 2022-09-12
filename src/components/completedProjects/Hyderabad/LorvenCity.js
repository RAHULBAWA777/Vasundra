import React from 'react'
import filmcity from '../../../images/filmcity.jpg'
import '../completedProjects.css'

const LorvenCity = () => {
    return (
  //     <div className='OngoingProjectsMainDiv'>
  //     <img src={filmcity} />
  //     <h1 style={{ margin: '2rem 0' }}>Tirumula Enclave</h1>
  //     <p>Situated about 20 kms from Dilsukhnagar and located near Hyderabad-Vijayawada Highway (NH-9), Tirumala Enclave is a tribute to Vasundhara's endeavor to provide a worthy living place in a secured environment with all conceivable amenities.
  //         Meandering tree-lined streets with lovely homes and manicured lawns are the hallmarks of Tirumala Enclave. Well-spread amidst lush expanse of greenery, each home is aesthetically designed and elegantly constructed adding beauty to the landscape of the place. With all the conveniences of modern urban life like well-laid roads and electricity, and round-the-clock water and power supply, Tirumala Enclave is home to a large number of proud home owners.</p>
  // </div>
  <>
   <div className='OngoingProjectsMainDiv'>
  <p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
</div>
  </>
    )
  }

export default LorvenCity