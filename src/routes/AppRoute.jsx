import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import HeroSection from '../pages/HeroSection';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProductLayout from '../pages/ProductLayout';
import ProductSection from '../pages/ProductSection';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../pages/Navbar';

function AppRoute() {
  const location = useLocation()

  const hideNavbarRoutes = ['/login','/register','/forget-password'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)
  return (
    <>
    {!shouldHideNavbar && <Navbar/>}
        <Routes>
            <Route path='*' element={<PageNotFound/>} />
            <Route path='/' element={<HeroSection/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product' element={<ProductLayout/>}>
              <Route index element={<ProductSection/>} />
              <Route path='productdetail/:id' element={<ProductDetail/>} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoute