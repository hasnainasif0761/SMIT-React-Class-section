// import React from 'react'
import React, { useContext, useEffect,useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo-light.svg'
import BlackLogo from '../assets/image/black-logo.png'

// Importing Icons from React Icon Library
import { MdOutlineWbSunny } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaMoon } from "react-icons/fa6";

import '../assets/css/Navbar.css'
import { ThemeContext } from '../Context/ThemeProvider';



const Navbar = () => {
  const [openHam, setOpenHam] = useState(true)
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const {theme,setTheme,ChangeTheme} = useContext(ThemeContext)


  console.log(theme)
  useEffect(()=>{
    const controlNavbar = () =>{
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY && currentScrollY > 100){
        setIsVisible(false)
      }else{
        setIsVisible(true)
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

  const handleSearch = () =>{
    alert('Your Search this Product')
  }

  const handleUser = () =>{
    alert('Redirection...... this Profile')
  }



  return (
    <>
    <nav className={`navbar fixed w-full top-0 left-0 z-50 ${theme === 'dark' ? 'bg-[#020817]' : 'bg-white'} ${isVisible ? 'translate-y-0':'translate-y-[-100%]'} transition-transform duration-300 ease-in-out`}>

      {/* LEFT (Mobile Menu + Logo) */}
      <div className="nav-left">
        {/* <HiOutlineMenu className="menu-icon" /> */}
        {openHam ? <HiOutlineMenu className='menu-icon' onClick={toggleHam} /> : <RxCross2 className='menu-icon' onClick={toggleHam} />}
        <div className="logo">
          <Link to={'/'}>
          <img src={theme === 'dark' ? logo : BlackLogo} alt="logo" />
          </Link>
        </div>
      </div>

      {/* CENTER MENU */}
      <ul className={`nav-links ${openHam ? 'left-[-100%]': 'left-[-0%]'}`}>
        <li className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`}><Link to="/shop">Shop</Link></li>
        <li className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`}><Link to="/category">Categories</Link></li>
        <li className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`}><Link to="/arrivals">New Arrivals</Link></li>
        <li className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`}><Link to="/sale">Sale</Link></li>
        <li className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`}><Link to="/about">About</Link></li>
      </ul>
          <img src={logo} alt="logo" className='CenterLogo md:hidden' />
      {/* RIGHT ICONS */}
      <div className="nav-icons">
        {/* <MdOutlineWbSunny /> */}
        <button onClick={handleSearch}>
        <IoSearchOutline className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`} />
        </button>
        <button onClick={ChangeTheme}>
        {theme === 'dark'  ? <FaMoon className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`}/> : <MdOutlineWbSunny className={`${theme === 'dark'  ? 'text-[#cbd5f5]' : 'text-black'}`} /> }
        </button>
        <button onClick={handleUser}>
        <FaRegUser className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`} />
        </button>
        {/* <MdOutlineWbSunny /> */}

        <div className="cart">
          <IoBagOutline className={`${theme === 'dark' ? 'text-[#cbd5f5]' : 'text-black'}`} />
          <span className="badge">3</span>
        </div>
      </div>

    </nav>
    </>
  )
}

export default Navbar