import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css'



const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const classData = {
          name: data.name,
          age:data.age,
          price: data.price,
          description:data.description,
          imageURL: imageURL
        };
        const serviceData ={...loggedInUser, ...classData}
        const url = `http://localhost:4400/addService`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response', res))
      };
    
      const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '7c08a80d22ecf720df3cc15d66c5151e');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    return (
       <div className="d-flex justify-content-between service-container">
           <div className="col-md-2">
             <Sidebar></Sidebar>
           </div>
           <div className="col-md-6 service py-5">
             <h3 style={{fontWeight:'bold', marginBottom:'40px', fontFamily:" 'Courgette', cursive"}}>Add Service</h3>
            <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                          <Col>
                              <label htmlFor="" style={{fontWeight:'bold'}}>Service Title</label>
                              <br/>
                              <input  name="name" defaultValue="" placeholder="Enter Title"  className="form-control" ref={register}/>
                          </Col>
                          <Col >
                                <label htmlFor="" style={{fontWeight:'bold'}}>Price</label>
                                <br/>
                                <input  name="price" defaultValue="" placeholder="Enter price"  className="form-control" ref={register}/>
                          </Col>
                          <Col>
                                <label htmlFor="" style={{fontWeight:'bold'}}>Age</label>
                                <br/>
                                <input  name="age" defaultValue="" placeholder="Enter Age" className="form-control" ref={register}/>
                          </Col>
                      </Row>
                      <Row className="mt-5"> 
                          <Col>
                              <label htmlFor="" style={{fontWeight:'bold'}}>Description</label>
                              <br/>
                              <textarea  name="description" style={{height:"50px"}} placeholder="Enter Description" className="form-control" ref={register}></textarea>
                          </Col>
                          <Col>
                            <label htmlFor="" style={{fontWeight:'bold'}}>Image</label>
                            <br/>
                            <input name="exampleRequired" type="file" className="form-control" onChange={handleImageUpload}/>
                        </Col>  
                      </Row>
                      <button className="btn-brand p- mt-3" style={{borderRadius: '5px', width:'150px', color: 'white'}}type="submit">Submit</button>
                     
            </form>
          </div>  
       </div>
     
    );
};

export default AddService;