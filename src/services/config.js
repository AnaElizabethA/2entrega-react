import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX32T9azZzCXY6TjXe3a4ZmqbLYPmCQ5w",
  authDomain: "arrimos-morales.firebaseapp.com",
  projectId: "arrimos-morales",
  storageBucket: "arrimos-morales.appspot.com",
  messagingSenderId: "84595979931",
  appId: "1:84595979931:web:32d2ed232efff2726c383e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);