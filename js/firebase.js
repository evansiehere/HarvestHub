import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, enableIndexedDbPersistence, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

//Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc3h5uJK-DJ4t9oL0ImbHxn-atM166CT8",
  authDomain: "harvesthub-c54c6.firebaseapp.com",
  projectId: "harvesthub-c54c6",
  storageBucket: "harvesthub-c54c6.firebasestorage.app",
  messagingSenderId: "330622578420",
  appId: "1:330622578420:web:6691d622a955a2c7c578a1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Enable offline persistence
try {
    enableIndexedDbPersistence(db);
} catch (error) {
    console.error("Error enabling offline persistence:", error);
}

export { 
    app, 
    auth, 
    db, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    doc,
    setDoc,
    getDoc,
    signOut,
    collection,
    getDocs,
    query,
    where
};
