// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId

  // apiKey: "AIzaSyB6dC30X0U9otBQzW7-b3UG2lrqpjQOjI0",
  // authDomain: "habit-tracker-6244c.firebaseapp.com",
  // projectId: "habit-tracker-6244c",
  // storageBucket: "habit-tracker-6244c.firebasestorage.app",
  // messagingSenderId: "69964953137",
  // appId: "1:69964953137:web:0519a3db88431f2db9c710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);