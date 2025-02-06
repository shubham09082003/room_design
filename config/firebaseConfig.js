// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-redesign-376d9.firebaseapp.com",
  projectId: "ai-room-redesign-376d9",
  storageBucket: "ai-room-redesign-376d9.firebasestorage.app",
  messagingSenderId: "999904503632",
  appId: "1:999904503632:web:1e4d9954594ba0f881ee55",
  measurementId: "G-FMMNMRES4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);