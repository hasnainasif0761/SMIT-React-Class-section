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
import Dashboard, { Overview, Orders, Wishlist, Addresses, ProfileSettings } from '../pages/Dashboard.jsx'
import { SignedOut, useUser, SignedIn, UserProfile, RedirectToSignIn } from '@clerk/clerk-react';

function AppRoute() {
  const location = useLocation()
  const { isSignedIn } = useUser();
  const navigate = useNavigate()

  useEffect(()=>{
    if(isSignedIn && location.pathname === '/'){
      navigate('/dashboard')
    }
  },[isSignedIn,location,navigate])
  

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
          <Route path='profile' element={<ProfileSettings />} />
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