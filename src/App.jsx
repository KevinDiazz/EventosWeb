import "./App.css";
import { Link } from "react-router-dom";
import Main from "./pages/mainView";
import Login from "./pages/loginView";
import Profile from "./pages/profile";
import CreateEvent from "./components/eventCreatorForm";
import { useState } from "react";
import React from 'react';
function App() {
  const [userData, setUserData] = useState(null);
  const [uid, setUid] = useState(null);
  return (
    <>
      {/* <Main></Main> */}
    </>
  );
}

export default App;
