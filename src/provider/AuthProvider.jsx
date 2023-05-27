import React, { createContext, useState } from 'react';
import app from '../firebase/Firebase.config';
export const AuthContext=createContext(null)
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const auth= getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo={
          user,
         loading,
         googleLogin
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;