import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../utils/productsCard'
// import {NavLink} from 'react-router-dom'

// Import Icon React Icon library
// import { IoIosArrowForward } from "react-icons/io";
import BroadCrumbs from './BroadCrumbs'
import { FaStar } from "react-icons/fa6";
// import { FaRegStar } from "react-icons/fa6";




function ProductDetail() {
    const  {id} = useParams()
    const product = data.find(item => item.id === id);
    console.log(product)
    const [selectedColor,setSelectedColor] = useState(product.color[0]);
    const [selectedSize,setSelectedSize] = useState(product.size[0]);
  return (
    <div className='w-full h-auto border '>
          <div className='w-full h-auto border-2  '>
            <div className='w-full py-3 border'>
              <BroadCrumbs/>
            </div>
            <div className='w-full h-auto py-3 border flex flex-col md:flex-row gap-1 justify-center items-center'>
              <div className='md:w-[45%] w-full h-auto border'>
                <div className='w-[95%] h-[450px] overflow-hidden mx-auto mt-2'>
                  <img src={product.image} alt={product.title} className='w-full h-full object-cover rounded-xl' />
                </div>
              </div>
              <div className='md:w-[50%] w-full h-[450px] border'>
                <div className="border py-2">
                  <h1 className='text-white ml-3 font-bold text-[30px] truncate max-w-[70%]'>{product.title}</h1>
                </div>
                <div className='border py-3 flex pl-2 gap-[7px]'>
                   {product.stars.map((starName, index) => (
                <FaStar key={index} className="text-yellow-400" />
                  ))}
                </div>
                <div className='border py-2'>
                  <p className='text-white ml-2 font-bold text-3xl'>{product.price}</p>
                </div>
                <div className='border py-2 pl-2'>
                  <p className="text-gray-400 max-w-[580px]">{product.description}</p>
                </div>
                <div className='border '>
                    <p className='ml-2 text-white font-semibold'>Colors</p>
                    <div className="border p-2 flex gap-2">
                      {product.color.map((colorName,idx)=>{
                        const isSelected = selectedColor === colorName;
                        return(
                      <div 
                          key={idx}
                          onClick={() => setSelectedColor(colorName)} // Click par state update hogi
                          className={`cursor-pointer transition-all duration-300 rounded-full border-2 flex items-center justify-center px-4 py-2 gap-3 
                            ${isSelected 
                              ? 'border-purple-500  shadow-[0_0_10px_rgba(168,85,247,0.4)]' // Selected Style
                              : 'border-gray-600 hover:border-gray-400 bg-transparent' // Default Style
                            }`}
                      >
                        <div className={`w-[15px] h-[15px] rounded-full border `} style={{background:colorName}}></div>
                        <p className='text-white'>{colorName}</p>
                      </div>
                        )
                      })}
                    </div>
                    <div className="border py-1">
                    <p className='ml-2 text-white font-semibold'>Size</p>
                    </div>
                    <div className="border p-2 flex gap-2">
                      {product.size.map((Size,idx)=>{
                        const sized = selectedSize === Size;
                        return(
                      <div 
                          key={idx}
                          onClick={() => setSelectedSize(Size)} // Click par state update hogi
                          className={`cursor-pointer transition-all duration-300 rounded-full border-2 flex items-center justify-center px-4 py-2 gap-3 
                            ${sized 
                              ? 'border-purple-500 bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.4)]' // Selected Style
                              : 'border-gray-600 hover:border-gray-400 bg-transparent' // Default Style
                            }`}
                      >
                        {/* <div className={`w-[15px] h-[15px] rounded-full border `} style={{background:colorName}}></div> */}
                        <p className='text-white'>{Size}</p>
                      </div>
                        )
                      })}
                    </div>
                    <div className='border p-2'>
                      <div className="border py-2"></div>
                      <div className="border py-2"></div>
                      <div className="border py-2"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductDetail