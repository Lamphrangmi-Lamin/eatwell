// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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