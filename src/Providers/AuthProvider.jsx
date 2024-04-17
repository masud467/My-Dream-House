import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Components/Firebase/Firebase.config";

 export const AuthContext = createContext(null)

 const googleProvider= new GoogleAuthProvider()

 const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile =(name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logInWithGithub =()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const logOut =()=>{
        // setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
          if(currentUser){
            setUser(currentUser)
            setLoading(false)
          }
          else{
            setUser(null)
          }
        })
        return()=>{
            unSubscribe
        }
       
    },[])

    

    const authInfo = {createUser,loginUser,logInWithGoogle,logInWithGithub,user,logOut,loading, updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node
}