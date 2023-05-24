import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <div>
            <SectionTitle
            heading={'Testimonial'}
            subHeading={'What Our Client Say'}
            ></SectionTitle>
            <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review=>
                    <SwiperSlide
                    key={review._id}           
                    >  
                        <div className='flex flex-col items-center mx-20 my-16'>
                        <Rating
                          style={{ maxWidth: 180 }}
                          value={review.rating}
                          readOnly
                         />
                      
                        <img className='my-4 w-14' src="https://cdn-icons-png.flaticon.com/128/56/56937.png" alt="" />
                            <p className='my-4'> {review.details}</p>
                            <p className='text-3xl font-bold text-orange-500'>{review.name}</p>
                        </div>
                  </SwiperSlide>
       
     
                        )
                }
    </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;