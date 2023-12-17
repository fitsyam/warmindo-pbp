// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbqQQkv6gOLRDsZ1KjKcLqs8D-8oYGIaU",
    authDomain: "warmindo-pbp.firebaseapp.com",
    projectId: "warmindo-pbp",
    storageBucket: "warmindo-pbp.appspot.com",
    messagingSenderId: "1084843665599",
    appId: "1:1084843665599:web:35a7e9efd3de929955be0a",
    measurementId: "G-T0VNP6748T",
    databaseURL: "https://warmindo-pbp-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, signInWithEmailAndPassword };
export {db};
