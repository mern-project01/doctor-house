import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "./../../firebase/Firebase.init";
export const AuthContex = createContext({});
const UserContex = ({ children }) => {
  // for loing  user 
  const [User, setUser] = useState();
  // login user error
  const [Err, setError] = useState();
  // for auth login 
  const auth = getAuth(app);
  // for firbase google provider
  const googleProvider = new GoogleAuthProvider();
  const handleGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
// sendign data other componets
  const UserInfo = { User, Err, setUser, setError, handleGoogle };
  return <AuthContex.Provider value={UserInfo}>{children}</AuthContex.Provider>;
};

export default UserContex;
