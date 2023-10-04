import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
        <a href="/" className='desktopMenuListItem'>Home</a>
        <a href="/about" className='desktopMenuListItem'>About</a>
        <a href="/portfolio" className='desktopMenuListItem'>Portfolio</a>
        <a href="/contact" className='desktopMenuListItem'>Contacts</a>

        </div>
        
    </nav>
  )
}

export default Navbar
