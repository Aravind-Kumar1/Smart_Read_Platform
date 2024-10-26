  // src/firebase/firebase.js
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

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

  // Initialize Firebase Authentication and Firestore
  export const auth = getAuth(app); // Pass app to getAuth for better practice
  export const db = getFirestore(app);

  export default app;
