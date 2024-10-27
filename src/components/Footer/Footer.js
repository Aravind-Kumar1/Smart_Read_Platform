import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#ebooks">E-Books</a></li>
            <li><a href="#audiobooks">Audio Books</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <h4 className="footer-heading">Contact Us</h4>
          <p>Email: <a href="mailto:info@smartread.com">info@smartread.com</a></p>
          <p>Phone: <a href="tel:+15551234567">+91 8897552876</a></p>
          <p>Location: Jubliee Hills, Film Nagar, 500033</p>
        </div>
        <div className="footer-social">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SmartRead. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
