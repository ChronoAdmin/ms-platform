import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { Auth, getAuth } from "firebase/auth";
import { Functions, getFunctions } from "firebase/functions";
import { Firestore, getFirestore } from "firebase/firestore";

let storage;
let auth: Auth;
let functions: Functions;
let db: Firestore;

const firebaseConfig = {
  apiKey: "AIzaSyA1Fl6WZc3ONLaNMp-ugZr8u7eOr-gWAis",
  authDomain: "ms-platform-dev.firebaseapp.com",
  projectId: "ms-platform-dev",
  storageBucket: "ms-platform-dev.appspot.com",
  messagingSenderId: "110144003932",
  appId: "1:110144003932:web:801126e5c2de945bb3ab99",
  measurementId: "G-6DW84VYJS4",
};

if (typeof window !== "undefined" && !getApps()?.length) {
  initializeApp(firebaseConfig);
  storage = getStorage();
  auth = getAuth();
  functions = getFunctions();
  db = getFirestore();
}

export { storage, auth, functions, db };
