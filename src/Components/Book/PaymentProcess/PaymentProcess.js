import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from '../CardForm/CardForm';

const stripePromise = loadStripe(
'pk_test_51IeCRmKDzA4S2Ag1McQOpyEJYaWTepmX8pGLeekGGG2Oa92SCqib8SAW4MYLdaL8wzM3yrSTOKlQxR32SLZCWEI100nFD2uJ8G'
    );
const PaymentProcess = () => {
    return (
    
     <Elements stripe={stripePromise}>
     <CardForm></CardForm>
    </Elements>
      
    );
};

export default PaymentProcess;