import React from 'react';

const MenuItem = ({item}) => {
    const {image,name,recipe,price}=item;
    return (
        <div className='flex gap-10'>
           
      <img style={{borderRadius:'0 200px 200px 200px'}} className='w-28' src={image}alt="aaa" />
       
        <div>
        <p className='font-bold uppercase'>{name}---------</p>    
           <h3> Racipies: {recipe}</h3>    
        </div>
        <div>
            <p className='text-red-500'>$ {price}</p>
        </div>
        </div>
    );
};

export default MenuItem;