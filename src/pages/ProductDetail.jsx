import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import data from '../utils/productsCard'
import {NavLink} from 'react-router-dom'

// Import Icon React Icon library
import { IoIosArrowForward } from "react-icons/io";
import BroadCrumbs from './BroadCrumbs'



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
            <div className='w-full h-auto py-3 border flex gap-6 justify-center items-center'>
              <div className='w-[40%] h-auto border'>
                <div className='w-[95%] h-[400px] overflow-hidden mx-auto mt-2'>
                  <img src={product.image} alt="" className='w-full h-[50%] object-cover' />
                </div>
              </div>
              <div className='w-[40%] h-[550px] border'></div>
            </div>
          </div>
    </div>
  )
}

export default ProductDetail