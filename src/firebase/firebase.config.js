// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiqJp13bCeMxZ3f9XXOKmI6pOk9IZ8tms",
  authDomain: "react-dragon-news-auth-23eb9.firebaseapp.com",
  projectId: "react-dragon-news-auth-23eb9",
  storageBucket: "react-dragon-news-auth-23eb9.appspot.com",
  messagingSenderId: "862193183043",
  appId: "1:862193183043:web:2f16dae6e4335912c7a7f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app