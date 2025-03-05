// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD2yEXpsmmmlv9Mi4szMmuAx8EXBZ0d58",
  authDomain: "flixtime-f4307.firebaseapp.com",
  projectId: "flixtime-f4307",
  storageBucket: "flixtime-f4307.firebasestorage.app",
  messagingSenderId: "323372908134",
  appId: "1:323372908134:web:8cc41f8bf060af16fcb7a7",
  measurementId: "G-YG3Z867RDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();