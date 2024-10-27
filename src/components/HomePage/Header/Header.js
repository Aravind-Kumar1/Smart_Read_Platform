import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../../Authentication/AuthContext'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './Header.css';

// Importing profile icon for default display
import { FaUserCircle } from 'react-icons/fa'; // FontAwesome profile icon (install if not already)

const Header = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Logout handler
  const handleLogout = async () => {
    await logout();
    toast.success('Successfully logged out!');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <NavLink to="/">SMARTREAD</NavLink>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/ebooks">E-Book</NavLink></li>
            <li><NavLink to="/audiobooks">Audio Book</NavLink></li>
            <li><NavLink to="/favorites">Favorites</NavLink></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {user ? (
            <>
              <div className="profile-section" onClick={toggleDropdown}>
                <FaUserCircle className="profile-icon" /> {/* Display the profile icon */}
                <span className="user-email">{user.email}</span> {/* Display user's email */}
              </div>
              {dropdownOpen && (
                <div className="dropdown-content" ref={dropdownRef}>
                  <NavLink to="/settings" className="dropdown-item">Settings</NavLink>
                  <button onClick={handleLogout} className="dropdown-item">Log Out</button>
                </div>
              )}
            </>
          ) : (
            <>
              <NavLink to="/login" className="cta-button log-in">Log In</NavLink>
              <NavLink to="/signup" className="cta-button sign-up">Sign Up</NavLink>
            </>
          )}
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default Header;
