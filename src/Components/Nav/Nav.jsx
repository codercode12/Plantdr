import React from 'react'
import './Nav.css'
import logo from '../Assest/logo.svg';

function Nav(){
  return (
    <nav>
    <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Plantdr.</h1>
    </div>
    <ul className="navlinks">
      <li className="navlink">Home</li>
      <li className="navlink">About Us</li>
      <li className="navlink">Blog</li>
      <li className="navlink">Community</li>
      <li className="navlink">Testimonials</li>
      <li className="navlink">Contact Us</li>
    </ul>
    <div className="btns">
      <a href="" className='btn'>Get Started</a>
    </div>
    </nav>
  )
}

export default Nav