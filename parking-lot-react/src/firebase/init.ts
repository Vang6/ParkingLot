import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCNkXFQc-fzuQlIwrMmjDRpt9B8i18-THA",
  authDomain: "parkinglotbeta.firebaseapp.com",
  projectId: "parkinglotbeta",
  storageBucket: "parkinglotbeta.appspot.com",
  messagingSenderId: "599647547307",
  appId: "1:599647547307:web:aaeea2aa908eb4cc78acee"
};
const app= initializeApp(firebaseConfig)
export const db=getFirestore(app)