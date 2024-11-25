// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWWsdgACLpKPK6z9GNsh1QYgMjJWVZHq0",
  authDomain: "tour-authentication.firebaseapp.com",
  projectId: "tour-authentication",
  storageBucket: "tour-authentication.firebasestorage.app",
  messagingSenderId: "361816792713",
  appId: "1:361816792713:web:1fb7d958869df3b33ff058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;