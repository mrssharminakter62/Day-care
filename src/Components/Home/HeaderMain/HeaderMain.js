import React from 'react';
import './HeaderMain.css';
import img from '../../../images/img4.png'

const HeaderMain = () => {
    return (
        <main className="header-main row d-flex mt-5 align-items-center  ">
            <div className="col-md-4 my-5 offset-md-1">
               <p>We Care Your Baby</p> 
               <h1>Best Play <br/> Areas For Kids</h1>
               <button className="btn-brand p-2" style={{borderRadius: '8px', fontSize: '18px', color: 'white'}}>Read More</button>
            </div>
            <div className="col-md-6">
                <img style={{height:'600px', borderRadius:'10px'}} src={img} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;