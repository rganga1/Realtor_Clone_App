// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnHLfw65h0sJIwOuFIBBGou5VYcWlC4UE",
  authDomain: "realtor-clone-97b84.firebaseapp.com",
  projectId: "realtor-clone-97b84",
  storageBucket: "realtor-clone-97b84.appspot.com",
  messagingSenderId: "137197937042",
  appId: "1:137197937042:web:a2e683ad96033bdf61e14b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()