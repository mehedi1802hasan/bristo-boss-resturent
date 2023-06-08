import React from 'react';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { loadStripe } from '@stripe/stripe-js';
import useCard from '../../../hook/useCard';

// TODO : provide publisable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
    const [card]= useCard();
    const total= card.reduce((sum,item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading='Please process' heading='Payment'></SectionTitle>
            <h4  className='mx-20 my-10'>taka o tk tomi oira oira asho</h4>
            <Elements stripe = {stripePromise}> <CheckOutForm price={price}></CheckOutForm> </Elements>
        </div>
    );
};

export default Payment;