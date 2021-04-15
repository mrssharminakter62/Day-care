import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
       <section>
             <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/book" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Review" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Review</span>
                    </Link>
                </li>
                 <div>
                    <li>
                        <Link to="/order" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Order list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Add service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Make admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Manage services</span>
                        </Link>
                    </li>
                </div>  
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
       </section>
    );
};

export default Sidebar;