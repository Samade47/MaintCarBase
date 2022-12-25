// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnkaCacLA592MWSSGrr3Fr5qPkFeaDoJQ",
  authDomain: "maintcar-b181e.firebaseapp.com",
  projectId: "maintcar-b181e",
  storageBucket: "maintcar-b181e.appspot.com",
  messagingSenderId: "213001306797",
  appId: "1:213001306797:web:b7064ccc72d468de787c24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
