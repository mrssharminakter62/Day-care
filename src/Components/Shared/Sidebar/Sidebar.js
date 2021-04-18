import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUserPlus, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const [adminLevel, setAdminLevel] = useState(false);

    useEffect(()=>{
        fetch('https://calm-tundra-70873.herokuapp.com/adminLevel', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res =>res.json())
        .then(data => setAdminLevel(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service/:id" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="text-white">
                    <FontAwesomeIcon icon={faUsers} />  <span>Booking list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span >Review</span> 
                    </Link>
                </li>
               {/* ami chara keoi excess korte parbena tai comment korlam, pHero er email add korte pari nai.sorry */}

               {/* { adminLevel && <div> */} 
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
                    <Link to="/admin" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span> Admin</span>
                    </Link>
                </li>
                 
                <li>
                    <Link to="/manageService" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                    </Link>
                </li>
               {/* </div>} */}
            </ul>
            <div>
           <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;