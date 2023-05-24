import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from '../../../../../bistro-boss-restaurant-resources/assets/home/slide1.jpg';
import img2 from '../../../../../bistro-boss-restaurant-resources/assets/home/slide2.jpg';
import img3 from '../../../../../bistro-boss-restaurant-resources/assets/home/slide3.jpg';
import img4 from '../../../../../bistro-boss-restaurant-resources/assets/home/slide4.jpg';
import img5 from '../../../../../bistro-boss-restaurant-resources/assets/home/slide5.jpg';

const Category = () => {
    
    return (
    <section>
      <SectionTitle
      heading={'Order Online'}
      subHeading={'From 11:00 am to 10:00 pm '}
      >
        
      </SectionTitle>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
     
        <SwiperSlide><img src={img1}></img>
        <h3 className='-mt-20 text-3xl text-center text-white uppercase'>Salad</h3>
        </SwiperSlide>

        <SwiperSlide><img src={img2}></img>
        <h3 className='-mt-20 text-3xl text-center text-white uppercase'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img3}></img>
        <h3 className='-mt-20 text-3xl text-center text-white uppercase'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img4}></img>
        <h3 className='-mt-20 text-3xl text-center text-white uppercase'>Dessart</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img5}></img>
        <h3 className='-mt-20 text-3xl text-center text-white uppercase'>Salad</h3>
        </SwiperSlide>
       
        
      </Swiper>
      </section>
    );
};

export default Category;