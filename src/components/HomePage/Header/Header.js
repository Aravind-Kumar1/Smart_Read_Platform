import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../../Authentication/AuthContext'; // Adjust the path as necessary
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import default styles
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
  const navigate = useNavigate(); // Initialize navigate
  const dropdownRef = useRef(null); // Create a reference for the dropdown

  // Logout handler
  const handleLogout = async () => {
    await logout(); // Call logout function
    toast.success('Successfully logged out!'); // Show toast message
    navigate('/login'); // Navigate to the login page after logging out
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Attach event listener
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
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/ebooks" className={({ isActive }) => (isActive ? 'active' : '')}>
                E-Book
              </NavLink>
            </li>
            <li>
              <NavLink to="/audiobooks" className={({ isActive }) => (isActive ? 'active' : '')}>
                Audio Book
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {user ? (
            <>
              <div className="profile-section" onClick={toggleDropdown}>
                <img src={user.photoURL} alt="Profile" className="profile-image" />
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
      <ToastContainer /> {/* Include ToastContainer for displaying toasts */}
    </>
  );
};

export default Header;
