// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQGauVqg2hjKWdPvaj6dLqu8TZdvtIBQY",
  authDomain: "etoils.firebaseapp.com",
  projectId: "etoils",
  storageBucket: "etoils.appspot.com",
  messagingSenderId: "408112912951",
  appId: "1:408112912951:web:3b15904209b72f223c3db2",
  measurementId: "G-PGVSYCLXP7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app)
// const analytics = getAnalytics(app);
export const auth = getAuth(app);  
export const db = getFirestore(app); 
export const storage = getStorage(app);
// console.log(auth)
