import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useCard from '../../../hook/useCard';
import Swal from 'sweetalert2';
const CheckOutForm = ( {price }) => {
    const [card]=useCard();
    const {user}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
   const [processing,setProcessing]=useState(false)
   const [transactionId,setTrasactionId]=useState('') 
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

           //todo
        }
          setProcessing(true);
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

          console.log('payment intent...',paymentIntent)
         setProcessing(false)
          if(paymentIntent.status ==='succeeded'){
           setTrasactionId(paymentIntent.id)
          //Todo next steps
           // const transactionId =paymentIntent.id;
           const payment ={
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            quantity: card.length,
            date: new Date(),
         //  items: card.map((item)=>item._id),
           //itemNames: card.map((item)=>item.name)
           }
           axiosSecure.post('/payments',payment)
           .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successfully ! payment information added in the mongodb ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
           })
           
          }          
        }
    return (
        <div className='mx-20'>
            <p className='my-10 font-serif text-green-500'>Amount: {price}USD</p>

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
                <button className='mt-5 btn btn-primary btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
           {transactionId && <p className='text-green-500'>Transaction completed with transactionId: {transactionId}</p> }
        </div>
    );
};

export default CheckOutForm;
