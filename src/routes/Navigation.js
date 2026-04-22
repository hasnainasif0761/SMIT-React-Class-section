import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import HeroSection from '../pages/HeroSection'
import PageNotFound from '../pages/PageNotFound'

const Navigation = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='*' element={<PageNotFound/>} />
            <Route path='/' element={<HeroSection/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation