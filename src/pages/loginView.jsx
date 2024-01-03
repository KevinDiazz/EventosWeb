import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthProvider from "../hooks/useAuth";
export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {handleClick} = useAuthProvider()
  const navigate = useNavigate();
  if (isAuthenticated) {
    return navigate('../main');
  }
  return (
    <>
      <button onClick={()=>handleClick(setIsAuthenticated)}>Login with Google</button>
    </>
  );
}
