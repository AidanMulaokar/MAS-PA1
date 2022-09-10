import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUX3ZVw81OD7ai8COJaQpsLc38TFAy8zs",
  authDomain: "shopping-list-mas.firebaseapp.com",
  projectId: "shopping-list-mas",
  storageBucket: "shopping-list-mas.appspot.com",
  messagingSenderId: "45777323851",
  appId: "1:45777323851:web:b73a54877be1b58cf58ace"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();