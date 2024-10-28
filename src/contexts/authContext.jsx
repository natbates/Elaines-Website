// src/contexts/AuthContext.js
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from '../firebaseConfig'; // Import Firestore
import { doc, getDoc, setDoc } from "firebase/firestore"; // Import Firestore functions

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("setting user");
      setCurrentUser(user);

      if (user) {
        // Reference to the user's document in Firestore
        const userDocRef = doc(db, "userDetails", user.uid);
        const userSnapshot = await getDoc(userDocRef);
        
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          // Check for the profilePicture field
          if (userData.profilePicture !== undefined) {
            setProfilePicture(userData.profilePicture);
          } else {
            // If the profilePicture doesn't exist, set it to null and update Firestore
            setProfilePicture(null);
            await setDoc(userDocRef, { profilePicture: null }, { merge: true }); // Merge to create profilePicture field if it doesn't exist
          }
        } else {
          console.log("No user details found for this user.");
          // If the user document doesn't exist, create it with default values
          await setDoc(userDocRef, { profilePicture: null }); // Create with profilePicture set to null
          setProfilePicture(null); // Set state to null
        }
      } else {
        setProfilePicture(null); // No user logged in
      }

      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    profilePicture, // Provide the profile picture in the context
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
