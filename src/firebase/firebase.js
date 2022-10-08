// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBerKhC8PnUNKFT1oWeYQeZIivNEjJYjbk",
    authDomain: "zombificate-abrutti.firebaseapp.com",
    projectId: "zombificate-abrutti",
    storageBucket: "zombificate-abrutti.appspot.com",
    messagingSenderId: "11555011483",
    appId: "1:11555011483:web:935f36476f29f9af3f7f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);