// import React from 'react'
// import './completedProjects.css'
// import Swapanlok from '../../images/swapnalok.jpg'
// import Indralok from '../../images/indralok.jpg'
// import ambience_avenue from '../../images/ambience_avenue.jpg'
// import whisper_valley from '../../images/whisper_valley.jpg'
// import canton from '../../images/canton.jpg'
// import anthem from '../../images/anthem.jpg'
// import ambiencefort from '../../images/ambiencefort.jpg'
// import temple from '../../images/temple-town-front1.jpg'
// import Emami from '../../images/fortview_main.jpg'
// import GolfImage from '../../images/golfview_img_banner.jpg'
// import LakeImage from '../../images/main_img.jpg'
// import vista from '../../images/Picture4.jpg'
// import swan from '../../images/Picture10.jpg'
// import FortImage from '../../images/fortview_main.jpg'



// const CompletedProjects = () => {
//   return (
//     <>
//       <div className=' container' style={{ height: '100%', marginTop: '1rem' }}>

//         <div className='row'>
//           <div className="col-sm-4">
//             <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={Swapanlok} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Swapanlok</h5>
//                 <p className="card-text mx-auto">Secunderabad, Andhra Pradesh</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={Indralok} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Indralok Complex</h5>
//                 <p className="card-text mx-auto">Road No.1, Banjara Hills</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={ambience_avenue} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Ambience Avenue</h5>
//                 <p className="card-text mx-auto">Srinagar Colony, Hyderabad</p>
//               </div>
//             </div>
//           </div>

//           < div className="col-sm-4">
//             <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={whisper_valley} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Whisper Valley</h5>
//                 <p className="card-text mx-auto">Jubilee Hills, Hyderabad</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={canton} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Ambience Canton</h5>
//                 <p className="card-text mx-auto">Secunderabad, Medchal</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card " style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={anthem} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Ambience Anthem</h5>
//                 <p className="card-text mx-auto"> Secunderabad, Medchal</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={ambiencefort} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Ambience Fort</h5>
//                 <p className="card-text mx-auto">Attapur, Rajendra Nagar</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={Emami} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Emami Swanlake</h5>
//                 <p className="card-text">Hydersha Kote near Langar House</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'12rem', width: '22rem' }} src={GolfImage} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Theme Golf View</h5>
//                 <p className="card-text">Nanakramguda ORR junction, Gachibowli</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={LakeImage} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title mx-auto">Lake View</h5>
//                 <p className="card-text">Shaikpet, Towli Chowki</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'11rem', width: '22rem' }} src={temple} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 style={{fontSize:'1.3rem'}} className="card-title mx-auto">Tirupathi Temple Town Phase-1</h5>
//                 <p className="card-text">Renigunta -Tirupati Road</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'12rem', width: '22rem' }} src={vista} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 style={{fontSize:'1.3rem'}} className="card-title mx-auto">Theme Vista</h5>
//                 <p className="card-text">Golconda Fort, Bapu Ghat</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={swan} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 style={{fontSize:'1.3rem'}} className="card-title mx-auto">Swan Lake</h5>
//                 <p className="card-text">Kukatpally</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="card" style={{height:'22rem', width: '22rem',marginTop:'3rem' }}>
//               <img style={{height:'13rem', width: '22rem' }} src={FortImage} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 style={{fontSize:'1.3rem'}} className="card-title mx-auto">Fort View</h5>
//                 <p className="card-text">Hydershakote on the Chilkur Balaji Temple, Gandipet Road</p>
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>
   
//     </>
//   )
// }

// export default CompletedProjects