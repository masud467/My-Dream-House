// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiZ0GEV-HAABLaDkL7O5Tyt9_DRUcCCK0",
  authDomain: "react-auth-real-estate.firebaseapp.com",
  projectId: "react-auth-real-estate",
  storageBucket: "react-auth-real-estate.appspot.com",
  messagingSenderId: "1028270593221",
  appId: "1:1028270593221:web:4a7ec4e539b06c8e7a0cac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;