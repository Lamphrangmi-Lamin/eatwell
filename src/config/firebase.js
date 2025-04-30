// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithRedirect, 
  getRedirectResult,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Cah6zvCJN0nOgq5TVjdsKyvxOoNaMAA",
  authDomain: "better-taste-finder.firebaseapp.com",
  projectId: "better-taste-finder",
  storageBucket: "better-taste-finder.firebasestorage.app",
  messagingSenderId: "931466093464",
  appId: "1:931466093464:web:d662b06fbb64679b88c1ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const googleSignInWithRedirect = () => {
  signInWithRedirect(auth, provider);
}

export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      return user;
    }
  } catch (error) {
      console.error("Error handling redirect:", error);
      throw error;
  }
}