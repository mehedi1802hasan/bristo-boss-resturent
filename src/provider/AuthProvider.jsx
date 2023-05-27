import React, { createContext, useState } from 'react';
import app from '../firebase/Firebase.config';
export const AuthContext=createContext(null)
import { getAuth } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const auth= getAuth(app)
    const authInfo={
          user,
         loading
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;