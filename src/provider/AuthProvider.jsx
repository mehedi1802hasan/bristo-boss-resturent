import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
export const AuthContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const auth= getAuth(app)

    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true)
  
const registration=(email,password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
}

const login=(email,password)=>{
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)

}
    const googleProvider = new GoogleAuthProvider();
    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const logOut=()=>{
        return signOut(auth)

    }
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log('auth changed',currentUser)
        })
        return()=>{
            return unsubcribe()
        }
    })
    const authInfo={
          user,
         loading,
         registration,
         login,
         googleLogin,
         logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;