import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services> 
           <Contact></Contact>
           
        </div>
    );
};

export default Home;