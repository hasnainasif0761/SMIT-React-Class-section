import React from 'react'
import '../assets/css/Home.css'
import Navbar from './Navbar'
import Button from './Button'

const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <div className='homeCont'>
      <div className='heroContent'>
        <div className='hero-bage'>
          <p>Spring/Summer 2023 Collection</p>
        </div>
        <h2>Elevate Your <br/> <span style={{color:'#A21CAF'}}>Everyday Style</span></h2>
        <p className='para mt-3'>Discover curated collections of premium fashion and lifestyle products. Timeless designs crafted for the modern individual.</p>
        <div className='flex gap-3 mt-5'>
        <Button title="Shop Collection" />
        <Button title="Browse Categories" bg="#565a64c3" hover-Color="white"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroSection