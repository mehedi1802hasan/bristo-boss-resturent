import React from 'react';

const FoodCard = ({item}) => {
    const {image,name,recipe,price}=item;
    return (
        <div className="card w-96 glass">
        <figure><img class="w-72 " src={image} /></figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold card-title">{name}</h2>
          <p>{recipe}</p>
          <i className='font-bold'>$ {price}</i>
          <div className=" card-actions">
            <button className="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;