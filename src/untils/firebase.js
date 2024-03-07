// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-2aeed.firebaseapp.com",
  projectId: "blog-2aeed",
  storageBucket: "blog-2aeed.appspot.com",
  messagingSenderId: "1000654783317",
  appId: "1:1000654783317:web:652c10d1bc51cfd2c6e5dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);