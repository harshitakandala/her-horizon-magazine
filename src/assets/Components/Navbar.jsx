import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import logo from "../logo.png"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className='navbar'>
        <img src={logo} alt="logo" className='logo' onClick={() => navigate('/')}/>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
