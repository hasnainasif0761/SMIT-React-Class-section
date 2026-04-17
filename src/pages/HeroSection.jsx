import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination'

import '../App.css'

import { Pagination } from 'swiper/modules';

const HeroSection = () => {
  return (
    <>
      <Swiper
      pagination={{
        dynamicBullets:true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slider no 2</SwiperSlide>
        <SwiperSlide>Slider no 3</SwiperSlide>
      </Swiper>  
    </>
  )
}

export default HeroSection