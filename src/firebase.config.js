import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBNzyuqSbylCslN915CQe2aOmB8HOFhg28",
  authDomain: "furniture-store-38ac4.firebaseapp.com",
  projectId: "furniture-store-38ac4",
  storageBucket: "furniture-store-38ac4.appspot.com",
  messagingSenderId: "1020108763772",
  appId: "1:1020108763772:web:ab99d45c4f88182bd64ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app