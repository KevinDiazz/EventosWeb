import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { auth, userExists } from "../firebase/firebase";
export default function useAuthProvider() {
  async function handleClick(setState) {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider,setState);
  }
  async function signInWithGoogle(googleProvider,setState) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res) {
        console.log(res)
        const userRef = doc(db, "users", res.user.uid);
        const elemt = await getDoc(userRef);
        setState(true);
        if (!elemt.exists()) {
          await setDoc(doc(db, "users", res.user.uid), {
            name: res.user.displayName,
            email: res.user.email,
            uid: res.user.uid,
            createdEvents: [],
            EventsToGo: [],
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return {handleClick};
}
