// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv40eDX4kXlHmzBXrXcR7mqiKkbbHLwKQ",
  authDomain: "haircut-e2b8c.firebaseapp.com",
  projectId: "haircut-e2b8c",
  storageBucket: "haircut-e2b8c.appspot.com",
  messagingSenderId: "100950315897",
  appId: "1:100950315897:web:33686cd290af255c3bd5a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
provider.setCustomParameters({ prompt: "select_account" });

export { auth, provider, db, storage };
