// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "project-estate-62c9a.firebaseapp.com",
  projectId: "project-estate-62c9a",
  storageBucket: "project-estate-62c9a.appspot.com",
  messagingSenderId: "810638856887",
  appId: "1:810638856887:web:14274f9fd458f2e6927332"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);