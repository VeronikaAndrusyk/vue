/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8PWE7ANYNjsB_j1-QpFLlBig408q55BE",
    authDomain: "simple-ed1b9.firebaseapp.com",
    projectId: "simple-ed1b9",
    storageBucket: "simple-ed1b9.appspot.com",
    messagingSenderId: "726531187649",
    appId: "1:726531187649:web:7b3e6cecb15f49a7ec0540"
  };

// Initialize Firebase
 initializeApp(firebaseConfig);


  
  // init firestore
  const projectFirestore = firebase.firestore()

  export { projectFirestore }