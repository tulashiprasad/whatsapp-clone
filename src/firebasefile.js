// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBhjMguV-QWTPS1hOllWWUDxkgQ1W5TnKU",
  authDomain: "whatsapp-clone-465a5.firebaseapp.com",
  projectId: "whatsapp-clone-465a5",
  storageBucket: "whatsapp-clone-465a5.appspot.com",
  messagingSenderId: "1038947816231",
  appId: "1:1038947816231:web:bb8941f62625e81bc44f02",
  measurementId: "G-DV5PJF2JSG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider;

export { auth, provider };
export default db;
