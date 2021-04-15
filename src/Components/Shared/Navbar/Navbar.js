import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#f72585'}}>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <img style={{height: '50px', marginLeft:'10px', borderRadius:'10px'}} src={logo} alt=""/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 lg-0 fw-bold">
                <li className="nav-item active">
                    <Link className="nav-link mr-5 text-white" to="/">Home</Link>
                </li>
              
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to="/dashboard">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to="#">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to="#">Contact Us</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;