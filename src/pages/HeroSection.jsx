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
        <SwiperSlide>Slider no 1</SwiperSlide>
        <SwiperSlide>Slider no 2</SwiperSlide>
        <SwiperSlide>Slider no 3</SwiperSlide>
      </Swiper>  
    </>
  )
}

export default HeroSection