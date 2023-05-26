import React from 'react';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import Cover from '../../../Components/Cover/Cover';
import { Link } from 'react-router-dom';
const MenuCategory= ({items,title,img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid my-5 gap-14 md:grid-cols-2'> 
            {
                items.map(item=><MenuItem
                 item={item}
                 key={item._id}
                ></MenuItem>)
            }
            </div>
            <Link to={`/order/${title}`}><button className='my-3 border-0 border-b-4 btn btn-outline'>Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;