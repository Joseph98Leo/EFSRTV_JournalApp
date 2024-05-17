// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO : Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFgI7Sb2OjIdyQwxjazlJgAZzzBJ-jW4g",
  authDomain: "react-proyecto-journalapp.firebaseapp.com",
  projectId: "react-proyecto-journalapp",
  storageBucket: "react-proyecto-journalapp.appspot.com",
  messagingSenderId: "899482851816",
  appId: "1:899482851816:web:7779e32b4ce3bf95856c5d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )

