import React from 'react';

const FoodCard = ({item}) => {
    const {image,name,recipe,price}=item;
    return (
        <div className="card w-96 glass">
        <figure><img className='h-60' src={image} /></figure>
        <div className=" card-body">
          <h2 className="text-3xl font-bold card-title">{name}</h2>
          <p>{recipe}</p>
          <i className='font-bold'>$ {price}</i>
          <div className=" card-actions">
            <button className="border-0 border-b-4 border-red-600 btn btn-outline bg-slate-100">Order</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;