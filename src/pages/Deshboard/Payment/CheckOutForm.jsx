import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../../../hook/useAxiosSecure';
const CheckOutForm = ({ price }) => {
    const {user}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    useEffect(()=>{
 axiosSecure.post('/create-payment-intent', {price})
 .then(res =>{
    console.log( res.data.clientSecret);
    setClientSecret(res.data.clientSecret);
 }) 
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            //  console.log('carddddddd')
            return;
        }

        console.log("....card....", card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError('')

            console.log('payment method..', paymentMethod)
        }

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'unknown'
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError)
          //  setCardError('')
          }

          console.log(paymentIntent)
    }
    return (
        <div className='mx-20'>
            <p className='text-green-500 font-serif my-10'>Amount: {price}USD</p>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-5 btn btn-primary btn-sm' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
        </div>
    );
};

export default CheckOutForm;