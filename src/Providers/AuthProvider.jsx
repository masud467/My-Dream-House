import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Components/Firebase/Firebase.config";

 export const AuthContext = createContext(null)

 const googleProvider= new GoogleAuthProvider()

 const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const logInWithGithub =()=>{
        return signInWithPopup(auth,githubProvider)
    }

    const logOut =()=>{
        return signOut(auth)
    }


    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
          if(currentUser){
            setUser(currentUser)
          }
          else{
            setUser(null)
          }
        })
        return()=>{
            unSubscribe
        }
       
    },[])

    

    const authInfo = {createUser,loginUser,logInWithGoogle,logInWithGithub,user,logOut}
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