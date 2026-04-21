import React from 'react'
import '../assets/css/Service.css'

import { TbTruckDelivery } from "react-icons/tb";
import { ShieldCheck } from 'lucide-react'
import { RefreshCw } from 'lucide-react'
import { LifeBuoy } from 'lucide-react'

function Service() {
  return (
    <div className='serviceCont grid border grid-cols-1 md:grid-cols-4 gap-2 px-7 pt-5'>
        <div className='serviceCard border flex h-[100px] justify-start items-center pl-3'>
            <div className='serviceIcon w-[80px] h-[50px] rounded-[10px] bg-[#E879F9]/[0.3]  flex items-center justify-center text-2xl'>
                <TbTruckDelivery className='text-[#E879F9]' />
            </div>
            <div className='serviceContent ml-3'>
                <h3 className='text-white font-semibold'>Free Shipping</h3>
                <p className='text-gray-500 font-[400] text-[14px]'>Free shipping on all order over $100. Express delivery available.</p>
            </div>
        </div>
        <div className='serviceCard border flex h-[100px] justify-start items-center pl-3'>
            <div className='serviceIcon w-[80px] h-[50px] rounded-[10px] bg-[#E879F9]/[0.3]  flex items-center justify-center text-2xl'>
                <ShieldCheck className='text-[#E879F9]' />
            </div>
            <div className='serviceContent ml-3'>
                <h3 className='text-white font-semibold'>Free Shipping</h3>
                <p className='text-gray-500 font-[400] text-[14px]'>Free shipping on all order over $100. Express delivery available.</p>
            </div>
        </div>
        <div className='serviceCard border flex h-[100px] justify-start items-center pl-3'>
            <div className='serviceIcon w-[80px] h-[50px] rounded-[10px] bg-[#E879F9]/[0.3]  flex items-center justify-center text-2xl'>
                <RefreshCw className='text-[#E879F9]' />
            </div>
            <div className='serviceContent ml-3'>
                <h3 className='text-white font-semibold'>Free Shipping</h3>
                <p className='text-gray-500 font-[400] text-[14px]'>Free shipping on all order over $100. Express delivery available.</p>
            </div>
        </div>
        <div className='serviceCard border flex h-[100px] justify-start items-center pl-3'>
            <div className='serviceIcon w-[80px] h-[50px] rounded-[10px] bg-[#E879F9]/[0.3]  flex items-center justify-center text-2xl'>
                <LifeBuoy className='text-[#E879F9]' />
            </div>
            <div className='serviceContent ml-3'>
                <h3 className='text-white font-semibold'>Free Shipping</h3>
                <p className='text-gray-500 font-[400] text-[14px]'>Free shipping on all order over $100. Express delivery available.</p>
            </div>
        </div>
    </div>
  )
}

export default Service