import React from 'react'
import '../assets/css/Home.css'
import Button from './Button'

const HeroSection = () => {
  return (
    <>
    <div className='homeCont' style={{border:'1px solid red',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start'}}>
      <div className='heroContent' style={{border:'1px solid red'}}>
        <div className='hero-bage'>
          <p>Spring/Summer 2023 Collection</p>
        </div>
        <h2>Elevate Your <br/> <span style={{color:'#A21CAF'}}>Everyday Style</span></h2>
        <p className='para mt-3'>Discover curated collections of premium fashion and lifestyle products. Timeless designs crafted for the modern individual.</p>
        <div className='flex flex-col md:flex-row gap-3 mt-5'>
        <Button title="Shop Collection" />
        <Button title="Browse Categories" bg="#565a64c3" hoverBg="#565a64fb"/>
        </div>
    </div>
    <div className="HeroClientReview">

    </div>
    </div>
    </>
  )
}

export default HeroSection