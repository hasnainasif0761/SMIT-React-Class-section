import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeProvider'
import PulseDote from './PulseDote'
import Card from '../pages/Card'
import ArrivalData from '../utils/ArrivalsCardData'
import { useNavigate } from 'react-router-dom'

function NewArrivals() {
  const {theme} = useContext(ThemeContext)
  const newArrivals = ArrivalData.slice(0,4)
  const navigate = useNavigate()

  function moveAnotherPage(){
    navigate('/product')
  }
  return (
    <div className={`cotainer border-orange-300 border p-2 ${theme === 'dark' ? 'bg-[#101828]' : 'bg-white'}`}>
      <div className='leading-[33px] md:ml-[113px] ml-0 md:mt-10 mt-5'>
        <div className='container p-2 flex items-center justify-start gap-2'>
          <PulseDote/>
          <p className='text-green-400 font-semibold'>Just Dropped</p>
        </div>
        <h1 className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'} text-[35px] font-bold`}>New Arrivals</h1>
        <p className='text-gray-400 text-[18px]'>Discover our handpicked selection of trending items</p>
      </div>
      <div className="flex max-w-[1280px] gap-4 mt-4 justify-center pt-2 flex-wrap mx-auto w-full">
      {
      newArrivals.map(data=>(
      <Card id={data.id} key={data.id} onclick={moveAnotherPage} title={data.title} category={data.category} image={data.img} price={data.price} color={data.color} />
      ))}
      </div>
    </div>
  )
}

export default NewArrivals