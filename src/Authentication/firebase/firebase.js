

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8mscN7kLNZzN01rBpjw_eCKhnvQ_F_EU",
  authDomain: "final-log-96f70.firebaseapp.com",
  projectId: "final-log-96f70",
  storageBucket: "final-log-96f70.appspot.com",
  messagingSenderId: "486409562130",
  appId: "1:486409562130:web:3ef89aa18ebc4fe8c390cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;