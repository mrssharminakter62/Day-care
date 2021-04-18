import React, { useEffect, useState } from 'react';
import photo from '../../../images/image11.png'
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://calm-tundra-70873.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
     <section className="mt-5 pt-5">
        <div className="text-center">
             <h3 className="text-brand" >Our Classes</h3>
            <h2>Learning from playing</h2>
        </div>
        <div className="row m-5">
                {
               services.map(service => <Service service={service} key={service._id}></Service>)
           }
             
        </div>
       
                   
    </section>
    );
};

export default Services;