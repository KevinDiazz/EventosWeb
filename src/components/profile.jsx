import "../css/profile-style.css";
import CreateEvent from "../components/eventCreatorForm";
import { Children, useEffect, useRef, useState } from "react";
import ProfileContainer from "./profileContainer";
import { getUser, userInfo , getEvents } from "../utils/profile/profileUtils";
export default function Profile({userData}) {
  //estado para controlar la visibilidad del form
  const [showForm, setShowForm] = useState(false);
  const [eventsToGo , setEventsToGo]=useState(null)
  useEffect(() => {
    getEvents(userData,setEventsToGo)
  }, []);
  return (
    eventsToGo && (
      <ProfileContainer
        showForm={showForm}
        setShowForm={setShowForm}
        Children={<CreateEvent setShowForm={setShowForm} showForm={showForm}></CreateEvent>}
        userData={userData}
        eventsToGo={eventsToGo}
      ></ProfileContainer>
    )
  );
}
