import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCt4VKs5rPaI8F9LkbFpXDIfa4aRYpsI0E",
  authDomain: "social-media-app-9acd8.firebaseapp.com",
  projectId: "social-media-app-9acd8",
  storageBucket: "social-media-app-9acd8.appspot.com",
  messagingSenderId: "368318175961",
  appId: "1:368318175961:web:3decffdc8aee8df3af7cc8",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
