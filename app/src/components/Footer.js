import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-content">
          <p className="footer-contact">Contact Us</p>
          <h1 className="footer-heading">Need Any Kind Of IT Solution For <span>Your Business?</span></h1>
          <button className="footer-button">Get In Touch</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
