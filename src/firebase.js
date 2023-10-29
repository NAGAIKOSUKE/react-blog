import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDLmFwWwzzDIAKg4FH7PS_VHU_D78zlR_4",
  authDomain: "blog-d6a9b.firebaseapp.com",
  projectId: "blog-d6a9b",
  storageBucket: "blog-d6a9b.appspot.com",
  messagingSenderId: "482721749928",
  appId: "1:482721749928:web:24a5fedf916859f92e9b9d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
