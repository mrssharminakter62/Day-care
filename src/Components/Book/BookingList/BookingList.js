import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import BookingData from '../BookingData/BookingData';


const BookingList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://calm-tundra-70873.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="container-fluid row ">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
            
            <div className="col-md-8 p-4 pr-5 ml-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand fs-2 mb-5" style={{borderBottom:'2px solid black', width:'100px'}}> Orders</h5>
                <BookingData orders={orders} key={orders._id}></BookingData>
       
        </div>
            </div>
        </div>
    );
};

export default BookingList;