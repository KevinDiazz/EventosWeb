import "../css/profile-style.css";
import CreateEvent from "../components/eventCreatorForm.jsx";
import { Children, useEffect, useRef, useState } from "react";
import React from "react";

import ProfileContainer from "./profileContainer";
import {
  getUser,
  userInfo,
  getEvents,
} from "../utils/profile/profileUtils.jsx";
export default function Profile({ userData, eventsToGo, setEventsToGo, uid }) {
  //estado para controlar la visibilidad del form
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    getEvents(userData, setEventsToGo);
  }, [showForm]);
  return (
    eventsToGo && (
      <ProfileContainer
        showForm={showForm}
        setShowForm={setShowForm}
        Children={
          <CreateEvent
            setShowForm={setShowForm}
            showForm={showForm}
            userData={userData}
            setUserData={setEventsToGo}
            uid={uid}
          ></CreateEvent>
        }
        userData={userData}
        eventsToGo={eventsToGo}
      ></ProfileContainer>
    )
  );
}
