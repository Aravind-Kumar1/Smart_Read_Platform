import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/firebase"; // Ensure this is your correct firebase config
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer for displaying toasts
import { useNavigate } from "react-router-dom";
import './SignUpPage.css';
import 'react-toastify/dist/ReactToastify.css';

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !fname || !lname) {
      toast.error("Please fill all required fields!", { position: "top-center" });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, "SmartData", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
        photo: "" // Can be updated later if needed
      });

      toast.success("User Registered Successfully! Redirecting to Login...", { 
        position: "top-center",
        autoClose: 3000, // Auto close after 3 seconds
        onClose: () => navigate("/login") // Redirect to login on close
      });
      console.log("User Registered Successfully!");

    } catch (error) {
      // Log error message to console for debugging
      console.error("Error during registration:", error.message);
      toast.error(`Registration failed: ${error.message}`, { position: "bottom-center" });
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleRegister} className="signup-form">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Login</a>
        </p>
      </form>
      <ToastContainer /> {/* Add ToastContainer to the component */}
    </div>
  );
}

export default SignUpPage;
