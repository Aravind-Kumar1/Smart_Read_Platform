import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link styles
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <NavLink to="/">SMARTREAD</NavLink> {/* Make logo a link to the homepage */}
    </div>
    <nav>
      <ul>
        <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/ebooks" className={({ isActive }) => (isActive ? 'active' : '')}>E-Book</NavLink></li>
        <li><NavLink to="/audiobooks" className={({ isActive }) => (isActive ? 'active' : '')}>Audio Book</NavLink></li>
        <li><NavLink to="/podcasts" className={({ isActive }) => (isActive ? 'active' : '')}>Podcast</NavLink></li>
      </ul>
    </nav>
    <div className="auth-buttons">
      <NavLink to="/login" className="cta-button log-in">Log In</NavLink> {/* Changed to NavLink */}
      <NavLink to="/signup" className="cta-button sign-up">Sign Up</NavLink> {/* Changed to NavLink */}
    </div>
  </header>
);

export default Header;
