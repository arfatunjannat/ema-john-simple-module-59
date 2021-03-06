import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () =>{
     const [user,setUser]=useState({});

     const auth = getAuth()
     const googleProvider = new GoogleAuthProvider();

     const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
          // .then(result =>{
          //      console.log(result.user);
          // })
     }

     //----------------signOut---------

     const logOut = () =>{
        signOut(auth).then(() => {
            setUser({});
          });
          
     }
    
//---------------- observe whether user auth state change or not
     useEffect (()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
          
     } ,[]) 

     return{
        
        user,
        signInUsingGoogle,
        logOut
     }
}

export default useFirebase;