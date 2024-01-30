import "../css/header-style.css";
import { useNavigate } from "react-router-dom";
import React from 'react';
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-evenly">
      <span className="textLogo fs-1">
        E<span style={{ color: "#FEE440" }}>v</span>
        <span style={{ color: "#00BBF9" }}>e</span>
        <span style={{ color: "#00F5D4" }}>N</span>ty
      </span>
      <img
        className="align-self-end"
        onClick={() => navigate("../profile")}
        style={{ width: "30px", height: "40px" }}
        src="/images/icons8-user-24.png"
      ></img>
    </div>
  );
}
