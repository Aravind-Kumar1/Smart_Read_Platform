import React, { useState } from 'react';
import './LoginPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import logImage from '../../assets/login.jpg'; // Import the image

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h1>Welcome Back</h1>
          <p>New to SMARTREAD? <a href="/signup" className="create-account">Create an account</a></p>
          <p className="quote-text">"Books are now at your fingertips—dive into your next adventure from anywhere."</p>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email address" />
            </div>
            
            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Maybe try 'Open Sesame'?"
                />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            
            <div className="button-container">
              <button type="submit" className="signin-button">Sign In</button>
            </div>
          </form>
          <div className="quote">
            <p>"A room without books is like a body without a soul." – Cicero</p>
          </div>
        </div>
        <div className="login-image">
          <img src={logImage} alt="Books Background" /> {/* Use the imported variable here */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
