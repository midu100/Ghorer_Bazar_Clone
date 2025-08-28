// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCO6MBut-QhFB_Dtuc9M3ld3Nv3ZIiYT9Y",
  authDomain: "ghorerbazar-b2323.firebaseapp.com",
  projectId: "ghorerbazar-b2323",
  storageBucket: "ghorerbazar-b2323.firebasestorage.app",
  messagingSenderId: "216479089606",
  appId: "1:216479089606:web:ca1b27f28c195d4cce28c7",
  measurementId: "G-JWJ61TM7R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app