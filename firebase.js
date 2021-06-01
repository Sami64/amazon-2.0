import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSrQp2HdV7ysIr7KRwj1U_6YdXN-lGWFw",
  authDomain: "next-22aec.firebaseapp.com",
  projectId: "next-22aec",
  storageBucket: "next-22aec.appspot.com",
  messagingSenderId: "28457988040",
  appId: "1:28457988040:web:de099c0b483a6477989afd",
  measurementId: "G-300FGFJVZK",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
