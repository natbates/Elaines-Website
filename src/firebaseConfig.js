// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB7XEC-DdI0FRttaNsc60iN306-dT8xKg0",
  authDomain: "elaineportfolio-1220e.firebaseapp.com",
  projectId: "elaineportfolio-1220e",
  storageBucket: "elaineportfolio-1220e.appspot.com",
  messagingSenderId: "677179180965",
  appId: "1:677179180965:web:522d869100a9c5d3558a4c",
  measurementId: "G-7ZMHTF9CZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore
export const storage = getStorage(app);