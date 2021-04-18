import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const classData = {
          name: data.name,
          company:data.company,
          description:data.description
        };
        const serviceData ={...loggedInUser, ...classData}
        const url = `https://calm-tundra-70873.herokuapp.com/addReview`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response', res))
      };
    return (
        <div className="d-flex justify-content-between service-container">
           <div className="col-md-2">
             <Sidebar></Sidebar>
           </div>
           <div className="col-md-6 service py-5">
             <h3 style={{fontWeight:'bold', marginBottom:'40px', fontFamily:" 'Courgette', cursive"}}>Review</h3>
            <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
        
                    <input  name="name" defaultValue="" placeholder="Your name" className="form-control" ref={register}/>
                    <br/>
                    <input  name="company" defaultValue="" placeholder="Company's name Destignation" className="form-control" ref={register}/>
                    <br/>
                    <textarea  name="description" style={{height:"50px"}} placeholder=" Description" className="form-control" ref={register}></textarea>
                    <br/>
                    <button className="btn-brand  p- mt-3" style={{borderRadius: '5px', width:'150px', color: 'white'}}type="submit">Submit</button>
                     
            </form>
          </div>  
       </div>
    );
};

export default Review;