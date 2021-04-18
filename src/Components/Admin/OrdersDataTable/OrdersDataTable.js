import React from 'react';

const OrdersDataTable = ({orders}) => {
  
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Email ID</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">PayWith</th>
            <th className="text-secondary" scope="col">staus</th>
            </tr>
        </thead>
        <tbody>
            {
                orders.map((order, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.book.name}</td>
                    <td>CreaditCard</td>
                    <td className="text-success">done</td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default OrdersDataTable;