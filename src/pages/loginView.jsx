import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import "../css/loginView.css";
import useAuthProvider from "../hooks/useAuth";
export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { handleClick } = useAuthProvider();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("../main");
  }
  return (
    <div className="containerLogin">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <p className="login">Log Eventy with Google</p>
        <button
          className="submit"
          onClick={() => handleClick(setIsAuthenticated)}
        >
          Login with Google
        </button>
      </form>
    </div>
  );
}
