import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUserPlus, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/service/:id" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Booking list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span >Review</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/order" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Order list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                 
                <li>
                    <Link to="/manageService" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;