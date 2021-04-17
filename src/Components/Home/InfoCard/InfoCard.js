import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'

const InfoCard = ({info}) => {
    return (
        <div className="info col-md-4 text-white info-card mt-5 "> 
        <div className={`d-flex justify-content-center info-container info-${info.background}`}>
        <div >
          <FontAwesomeIcon className="info-icon" icon={info.icon} > </FontAwesomeIcon>
          </div>
          <div className="ms-3">
              <h6>{info.title}</h6>
              <small>{info.description}</small>
          </div>
        </div>
      </div>
    );
};

export default InfoCard;