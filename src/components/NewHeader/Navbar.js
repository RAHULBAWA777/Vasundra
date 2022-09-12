import React from 'react'
import './navbar.css'
import Logo from '../../images/vasundhara logopng.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        //container-fluid
        <nav className="navbar bg-da   navbar-expand-lg  shadow p-3 mb-5  " style={{ zIndex: '100', top: '0' }}>
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
                                <li><a className="dropdown-item " href="#">Hyderabad &raquo;</a>
                                    {/* SUBMENU 1 */}
                                    {/* <ul class="dropdown-menu dropdown-submenu-1">
                                   
                                        <li><Link className="dropdown-item" to="/LorvenParadise">Lorven's Paradise</Link></li>                                        
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/LorvenCity">Lorven City</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/LorvenGoldLeaf">Lorven's Gold Leaf</Link></li>
                               
                                    </ul> */}
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item " href="#">Visakhapatnam &raquo;</a>
                                    {/* SUBMENU 2 */}
                                    <ul class="dropdown-menu dropdown-submenu-2">

                                        {/* <li><Link className="dropdown-item" to="/LorvenFortuneClub">Lorven's Fortune Club</Link></li>                                        
                                   <li><hr className="dropdown-divider" /></li>
                                   <li><Link className="dropdown-item" to="/LorvenFortuneHome">Lorven's Fortune Home</Link></li>
                                   <li><hr className="dropdown-divider" /></li> */}
                                        <li><Link className="dropdown-item" to="/LorvenFortuneCastle">Lorven's Fortune Castle</Link></li>

                                    </ul>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item " href="#">Nalgonda &raquo;</a>
                                    {/* SUBMENU 3 */}
                                    <ul class="dropdown-menu dropdown-submenu-3">
                                        <li><Link className="dropdown-item" to="/JubileeHills">Jubilee Hills (Nalgonda)</Link></li>
                                    </ul>
                                </li>

                                <li><hr className="dropdown-divider" /></li>

                                <li><a className="dropdown-item " href="#">Kalwakurthy &raquo;</a>
                                    {/* SUBMENU 4*/}
                                    <ul class="dropdown-menu dropdown-submenu-4">
                                        <li><Link className="dropdown-item" to="/LorvenBrundhavan">Lorven's Brundhavan</Link></li>
                                    </ul>
                                </li>

                                <li><hr className="dropdown-divider" /></li>

                                <li><a className="dropdown-item " href="#">Miryalaguda &raquo;</a>
                                    {/* SUBMENU 5*/}
                                    <ul class="dropdown-menu dropdown-submenu-5">
                                        <li><Link className="dropdown-item" to="/LorvenMillerCity">Lorven's Miller's City</Link></li>
                                    </ul>
                                </li>
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