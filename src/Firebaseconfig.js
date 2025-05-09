
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGGI89WWIo9JM_p685hYgTuONrw2qUEGU",
  authDomain: "blog-app-fea3f.firebaseapp.com",
  projectId: "blog-app-fea3f",
  storageBucket: "blog-app-fea3f.firebasestorage.app",
  messagingSenderId: "389886729777",
  appId: "1:389886729777:web:5037951f42e12780503f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()