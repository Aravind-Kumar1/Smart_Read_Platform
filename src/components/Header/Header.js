import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">SMARTREAD</div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#ebook">E-Book</a></li>
        <li><a href="#audiobook">Audio Book</a></li>
        <li><a href="#podcast">Podcast</a></li>
      </ul>
    </nav>
    <div className="auth-buttons">
      <button className="cta-button log-in">Log In</button>
      <button className="cta-button sign-up">Sign Up</button>
    </div>
  </header>
);

export default Header;
