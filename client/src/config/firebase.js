import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1MtioCmu5F4kr25uaZayOY639-xVBif8",
  authDomain: "worksat-444e6.firebaseapp.com",
  projectId: "worksat-444e6",
  storageBucket: "worksat-444e6.appspot.com",
  messagingSenderId: "457195495356",
  appId: "1:457195495356:web:6af8de2e09183a8a3ad5b9",
  measurementId: "G-T8MQJFXNDL",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const img = getStorage(app)
