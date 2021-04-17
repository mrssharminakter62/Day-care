import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'



const DetailsOfCare = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description: 'We are open 5 days',
            icon: faClock,
            background: 'primary',
        },
        {
            title: 'Visit Our Location',
            description: 'Naples, NY 10003 Italy',
            icon: faMapMarker,
            background: 'dark',
        },
        {
            title: 'Call us now',
            description: '+13455656566',
            icon: faPhone,
            background: 'primary',
        },
        
        ]
        
    return (
        <section className=" d-flex justify-content-center">
        <div className="details w-75 row">
        {
              infoData.map(info => <InfoCard info={info}></InfoCard>)
          }
        </div>
      </section>
    );
};

export default DetailsOfCare;