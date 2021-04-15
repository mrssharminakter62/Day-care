import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar'


const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const classData = {
          name: data.name,
          weight:data.weight,
          price: data.price,
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
       <div className="d-flex justify-content-between">
           <div className="col-md-4">
            <Sidebar></Sidebar>
           </div>
           <div>
             <h3 style={{fontWeight:'bold', marginBottom:'40px'}}>Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                          <Col>
                              <label htmlFor="" style={{fontWeight:'bold'}}>Product Name</label>
                              <br/>
                              <input  name="name" defaultValue="" ref={register}/>
                          </Col>
                          <Col>
                                <label htmlFor="" style={{fontWeight:'bold'}}>Add Price</label>
                                <br/>
                                <input  name="price" defaultValue="$" ref={register}/>
                          </Col>
                      </Row>
                      <Row> 
                          <Col>
                              <label htmlFor="" style={{fontWeight:'bold'}}>Weight</label>
                              <br/>
                              <input  name="weight" defaultValue="Kg" ref={register}/>
                          </Col>
                          <Col>
                            <label htmlFor="" style={{fontWeight:'bold'}}>Add Photo</label>
                            <br/>
                            <input name="exampleRequired" type="file"  onChange={handleImageUpload}/>
                        </Col>  
                      </Row>
                      <Button variant="success" className="mt-4" type="submit">Submit</Button>                               
            </form>
</div>  
       </div>
     
    );
};

export default AddService;