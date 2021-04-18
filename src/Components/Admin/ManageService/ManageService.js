import React, { useEffect, useState } from 'react';
import Services from '../../Home/Services/Services';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Manage from '../Manage/Manage';

const ManageService = () => {

    const [services, setServices] = useState([]);

  useEffect( ()=> {
      fetch('http://localhost:4400/services')
      .then(res => res.json())
      .then(data => setServices(data))
         
  }, [])
    return (
        <div >
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5"  style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3 className="text-brand mb-5">Our Total Service {services.length}</h3>
                <Manage services={services}></Manage>  
            </div>
       </div>
    );
};

export default ManageService;