import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../utils/productsCard'
// import {NavLink} from 'react-router-dom'

// Import Icon React Icon library
// import { IoIosArrowForward } from "react-icons/io";
import BroadCrumbs from './BroadCrumbs'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";




function ProductDetail() {
    const  {id} = useParams()
    const product = data.find(item => item.id === id);
    console.log(product)
  return (
    <div className='w-full h-auto border '>
          <div className='w-full h-auto border-2  '>
            <div className='w-full py-3 border'>
              <BroadCrumbs/>
            </div>
            <div className='w-full h-auto py-3 border flex flex-col md:flex-row gap-1 justify-center items-center'>
              <div className='md:w-[45%] h-auto border'>
                <div className='w-[95%] h-[450px] overflow-hidden mx-auto mt-2'>
                  <img src={product.image} alt={product.title} className='w-full h-full object-cover rounded-xl' />
                </div>
              </div>
              <div className='md:w-[40%] w-full h-[450px] border'>
                <div className="border py-2">
                  <h1 className='text-white ml-3 font-bold text-[30px] truncate max-w-[70%]'>{product.title}</h1>
                </div>
                <div className='border py-3 flex pl-2 gap-[7px]'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-gray-400' />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductDetail