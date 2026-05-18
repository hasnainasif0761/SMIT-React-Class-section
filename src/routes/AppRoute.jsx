import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import HeroSection from '../pages/HeroSection';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProductLayout from '../pages/ProductLayout';
import ProductSection from '../pages/ProductSection';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../pages/Navbar';

import { SignedOut, useUser, SignedIn, UserProfile, RedirectToSignIn } from '@clerk/clerk-react';
import Dashboard from '../pages/Dashboard';
import Overview from '../pages/dashboard/Overview';
import Orders from '../pages/dashboard/Orders';
import Wishlist from '../pages/dashboard/Wishlist';
import Addresses from '../pages/dashboard/Addresses';
import Settings from '../pages/dashboard/Setting';

function AppRoute() {
  const location = useLocation()
  const { isSignedIn } = useUser();
  const navigate = useNavigate()

  useEffect(()=>{
    if(isSignedIn && location.pathname === '/'){
      navigate('/dashboard')
    }
  },[isSignedIn,location,navigate])
  

    const showNavbar = 
    location.pathname === '/' ||
    location.pathname === '/about' ||
    location.pathname === '/shop' ||
    location.pathname === '/contact' ||
    location.pathname.startsWith('/product/productdetail/')

  
  return (
    <>
    {showNavbar && <Navbar/>}
        <Routes>
            <Route path='*' element={<PageNotFound/>} />
            <Route path='/' element={<HeroSection/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
             <Route path='/dashboard' element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }>
            <Route index element={<Overview />} />
          <Route path='orders' element={<Orders />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='addresses' element={<Addresses />} />
          <Route path='settings' element={<Settings />} />
          </Route>
            <Route path='/product' element={<ProductLayout/>}>
              <Route index element={<ProductSection/>} />
              <Route path='productdetail/:id' element={<ProductDetail/>} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoute