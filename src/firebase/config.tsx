import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3NHT18vYefuqxim7Xzfw21oV0U3UJuDE",
  authDomain: "scrycli-4a92c.firebaseapp.com",
  projectId: "scrycli-4a92c",
  storageBucket: "scrycli-4a92c.firebasestorage.app",
  messagingSenderId: "334070598362",
  appId: "1:334070598362:web:9bf9b390fd81d32d9cf3e3",
  measurementId: "G-5FWSHDBDQY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
