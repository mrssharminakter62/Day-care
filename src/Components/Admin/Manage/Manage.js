import React from 'react';

const Manage = ({services}) => {

    const handleClick =(id)=>{
        fetch(`http://localhost:4400/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
          console.log(result);
            })}
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Age</th>
            <th className="text-secondary" scope="col">Price</th>
            <th className="text-secondary" scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                services.map((service, index) =>     
                <tr>
                    <td>{index + 1}</td>
                    <td>{service.name}</td>
                    <td>{service.age}</td>
                    <td>{service.price}</td>
                   <td> <button  onClick={()=>handleClick(service._id)} style={{border:"none", color:'red', fontWeight:"bold"}}> Delete</button></td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default Manage;