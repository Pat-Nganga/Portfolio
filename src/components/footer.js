import React from 'react';
import './footer.css'; // Apply your own styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} PatProDev</p>
        <p>Contact: wambuipatricia3@gmail.com</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
