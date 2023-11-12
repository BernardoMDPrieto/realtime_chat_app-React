// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRAWG6gVYdDkn7CyCgtQpdAWGmfHJ1x-8",
  authDomain: "chatapp-40a8a.firebaseapp.com",
  projectId: "chatapp-40a8a",
  storageBucket: "chatapp-40a8a.appspot.com",
  messagingSenderId: "506055357968",
  appId: "1:506055357968:web:9dbdd91210b4aab9a6bc95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)