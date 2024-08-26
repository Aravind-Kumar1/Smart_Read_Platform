import React, { useState } from 'react';
import './SignUpPage.css'; // Import the SignUpPage CSS
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import signUpImage from '../../assets/signup.jpg'; // Import the signup image

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form">
          <h1>Join Us</h1>
          <p>Already have an account? <a href="/login" className="create-account">Log In</a></p>
          <p className="quote-text">"Start your journey with us—where every story begins."</p>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email address" />
            </div>

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Choose a username" />
            </div>

            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm your password" />
            </div>

            <div className="button-container">
              <button type="submit" className="signup-button">Sign Up</button>
            </div>
          </form>
          <div className="quote">
            <p>"A new chapter begins with every page you turn."</p>
          </div>
        </div>
        <div className="signup-image">
          <img src={signUpImage} alt="Join Us Background" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
