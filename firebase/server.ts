import { cert, initializeApp } from 'firebase-admin/app';
import {getFirestore} from "firebase-admin/firestore"

initializeApp({
    credential: cert(process.env.FIREBASE_ADMIN_KEY as string),
  });

  export const adminDB = getFirestore()