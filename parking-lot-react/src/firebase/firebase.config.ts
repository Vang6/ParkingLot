import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import encryptConfig from "./encrypt.config";
const firebaseConfig = JSON.parse(atob(encryptConfig));
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);