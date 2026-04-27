import React from 'react'
import '../assets/css/Home.css'
import Button from './Button'
import Card from './Card'
import { FaArrowRight } from "react-icons/fa6";
import data from '../utils/productsCard';
import {Link} from 'react-router-dom'
import Breadcrumbs from './BroadCrumbs';



function ProductSection() {
  return (
    <div className='w-full h-auto py-3 bg-[#030712]'>
        <Breadcrumbs/>
        <div className='max-w-[1200px] w-full  h-auto py-3 mx-auto'>
            <div className='w-full  h-auto py-2 px-2  flex md:justify-between md:flex-row md:text-start text-center  flex-col justify-center items-center'>
                <div className='leading-[33px] ml-3'>
                <h1 className='text-white text-[35px] font-bold'>Featured Products</h1>
                <p className='text-gray-300 text-[18px]'>Discover our handpicked selection of trending items</p>
                </div>
                <div className='w-full md:w-auto flex justify-center mr-3'>
                    <Button title="View All Products" className='w-full md:w-[190px] max-w-[300px] border-none text-white text-[15px]' Icon={FaArrowRight} />
                </div>  
            </div>
            <div className='w-full h-auto  py-3 px-1 flex flex-wrap justify-center gap-3'>
                {
                    data.map((product,idx)=>{
                        return(
                        <Card id={product.id} title={product.title} price={product.price} delPrice={product.delPrice} category={product.category} image={product.image} color={product.color} />
                    )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ProductSection