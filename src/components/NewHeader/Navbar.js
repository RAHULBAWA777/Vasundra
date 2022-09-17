import React from 'react'
import './navbar.css'
import Logo from '../../images/vasundhara logopng.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        //container-fluid
        <nav className="navbar bg-da   navbar-expand-lg  shadow p-3   " style={{ zIndex: '100', top: '0' }}>
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
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ongoing Projects
                            </a>
                            <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item " to="/Vangoor">Vangoor</Link></li>
                                    
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
                                <i style={{ fontWeight: 'bold' }} className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className='nav-link active'>
                                <i style={{ fontWeight: 'bold' }} className="fa-brands fa-whatsapp"></i>
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