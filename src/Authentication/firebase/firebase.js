// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Function to get categories with books from Firestore
export const fetchCategories = async () => {
  const categoriesCollection = collection(db, "categories");
  const categoriesSnapshot = await getDocs(categoriesCollection);
  const categoriesData = {};
  
  categoriesSnapshot.forEach(doc => {
    categoriesData[doc.id] = doc.data().books;
  });
  
  return categoriesData;
};

export default app;
