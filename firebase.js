// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmDHfsm1Igk8DBBttu8AIeScP64bd9APM",
  authDomain: "arte-355814.firebaseapp.com",
  projectId: "arte-355814",
  storageBucket: "arte-355814.appspot.com",
  messagingSenderId: "672097393936",
  appId: "1:672097393936:web:28c11b297bc123c6829995",
  measurementId: "G-QGD67JVTSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const storage = getStorage()

export {app, db, storage}