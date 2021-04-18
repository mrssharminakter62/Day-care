import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer'
import Testimonial from '../Testimonial/Testimonial';
import DetailsOfCare from '../DetailsOfCare/DetailsOfCare';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <DetailsOfCare></DetailsOfCare>
           <Services></Services> 
           <Testimonial></Testimonial>
           <Contact></Contact>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;