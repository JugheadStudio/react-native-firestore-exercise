import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDb32s1vJm9gBa1GTgVi6bPXFa9HTQchhQ",
    authDomain: "class-work-c1139.firebaseapp.com",
    projectId: "class-work-c1139",
    storageBucket: "class-work-c1139.appspot.com",
    messagingSenderId: "312804424671",
    appId: "1:312804424671:web:3ce812c7171e636bf1a26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO: Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app); 