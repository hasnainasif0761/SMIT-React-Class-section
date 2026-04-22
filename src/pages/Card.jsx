import React from 'react'
import Button from './Button'

function Card() {
  return (
    <div className='md:w-[285px] w-full h-[400px] border group relative'>
        <div className='w-full h-[300px] border-2 relative overflow-hidden'>
            <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop" alt='Product Image' className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 absolute top-0'/>
            <Button className="absolute top-2 left-2 z-50 bg-red-500 text-white px-3 py-1" />
        </div>
    </div>
  )
}

export default Card