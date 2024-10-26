import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { toast, ToastContainer } from "react-toastify"; 
import SignGoogle from '../SignInWIthGoogle/SignGoogle'; 
import { useNavigate } from "react-router-dom"; 
import './LoginPage.css';    
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../assets/smart.png';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate("/"); 
      toast.success("You have logged in successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Login failed: " + error.message, {
        position: "bottom-center",
      });
    }
  };

  const handleRegisterNow = () => {
    navigate("/signup");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={logo} alt="SmartRead Logo" className="logo" /> 
        <h3 className="login-title">Welcome Back to SmartRead!</h3>
        <p className="login-subtitle">Discover a world of knowledge at your fingertips</p>
        
        <div className="google-signin">
          <SignGoogle />
        </div>
        
        <p className="or-continue-text">Or continue with email</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-3">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary1">
              Log In
            </button>
          </div>
        </form>
        
        <div className="register-now">
          <p className="register-text">Don't have an account?</p>
          <button type="button" className="btn btn-link" onClick={handleRegisterNow}>
            Register Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;  
