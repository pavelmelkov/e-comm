import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDgfeCyp7GV8y9CIYzXMXjcU3Kwmyq2Naw",
    authDomain: "shop-ba281.firebaseapp.com",
    projectId: "shop-ba281",
    storageBucket: "shop-ba281.appspot.com",
    messagingSenderId: "843988869822",
    appId: "1:843988869822:web:af490d3120a58a24d0f4ef",
    measurementId: "G-2TC6SYV254"
};
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    console.log("const snapShot = await userRef.get(); ", snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
  
    return userRef;
};
export const firestore = firebase.firestore();

export const auth = getAuth();
console.log("auth ", auth);
auth.languageCode = "ru";

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const sugnUpWithEmail = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password);
export const sigInWithEmail = (email, password) => signInWithEmailAndPassword(email, password);
export default firebase;
