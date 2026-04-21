import React from 'react'
import '../assets/css/Service.css'

import { TbTruckDelivery } from "react-icons/tb";


function Service() {
  return (
    <div className='serviceCont'>
        <div className='serviceCard'>
            <div className='serviceIcon'>
                <TbTruckDelivery className='text-white rotate-210' />
            </div>
            <div className='serviceContent'></div>
        </div>
    </div>
  )
}

export default Service