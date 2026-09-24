import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from "../logo.png"
const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/article/PanditaRamabai">Article</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
