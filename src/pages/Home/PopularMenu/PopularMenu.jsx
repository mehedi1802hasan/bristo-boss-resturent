import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Components/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
fetch('menu.json')
.then(res=>res.json())
.then(data=>{
  
      const popularItem=data.filter(item=>item.category === "popular")
       setMenu(popularItem)
})
    },[])
    return (
        <div className='my-10'>
            <SectionTitle
            heading='From Our Menu'
            subHeading='Popular Items'
            ></SectionTitle>
            <div className='grid my-5 gap-14 md:grid-cols-2'>
            {
                menu.map(item=><MenuItem
                 key={item._id}
                 item={item}
                ></MenuItem>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;