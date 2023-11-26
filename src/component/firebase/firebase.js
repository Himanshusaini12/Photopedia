import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRVpAQgs1X7uj21iN4hQqzW4Hrp2M9Pb8",
  authDomain: "photopedia-563aa.firebaseapp.com",
  projectId: "photopedia-563aa",
  storageBucket: "photopedia-563aa.appspot.com",
  messagingSenderId: "341186434091",
  appId: "1:341186434091:web:b8636da4b710e3c67ec66e",
  measurementId: "G-M3WD61E8PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default firebase;
