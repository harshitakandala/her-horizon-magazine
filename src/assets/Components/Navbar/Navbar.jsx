import React from 'react'
import './Navbar.css'
import logo from "../../logo.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
