import React from 'react';

const BookingData = ({orders}) => {
    return (
        <div  className="d-flex justify-content-center" >
            
            {
                orders.map(order => <div style={{margin:'5px', width:'30%'}}>   <h5>{order.book.name}</h5>  
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, architecto</p></div>)
            }
       
        </div>
    );
};

export default BookingData;