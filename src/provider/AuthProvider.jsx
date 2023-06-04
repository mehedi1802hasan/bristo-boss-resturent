import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
export const AuthContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

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
   const updateUserProfile=(name,photo)=>{
    return  updateProfile(auth.currentUser,{
       displayName: name, photoURL: photo
     })
    
   }

    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log('auth changed',currentUser)
            if(currentUser){
                axios.post('http://localhost:3000/jwt',{ email: currentUser.email})
                    .then(data=>{
                        console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token)
                    })
            
            }
            else{
                localStorage.removeItem('access-token')
            }
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
         logOut,
        updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;