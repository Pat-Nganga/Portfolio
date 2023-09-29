import React from 'react'
import './navbar.css'
// import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        {/* <img src ={logo} alt='logo' className='logo'/> */}
        <div className='desktopMenu'>
        <a href="/" className='desktopMenuListItem'>Home</a>
        <a href="/about" className='desktopMenuListItem'>About</a>
        <a href="/portfolio" className='desktopMenuListItem'>Portfolio</a>
        <a href="/contact" className='desktopMenuListItem'>Contacts</a>    
   


        </div>
        {/* <button className='desktopMenuBtn'>
         <img src={contactImg} alt="" className='desktopMenuImg'/> Contact me </button> */}
    </nav>
  )
}

export default Navbar
