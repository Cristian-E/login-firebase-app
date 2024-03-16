// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAELa4Kede9OGs_LFAUCrmn5_q4D999RGA",
    authDomain: "login-page-6d74c.firebaseapp.com",
    projectId: "login-page-6d74c",
    storageBucket: "login-page-6d74c.appspot.com",
    messagingSenderId: "505730673104",
    appId: "1:505730673104:web:4051e2e678caff9fe2f1d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
