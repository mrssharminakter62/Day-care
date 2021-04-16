import React, { useEffect, useState } from 'react';
import Testimonials from '../Testimonials/Testimonials';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:4400/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (

        <section className="mt-5 pt-5">
            <div style={{marginLeft:'200px'}}>
                <div className="text-center">
                    <h3 className="text-brand" >TESTIMONIAL</h3>
                    <h2>Parents Say About Us</h2>
                </div>
                <div className="row m-5" >
                        {
                    reviews.map(review => <Testimonials review={review} key={review._id}></Testimonials>)
                }
                </div>
            </div>
       
                   
    </section>
    );
};

export default Testimonial;