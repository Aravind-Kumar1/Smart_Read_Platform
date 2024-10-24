import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { useAuth } from '../../../Authentication/AuthContext'; // Adjust the path as necessary
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">SMARTREAD</NavLink>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/ebooks" className={({ isActive }) => (isActive ? 'active' : '')}>E-Book</NavLink></li>
          <li><NavLink to="/audiobooks" className={({ isActive }) => (isActive ? 'active' : '')}>Audio Book</NavLink></li>
          <li><NavLink to="/podcasts" className={({ isActive }) => (isActive ? 'active' : '')}>Favourites</NavLink></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {user ? (
          <>
            <span className="profile-name">{user.email}</span> {/* Display user's email or name */}
            <button className="cta-button log-out" onClick={logout}>Log Out</button> {/* Logout button */}
          </>
        ) : (
          <>
            <NavLink to="/login" className="cta-button log-in">Log In</NavLink>
            <NavLink to="/signup" className="cta-button sign-up">Sign Up</NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
