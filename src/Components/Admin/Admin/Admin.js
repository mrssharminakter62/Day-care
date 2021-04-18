import React, { useContext, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Admin = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit =data=>{
        console.log(data)
        const classData = {
           email: data.email
          };
          
          fetch('http://localhost:4400/addAdmin', {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(classData)
          })
          .then(res => console.log('server side response', res))
    }
  
    return (
        <div>
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6" style={{marginLeft:'300px'}}>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email"  ref={register} />
                        <button className="btn-brand  p- mt-3" style={{borderRadius: '5px', width:'150px', color: 'white'}} type="submit">Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;