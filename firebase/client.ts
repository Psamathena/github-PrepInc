// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQuAkeLmyCKHNLqtVYvuNdqxbV6G4nJD4",
  authDomain: "prepinc-7644e.firebaseapp.com",
  projectId: "prepinc-7644e",
  storageBucket: "prepinc-7644e.firebasestorage.app",
  messagingSenderId: "966677175610",
  appId: "1:966677175610:web:bb56ffe20460aa18b04403",
  measurementId: "G-018DMZN4H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);