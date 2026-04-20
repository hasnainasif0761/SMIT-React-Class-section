// import React from 'react'
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo-light.svg'

import { MdOutlineWbSunny } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

import '../assets/css/Navbar.css'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(()=>{
    const controlNavbar = () =>{
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY && currentScrollY > 100){
        setIsVisible(false)
      }else{
        setIsVisible(true)
      }

      if(currentScrollY < 50){
        setIsAtTop(true)
      }else{
        setIsAtTop(false)
      }
      setLastScrollY(currentScrollY);
    }
    window.addEventListener('scroll', controlNavbar);
    return ()=>{
      window.removeEventListener('scroll',controlNavbar);
    }
  },[lastScrollY])
  return (
    <>
    <nav className={`navbar fixed w-full top-0 left-0 z-50 ${isVisible ? 'translate-y-0':'translate-y-[-100%]'} transition-transform duration-300 ease-in-out`}>

      {/* LEFT (Mobile Menu + Logo) */}
      <div className="nav-left">
        <HiOutlineMenu className="menu-icon" />

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      {/* CENTER MENU */}
      <ul className="nav-links">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/category">Categories</Link></li>
        <li><Link to="/arrivals">New Arrivals</Link></li>
        <li><Link to="/sale">Sale</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
          <img src={logo} alt="logo" className='CenterLogo' />
      {/* RIGHT ICONS */}
      <div className="nav-icons">
        <IoSearchOutline />
        <MdOutlineWbSunny />
        <FaRegUser />

        <div className="cart">
          <IoBagOutline />
          <span className="badge">3</span>
        </div>
      </div>

    </nav>
    </>
  )
}

export default Navbar