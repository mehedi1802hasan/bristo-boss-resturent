import React from 'react';
import { Helmet } from 'react-helmet';
import useCard from '../../../hook/useCard';
const MyCard = () => {
    const [card]=useCard()
    //using reduce method for sum all price
    const total=card.reduce((sum,item)=>item.price + sum,0)
    return (
        <div>
            <Helmet>
            <title>Bistro | mycard</title>
          </Helmet> 
          <div className='flex uppercase'>
          <h4>My Card</h4>
            <h4>{card.length }</h4>
            <h3>Total Price:${total}</h3>
            <button className='btn btn-outline'>Pay</button>
          </div>
        </div>
    );
};

export default MyCard;