// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyDMrJqgvL65UhOeZFaSE__vSXuvTE4qbBQ",
  authDomain: "smart-read-b0575.firebaseapp.com",
  projectId: "smart-read-b0575",
  storageBucket: "smart-read-b0575.appspot.com",
  messagingSenderId: "657084435503",
  appId: "1:657084435503:web:f2c818fa80193fba678ada"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication, Firestore, and Storage
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize and export Firebase Storage

export default app;
