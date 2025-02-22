import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
    apiKey: "AIzaSyAEJU0P632OmiQDn2sx9W1BCBXqgaSOUcc",
    authDomain: "my-first-pr-23b93.firebaseapp.com",
    projectId: "my-first-pr-23b93",
    storageBucket: "my-first-pr-23b93.appspot.com",
    messagingSenderId: "191910232970",
    appId: "1:191910232970:web:03ebefe7ead7b4474dfe73"
  };



// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db