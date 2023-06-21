import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCAVsHzB516uK5C7aPs6kUz6XTWL3MdKgQ",
  authDomain: "socio-chat-app.firebaseapp.com",
  projectId: "socio-chat-app",
  storageBucket: "socio-chat-app.appspot.com",
  messagingSenderId: "571821487245",
  appId: "1:571821487245:web:3bc805225bc9e694309ec4",
  measurementId: "G-6MPJV5ZCEG"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()