import React from 'react';

const Testimonials = (props) => {
    const {name, company, description} = props.review;
    return (  
     <div class="card" style={{width: '18rem', marginLeft:'60px', border:'none'}}>
            <div className="card-body">
                <p className="text-end">{description} </p>
                <div className="card-title text-end">
                <h5 >{name}</h5>
                <h6>{company}</h6>
            </div>
         </div>
    </div> 
   
    );
};

export default Testimonials;