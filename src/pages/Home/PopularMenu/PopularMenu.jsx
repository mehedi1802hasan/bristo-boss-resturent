import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import useMenu from '../../../hook/useMenu';
const PopularMenu = () => {
  const [menu]=useMenu()
  const popularItem=menu.filter(item=>item.category === "popular")

    return (
        <div className='my-10'>
            <SectionTitle
            heading='From Our Menu'
            subHeading='Popular Items'
            ></SectionTitle>
            <div className='grid my-5 gap-14 md:grid-cols-2'>
            {
                popularItem.map(item=><MenuItem
                 key={item._id}
                 item={item}
                ></MenuItem>)
            }
            </div>
            <h3 className='py-4 uppercase border-b-4 w-72 '>Order your favourit food</h3>
        </div>
    );
};

export default PopularMenu;