// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChlnq8z9mXSnD84g7MrNiR6knhXJWEaoQ",
  authDomain: "ecosort-261c1.firebaseapp.com",
  projectId: "ecosort-261c1",
  storageBucket: "ecosort-261c1.firebasestorage.app",
  messagingSenderId: "731335283012",
  appId: "1:731335283012:web:d7d2b4ec54643d548ac711",
  measurementId: "G-53TW48DQQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

