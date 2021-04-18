import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Book = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const [shippingData, setShippingData] = useState(null)
  
    const [book, setBook] = useState([]);
    const {id} = useParams();
    const {name, age} = book;

useEffect(()=>{
  fetch(`https://calm-tundra-70873.herokuapp.com/service/${id}`)
    .then(res => res.json())
    .then(data =>setBook(data))
}, [])

const onSubmit = data =>{
    setShippingData(data)
};

const handlePayment = paymentId =>{
 const orderDetails = {
      ...loggedInUser,
      book,
      shipment: shippingData,
      paymentId, 
      orderTime: new Date()};
   
    fetch('https://calm-tundra-70873.herokuapp.com/addOrder',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data){
            alert('Your order successfully !')
          }
    })
}



    return (
        <div className="row ">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
             <div style={{display: shippingData ? 'none' : 'block'}} className="col-md-6 mt-5">
                    <form className="form-style"
                        onSubmit={handleSubmit(onSubmit)}
                        >
                        
                        <input  name="name" defaultValue={loggedInUser.name}  className="form-control" ref={register}/>
                        <br/>
                        <input  name="company" defaultValue={loggedInUser.email}  className="form-control" ref={register}/>
                        <br/>
                        <input  name="company" defaultValue={name} className="form-control" ref={register}/>
                        <br/>
                        <button className="btn-brand  p- mt-3" style={{borderRadius: '5px', width:'150px', color: 'white'}}type="submit">Submit</button>      
                    </form>
                </div>
            <div style={{display: shippingData ? 'block' : 'none'}} className="mt-5 col-md-6  w-50">
                <h2>Please pay your payment</h2>
                <PaymentProcess handlePayment={handlePayment}></PaymentProcess>
            </div>
    

      
 
        </div>
    );
};

export default Book;