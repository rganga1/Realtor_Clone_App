// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// My Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDnHLfw65h0sJIwOuFIBBGou5VYcWlC4UE",
//   authDomain: "realtor-clone-97b84.firebaseapp.com",
//   projectId: "realtor-clone-97b84",
//   storageBucket: "realtor-clone-97b84.appspot.com",
//   messagingSenderId: "137197937042",
//   appId: "1:137197937042:web:a2e683ad96033bdf61e14b"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDor28o7aUqieM-QGrsCwbQJeICYm4nL-Q",
//   authDomain: "realtor-clone-react.firebaseapp.com",
//   projectId: "realtor-clone-react",
//   storageBucket: "realtor-clone-react.appspot.com",
//   messagingSenderId: "274012290784",
//   appId: "1:274012290784:web:6613bae03bba4331989a85"
// };

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()