import { createContext } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Components/Firebase/Firebase.config";

 export const AuthContext = createContext(null)

 const googleProvider= new GoogleAuthProvider()

 const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {

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

    

    const authInfo = {createUser,loginUser,logInWithGoogle,logInWithGithub}
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