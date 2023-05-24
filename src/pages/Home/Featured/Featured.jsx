import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from "../../../../../bistro-boss-restaurant-resources/assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
    return (
        <div className='pt-4 my-20 bg-fixed featured-item'>
            <SectionTitle
            heading='Feature Item'
            subHeading='check it out'
            ></SectionTitle>
            <div className='items-center justify-center text-white bg-opacity-50 md:flex bg-slate-500' >
                <div><img className='w-9/12 my-10 ml-20 md:ml-28' src={featuredImg} alt="" /></div>
                <div className='gap-10 mr-5'>
                  <p  className='font-bold'>August 20,2023</p>
                  <p className='my-2 uppercase'>Where can i get some?</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sunt quibusdam quas in praesentium id corporis mollitia. Atque debitis quod adipisci necessitatibus nemo dolorum aliquam enim voluptate? Ipsa, delectus incidunt?</p>
                  <button className='my-3 border-0 border-b-4 btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;