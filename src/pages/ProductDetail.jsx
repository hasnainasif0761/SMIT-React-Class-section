import React, { useState, useContext, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import data from '../utils/productsCard'
// import {NavLink} from 'react-router-dom'

// Import Icon React Icon library
// import { IoIosArrowForward } from "react-icons/io";
import BroadCrumbs from './BroadCrumbs'
import { BsHandbag } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import Button from './Button';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { ThemeContext } from '../Context/ThemeProvider';
import toast from 'react-hot-toast';
import { IoCartOutline } from "react-icons/io5";
import Swal from 'sweetalert2';

// import { FaRegStar } from "react-icons/fa6";




function ProductDetail() {
  const { id } = useParams()
  const product = data.find(item => item.id === id);
  console.log(product)
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const { theme,handleLike } = useContext(ThemeContext)
  // const [count, setCount] = useState(1)
  const [state, dispatch] = useReducer(quantityReducer, { count: 1 })


  function quantityReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
        break
      case 'DECREMENT':
        return { count: state.count > 1 ? state.count - 1 : 1 }
    }
  }

  function handleBuyNow(){
    alert('Product is Buy now please waiting...........')
  }

  // Hanle Like Functionality Function
  

  return (
    <div className='w-full h-auto border'>
      <div className='w-full h-auto border-2  '>
        <div className='w-full py-3 border'>
          <BroadCrumbs />
        </div>
        <div className='w-full h-auto py-3 border flex flex-col md:flex-row gap-1 justify-center items-center'>
          <div className='md:w-[45%] w-full h-auto border'>
            <div className='w-[95%] h-[450px] overflow-hidden mx-auto mt-2'>
              <img src={product.image} alt={product.title} className='w-full h-full object-cover rounded-xl' />
            </div>
          </div>
          <div className='md:w-[50%] w-full h-auto border'>
            <div className="border py-2">
              <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} ml-3 font-bold text-[30px] truncate max-w-[70%]`}>{product.title}</h1>
            </div>
            <div className='border py-3 flex pl-2 gap-[7px]'>
              {product.stars.map((starName, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
            <div className='border py-2'>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} ml-2 font-semibold text-3xl`}>{product.price} <del className='font-[400] text-gray-400 text-2xl'>{product.delPrice}</del></p>
            </div>
            <div className='border py-2 pl-2'>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-black'} font-medium max-w-[580px]`}>{product.description}</p>
            </div>
            <div className='border '>
              <p className={`ml-2 ${theme === 'dark' ? 'text-white' : 'text-black'} font-semibold`}>Colors</p>
              <div className="border p-2 flex gap-2">
                {product.color.map((colorName, idx) => {
                  const isSelected = selectedColor === colorName;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedColor(colorName)} // Click par state update hogi
                      className={`cursor-pointer transition-all duration-300 rounded-full border-2 flex items-center justify-center px-4 py-2 gap-3 
                            ${isSelected
                          ? 'border-purple-500  bg-purple-500/50  text-red-400 shadow-[0_0_10px_rgba(168,85,247,0.4)]' // Selected Style
                          : 'border-gray-600 hover:border-gray-400  bg-transparent' // Default Style
                        }`}
                    >
                      <div className={`w-[15px] h-[15px] rounded-full border-black border `} style={{ background: colorName }}></div>
                      <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{colorName}</p>
                    </div>
                  )
                })}
              </div>
              <div className="border py-1">
                <p className={`ml-2 ${theme === 'dark' ? 'text-white' : 'text-black'} font-semibold`}>Size</p>
              </div>
              <div className="border p-2 flex gap-2">
                {product.size.map((Size, idx) => {
                  const sized = selectedSize === Size;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedSize(Size)} // Click par state update hogi
                      className={`cursor-pointer transition-all duration-300 rounded-full border-2 flex items-center justify-center px-4 py-2 gap-3 
                            ${sized
                          ? 'border-purple-500 bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.4)]' // Selected Style
                          : 'border-gray-600 hover:border-gray-400 bg-transparent' // Default Style
                        }`}
                    >
                      {/* <div className={`w-[15px] h-[8px] rounded-full border `} style={{background:colorName}}></div> */}
                      <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{Size}</p>
                    </div>
                  )
                })}
              </div>
              <div className='border p-2 flex md:flex-row flex-col '>
                <div className="border p-2 md:w-[300px] w-full flex items-center justify-center">
                  <div
                    className={`md:w-[50px] w-[100px] h-[40px] border flex items-center justify-center
          ${state.count === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100/40 cursor-pointer'}`}
                    onClick={() => {
                      if (state.count > 1) dispatch({ type: 'DECREMENT' });
                    }}
                  >
                    <FaMinus className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                  </div>
                  <p className={`md:w-[60px] w-[100px] select-none  ${theme === 'dark' ? 'text-white' : 'text-black'}   h-[40px] border  flex justify-center items-center`}>{state.count}</p>
                  <div
                    className="md:w-[50px] w-[100px] h-[40px] border flex items-center justify-center cursor-pointer hover:bg-gray-100/40"
                    onClick={() => dispatch({ type: 'INCREMENT' })}
                  >
                    <FaPlus className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                  </div>
                </div>
                <div className='w-full flex'>
                  <div className="border p-2 container">
                    <Button title='Buy Now' onClick={handleBuyNow} className='w-[98%] text-white text-lg' Lefticon={IoCartOutline} iconClass={`text-xl`}  />
                  </div>
                  <div className="border p-2 container w-[100px] flex justify-center items-center">
                    <Button Icon={BsHandbag} iconClass={`text-white text-2xl`} onClick={()=>handleLike(id)} className={'px-3 py-1'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail