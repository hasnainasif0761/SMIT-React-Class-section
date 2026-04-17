import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo-light.svg'

import { MdOutlineWbSunny } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

import '../assets/css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

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
  )
}

export default Navbar