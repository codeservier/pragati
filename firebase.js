import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, getDocs,collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZQlj0FZxwv-mz_xTbmOFa59dqy2BckA0",
  authDomain: "pragaticoachingclasses-84688.firebaseapp.com",
  projectId: "pragaticoachingclasses-84688",
  storageBucket: "pragaticoachingclasses-84688.appspot.com",
  messagingSenderId: "900887656765",
  appId: "1:900887656765:web:9c318119a1fb70eacbad54",
  measurementId: "G-X14LD1DMQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);
const storage = getStorage(app);

// Export the initialized Firestore and Auth instances
export { db, auth, storage,  doc,collection,getDocs };
