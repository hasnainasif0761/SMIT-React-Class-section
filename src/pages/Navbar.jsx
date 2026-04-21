// import React from 'react'
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo-light.svg'

// Importing Icons from React Icon Library
import { MdOutlineWbSunny } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";


import '../assets/css/Navbar.css'

const Navbar = () => {
  const [openHam, setOpenHam] = useState(true)
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

  const toggleHam = () =>{
    setOpenHam(!openHam)
  }

  return (
    <>
    <nav className={`navbar fixed w-full top-0 left-0 z-50 ${isVisible ? 'translate-y-0':'translate-y-[-100%]'} transition-transform duration-300 ease-in-out`}>

      {/* LEFT (Mobile Menu + Logo) */}
      <div className="nav-left">
        {/* <HiOutlineMenu className="menu-icon" /> */}
        {openHam ? <HiOutlineMenu className='menu-icon' onClick={toggleHam} /> : <RxCross2 className='menu-icon' onClick={toggleHam} />}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      {/* CENTER MENU */}
      <ul className={`nav-links ${openHam ? 'left-[-100%]': 'left-[-0%]'}`}>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/category">Categories</Link></li>
        <li><Link to="/arrivals">New Arrivals</Link></li>
        <li><Link to="/sale">Sale</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
          <img src={logo} alt="logo" className='CenterLogo md:hidden' />
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