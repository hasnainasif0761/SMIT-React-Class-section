import React from 'react'
import categoryData from '../utils/CatgoryCardData'
import { FaArrowRight } from "react-icons/fa6";

function CategoryCard() {
  return (
    <>
       <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-rows-[200px_200px_200px] gap-4 md:gap-6 auto-rows-[200px] md:mt-10 mt-5 mb:px-0 px-5'>
           {categoryData.map((cat)=>(
            <div className={`relative rounded-2xl overflow-hidden group cursor-pointer ${cat.span}`}>
                <img src={cat.img} alt={cat.title}
                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500`}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                <div className="absolute bottom-0 left-0 p-5 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">{cat.title}</h3>
                    <p className="text-sm text-gray-200 mt-1">{cat.products}</p>
                    <button className='flex items-center  justify-center opacity-0 group-hover:opacity-100  mt-1 transition-all duration-300'>Shop <FaArrowRight className='font-[500] mt-1 ml-2 group-hover:ml-3  transition-all duration-300'/></button>
                </div>
          {/* </div> */}
            </div>
           ))}            
       </div>
    </>
  )
}

export default CategoryCard