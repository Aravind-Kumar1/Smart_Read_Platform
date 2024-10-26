import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/firebase"; 
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; 
import './SignInWIthGoogle.css'; 
import 'react-toastify/dist/ReactToastify.css';

function SignGoogle() {
  const navigate = useNavigate(); 

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });

        // Show success message
        toast.success("You have registered and logged in successfully!", {
          position: "top-center",
        });

        navigate("/"); // Ensure this is the correct path
      }
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        toast.warn("Sign-in popup was closed. Please try again.", {
          position: "bottom-center",
        });
      } else {
        console.error("Error during Google Sign-In:", error.message);
        toast.error("Google Sign-In failed: " + error.message, {
          position: "bottom-center",
        });
      }
    }
  };

  return (
    <div className="google-signin-btn" onClick={googleLogin}>
      <img
        src={require("../../assets/google.png")} 
        width={"30px"}
        alt="Google Sign In"
      />
      <span className="google-text">Sign In with Google</span>
    </div>
  );
}

export default SignGoogle;  
