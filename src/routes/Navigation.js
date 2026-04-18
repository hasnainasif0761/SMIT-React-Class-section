import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import HeroSection from '../pages/HeroSection'

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<HeroSection/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation