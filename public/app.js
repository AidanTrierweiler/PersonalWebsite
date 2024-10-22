// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkTCaoXdNyOI1yDafdZvSw8YKP65qtOOg",
  authDomain: "aidantrierweiler-c0a39.firebaseapp.com",
  projectId: "aidantrierweiler-c0a39",
  storageBucket: "aidantrierweiler-c0a39.appspot.com",
  messagingSenderId: "806446148087",
  appId: "1:806446148087:web:9558232ef30bb72b0e66f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Now you can use `db` to interact with Firestore
