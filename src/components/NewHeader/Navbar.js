import React from 'react'
import './navbar.css'
import Logo from '../../images/logo.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        //container-fluid
        <nav className="navbar bg-da   navbar-expand-lg  shadow p-3 mb-5  " style={{zIndex:'100',top:'0'}}>
            <div className="container-fluid mx">
                <a className="navbar-brand" href="#"><img src={Logo} alt='logo' height={50} width={200} /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/comProjects">Completed Projects</Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Current Projects
                            </a>
                            <ul className="dropdown-menu ">
                                
                                <li><Link className="dropdown-item " to="/project">Theme Imperial</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/TirupatiTempleTown">Tirupati Temple Town Phase-2</Link></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item dropdown ">
                            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Completed Projects
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/comProjects">Ambience Fort</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Swapnalok</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Indralok</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Avenue</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Whisper Valley</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Walden Club</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Ambience Canton</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Ambience Anthem</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Tirupati Temple Town Phase-1</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">@ Kukapally-Emami</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Golf View</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Lake View</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/comProjects">Emami Swanlake</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li> */}
                       
                        <li className="nav-item dropdown ">
                            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Future Projects
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/ThemeCrest">Theme Crest</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/Elite">Theme Elite</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/Lakeville">Theme Lakeville</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/whisperValley">Theme Whisper Valley @ Vijayawada</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/Grandeur">Theme Grandeur</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/palmSpring">Theme Palm Spring</Link></li>
                                
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/feedback">Feedback</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item ">
                            <a className='nav-link active'>
                            <i style={{fontWeight:'bold'}} className="fa-brands fa-instagram"></i>
                            </a>
                            </li>
                            <li className="nav-item ">
                            <a className='nav-link active'>
                            <i style={{fontWeight:'bold'}} className="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                            <li className="nav-item ">
                            <a className='nav-link active'>
                            <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            </li>
                    </ul>

                </div>
            </div>
            {/* <div className='align-self-end nav-collapse'>
                <i className="fa-brands fa-square-instagram"></i> <i className="fa-brands fa-square-facebook"></i><i className="fa-brands fa-square-whatsapp"></i>
            </div> */}
        </nav>

    )
}

export default Navbar