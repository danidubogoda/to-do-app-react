// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDv6dCjCIk9L9j9862wwlbJroraXzWRGsk",
    authDomain: "to-app-app-dnz.firebaseapp.com",
    projectId: "to-app-app-dnz",
    storageBucket: "to-app-app-dnz.appspot.com",
    messagingSenderId: "36364669366",
    appId: "1:36364669366:web:abb37895385aae9fef3117",
    measurementId: "G-9B04KGZ2GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}