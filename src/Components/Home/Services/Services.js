import React from 'react';
import photo from '../../../images/image11.png'

const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
  
                 <h3 className="text-brand" >Our Classes</h3>
                <h2>Learning from playing</h2>
            </div>
           
            <div class="card" style={{width: '18rem'}}>
                <img src={photo} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-body d-flex justify-content-between">
                    <div>
                         <h6 className="card-text">Age</h6>
                         <p>2-3 years</p>
                    </div>
                    <div>
                        <h6 className="card-text ">Price</h6>
                        <p>$12/day</p>
                    </div> 
                </div>
                </div>
                            
        </section>
    );
};

export default Services;