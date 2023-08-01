import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {  
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";
import { useRevalidator } from "react-router-dom";
import CategoryItem from "../../components/category-item/category-item.component";

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


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot)
    console.log(userSnapshot.exists())



if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
            })
    } catch (error) {
        console.log('error creating user', error.message)
    }
}

return userDocRef;

}
