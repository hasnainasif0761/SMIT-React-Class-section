import React from 'react'
import '../assets/css/Home.css'
import Button from './Button'
import Card from './Card'

function ProductSection() {
  return (
    <div className='w-full h-auto py-3 bg-[#030712]'>
        <div className='max-w-[1200px] w-full  h-auto py-3 mx-auto'>
            <div className='w-full  h-auto py-2 px-2  flex md:justify-between md:flex-row md:text-start text-center  flex-col justify-center items-center'>
                <div className='leading-[33px]'>
                <h1 className='text-white text-[35px] font-bold'>Featured Products</h1>
                <p className='text-gray-300 text-[18px]'>Discover our handpicked selection of trending items</p>
                </div>
                <div className='w-full md:w-auto flex justify-center'>
                    <Button title="View All Products" className='w-full md:w-[190px] max-w-[300px] border-none text-white text-[15px]' />
                </div>  
            </div>
            <div className='w-full h-auto  py-3 px-1 flex flex-wrap justify-center gap-3'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  )
}

export default ProductSection