import React from 'react';

const Service = (props) => {
    const {name, age, price, imageURL} = props.service;

    return (
     
        <div class="card" style={{width: '18rem', marginLeft:'30px'}}>
        <img src={imageURL} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-body d-flex justify-content-between text-align-center">
            <div >
                <p style={{color:'#f72585', fontWeight:'bold'}}>Age</p>
                 <h6 style={{ fontWeight:'bold'}}>{age}</h6> 
            </div>
            <div>
                <p style={{color:'#f72585', fontWeight:'bold'}}>Price</p>
                <h6 style={{ fontWeight:'bold'}}>{price}</h6>          
            </div> 
        </div> 
        <button className="btn-brand text-light">Book Now</button>
    </div>
    );
};

export default Service;