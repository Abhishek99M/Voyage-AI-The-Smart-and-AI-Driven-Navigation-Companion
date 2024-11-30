// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP7KXdXC3zA8bgMHVVGbliQ5FwnUO-T4E",
  authDomain: "trip-planner-3f072.firebaseapp.com",
  projectId: "trip-planner-3f072",
  storageBucket: "trip-planner-3f072.firebasestorage.app",
  messagingSenderId: "566632799113",
  appId: "1:566632799113:web:4ccde585c2021fd3a55f58",
  measurementId: "G-00Z34FRVWH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);