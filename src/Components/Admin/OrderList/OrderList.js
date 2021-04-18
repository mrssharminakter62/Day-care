import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrdersDataTable from '../OrdersDataTable/OrdersDataTable';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://calm-tundra-70873.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
          <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 pr-5 ml-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand text-center mt-5 mb-5">All Orders</h5>
                <OrdersDataTable orders={orders}></OrdersDataTable>
            </div>
        </div>
        </div>
    );
};

export default OrderList;