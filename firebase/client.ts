import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1Fl6WZc3ONLaNMp-ugZr8u7eOr-gWAis",
  authDomain: "ms-platform-dev.firebaseapp.com",
  projectId: "ms-platform-dev",
  storageBucket: "ms-platform-dev.appspot.com",
  messagingSenderId: "110144003932",
  appId: "1:110144003932:web:801126e5c2de945bb3ab99",
  measurementId: "G-6DW84VYJS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage()
export const auth = getAuth()
export const functions = getFunctions()
export const db = getFirestore()
