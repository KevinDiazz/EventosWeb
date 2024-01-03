import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/loginView.jsx";
import RegistrationPage from "./pages/registrationPage.jsx";
import Main from "./pages/mainView.jsx";
import ListEvents from "./components/listEvents.jsx";
import Profile from "./pages/profile.jsx";
import CreateEvent from "./components/eventCreatorForm.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/listEvents" element={<ListEvents />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  </>
);