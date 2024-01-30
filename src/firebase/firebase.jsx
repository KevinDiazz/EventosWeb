import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL,getBytes } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  where,
  setDoc,
  deleteDoc,
  getDoc
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APP_APPID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENTID,
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function userExists(uid){
const docRef = doc(db, "users",uid);
const res = await getDoc(docRef)
console.log(res)
return res.exists()
}