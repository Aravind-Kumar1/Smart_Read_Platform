import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/firebase"; // Ensure this path is correct
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './SignInWIthGoogle.css'; 

function SignGoogle() {
  const navigate = useNavigate(); // Initialize navigate

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        // Save user data to Firestore
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "", // You may want to collect last name if applicable
        });

        // Successful login
        toast.success("User logged in successfully", {
          position: "top-center",
        });

        // Navigate to the hero section page after successful login
        navigate("/"); // Ensure this is the correct path
      }
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        toast.warn("Sign-in popup was closed. Please try again.", {
          position: "bottom-center",
        });
      } else {
        console.error("Error during Google Sign-In:", error.message);
        toast.error("Google Sign-In failed. Please try again.", {
          position: "bottom-center",
        });
      }
    }
  };

  return (
    <div className="google-signin-btn" onClick={googleLogin}>
      <img
        src={require("../../assets/google.png")} // Ensure the path to your Google image is correct
        width={"30px"}
        alt="Google Sign In"
      />
      <span className="google-text">Sign In with Google</span>
    </div>
  );
}

export default SignGoogle;
