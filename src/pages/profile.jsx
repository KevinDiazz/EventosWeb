import "../css/profile-style.css";
import CreateEvent from "../components/eventCreatorForm";
import { Children, useRef, useState, useEffect } from "react";
import Profile from "../components/profile";
import { getUser, userInfo, getEvents } from "../utils/profile/profileUtils";
import React from "react";
export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [uid, setUid] = useState(null);
  useEffect(() => {
    getUser(setUid);
    uid? userInfo(uid, setUserData):""
  },[uid]);
  return userData && <Profile userData={userData} eventsToGo={userData.eventsToGoInfo} setEventsToGo={setUserData} uid={uid} ></Profile>;
}
