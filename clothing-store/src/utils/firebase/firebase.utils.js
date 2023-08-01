import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwctKC-F8t5E3bBQ34Lnw2bqZyNZ7CgPE",
  authDomain: "crazycat-clothing-db.firebaseapp.com",
  projectId: "crazycat-clothing-db",
  storageBucket: "crazycat-clothing-db.appspot.com",
  messagingSenderId: "210766464891",
  appId: "1:210766464891:web:e2368512f7447c6b0c5fde",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);