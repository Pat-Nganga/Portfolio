import React from 'react';
import './Footer.css'; // Apply your own styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} PatProDev</p>
        <p>Contact: wambuipatricia3@gmail.com</p>
        
      </div>
      
    </footer>
  );
}

export default Footer;
