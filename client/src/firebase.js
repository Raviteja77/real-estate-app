// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2b96a.firebaseapp.com",
  projectId: "mern-estate-2b96a",
  storageBucket: "mern-estate-2b96a.appspot.com",
  messagingSenderId: "518127317271",
  appId: "1:518127317271:web:5186618e692dd1b8a24752"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);