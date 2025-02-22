import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
    apiKey: "AIzaSyAyvjNxU_NMFmmGdF5hhXiol4-Xu5KQKqA",
    authDomain: "example-b5932.firebaseapp.com",
    databaseURL: "https://example-b5932-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "example-b5932",
    storageBucket: "example-b5932.appspot.com",
    messagingSenderId: "555073847790",
    appId: "1:555073847790:web:e692cc989728fb0ca00eff"
  };



// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db