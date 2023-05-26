import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTabs = ({items}) => {
    return (
        <div className='grid gap-10 md:grid-cols-3'>
            {
                items.map(item=><FoodCard
                key={item._id}
                item={item}></FoodCard> )
            }
        </div>
    );
};

export default OrderTabs;