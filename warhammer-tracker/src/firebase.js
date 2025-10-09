import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBKnwZCS3FTtAF4UnnJZirL5KIqCqrVtI",
  authDomain: "warhammer-tracker-a77c4.firebaseapp.com",
  projectId: "warhammer-tracker-a77c4",
  storageBucket: "warhammer-tracker-a77c4.firebasestorage.app",
  messagingSenderId: "314994952943",
  appId: "1:314994952943:web:84b3be69ec634d148ae91a",
  measurementId: "G-QZJ6GFNVXS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
