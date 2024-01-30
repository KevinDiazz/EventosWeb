import "../css/top-events-style.css";
import { useState, useEffect } from "react";
import {
  orderEventAssistants,
  BestEvents,
} from "../utils/topEvents/topEventsUtils";
import React from 'react';

import TopEventsContainer from "./topEventsContianer.jsx";
export default function TopEvents() {
  const [topEvents, setTopEvents] = useState([]);
  useEffect(() => {
    BestEvents(setTopEvents);
  }, []);
  return (
    topEvents &&
    <>
      <TopEventsContainer topEvents={topEvents}></TopEventsContainer>
    </>
  );
}
