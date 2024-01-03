import { useLocation } from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useRef, useState } from "react";
import "../css/listEvent-style.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getData,
  updateEventsToGo,
  checkEvents,
} from "../utils/listEventsUtils/listEventsUtils";
import ListEventsContainer from "./listEventsContainer";
export default function ListEvents() {
  const location = useLocation();
  const typeEvent = location.state;
  const [data, setData] = useState({});
  const [userUid, setuserUid] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setuserUid(user.uid);
    } else {
    }
  });
  const documentoHijoRef = doc(db, "events", typeEvent.split(" ").join(""));
  const [eventToGo, setEventsToGo] = useState([]);

  useEffect(() => {
    getData(setData, typeEvent);
    checkEvents(userUid, setEventsToGo);
  }, [userUid]);

  return (
    <ListEventsContainer
      data={data}
      eventToGo={eventToGo}
      updateEventsToGo={updateEventsToGo}
      userUid={userUid}
      setData={setData}
      typeEvent={typeEvent}
      documentoHijoRef={documentoHijoRef}
    ></ListEventsContainer>
  );
}
