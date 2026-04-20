import React from 'react'
import '../assets/css/Home.css'
import Button from './Button'
import { FaStar } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { Check } from 'lucide-react' ;


const HeroSection = () => {
  return (
    <>
    <div className='homeCont' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start'}}>
      <div className='heroContent' >
        <div className='hero-bage'>
          <p>Spring/Summer 2023 Collection</p>
        </div>
        <h2>Elevate Your <br/> <span style={{color:'#A21CAF'}}>Everyday Style</span></h2>
        <p className='para mt-3'>Discover curated collections of premium fashion and lifestyle products. Timeless designs crafted for the modern individual.</p>
        <div className='flex flex-col md:flex-row gap-3 mt-5'>
        <Button title="Shop Collection" icon="<FaArrowRight />" />
        <Button title="Browse Categories" bg="#565a64c3" hoverBg="#565a64fb"/>
        </div>
    </div>
    <div className="HeroClientReview">
    <div className='w-[100%] md:w-[60%] h-[100%]  flex items-end'>
    <div className='w-[38%] h-[95px]  pt-3 pl-4 '>
      <div className='border-r border-1 border-gray-400 flex flex-col items-start '>
      <h3 className='md:text-3xl text-2xl font-bold text-white'>50K+</h3>
      <p className='text-[16px] md:text-[17px] text-gray-400'>Happy Customers</p>
      </div>
    </div>
    <div className='w-[34%] h-[95px]  pt-3 md:pl-7 pl-4 '>
      <div className='border-r border-1 border-gray-400'>
            <h3 className='md:text-3xl text-2xl font-bold text-white flex items-center gap-2'>4.9K<FaStar className='text-lg text-yellow-400'/></h3>
      <p className='sm:text-[10px] md:text-[17px] text-gray-400'>Average Rating</p>
      </div>
    </div>
    <div className='w-[34%] h-[95px]  pt-3 pl-4 '>
      <div className='border-r-1 border-gray-400'>
            <h3 className='md:text-3xl text-2xl font-bold text-white'>500+</h3>
      <p className='sm:text-[10px] md:text-[17px] text-gray-400'>Premium Products</p>
      </div>
    </div>
    </div>
    <div className='hidden md:block w-[30%] ml-10 h-[200px] flex flex-col items-center justify-center pt-5 gap-5'>
      <div className='w-[90%] mx-[auto] mt-2 flex gap-2 items-center px-3 py-3 rounded-lg bg-[#373438]/[0.8] mb-2'>
          <div className='bg-[#59385A]/[0.6] text-[#E879F9] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
          <FiGift className='text-xl' />
          </div>
          <div className='leading-[19px]'>
            <h3 className='text-white font-semibold'>Free Shipping</h3>
            <p className=' text-[14px] text-gray-400'>on order over $100</p>
          </div>
      </div>
      <div className='w-[90%] mx-[auto] mt-2 flex gap-3 items-center px-3 py-3 rounded-lg bg-[#373438]/[0.8] mt-4'>
          <div className='bg-[#05DF72]/[0.4] text-[#05DF72] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
          <Check className='text-xl' />
          </div>
          <div className='leading-[19px]'>
            <h3 className='text-white font-semibold'>Secure Checkout</h3>
            <p className=' text-[14px] text-gray-400'>100% protected payment</p>
          </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default HeroSection