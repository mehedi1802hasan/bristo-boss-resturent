import React from 'react';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import Cover from '../../../Components/Cover/Cover';

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
        </div>
    );
};

export default MenuCategory;