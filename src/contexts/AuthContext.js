import React, { createContext,useEffect } from 'react';

import {auth} from "../firebase.js"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children, firebaseFunctions }) => {
    const [currentUser,setCurrentUser]=React.useState()
    const[loading,setLoading]= React.useState(true)
    function login (email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout (){
        return auth.signOut
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
 useEffect(()=>{
const unsubscribe=auth.onAuthStateChanged(user=>{
   
    setCurrentUser(user)
     setLoading(false)
})
return unsubscribe

 }
 ,[])   
function signUp(email,password){
  return   auth.createUserWithEmailAndPassword(email,password)
}
function updateEmail(email){
return currentUser.updateEmail(email)
}
function updatePassword(password){
 return currentUser.updatePassword(password)   
}

    const value={
        currentUser,
        signUp,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            { !loading && children}
        </AuthContext.Provider>
    );
};

