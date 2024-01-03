import "../css/top-events-style.css";
import { useState, useEffect } from "react";
import {
  orderEventAssistants,
  BestEvents,
} from "../utils/topEvents/topEventsUtils";
import TopEventsContainer from "./topEventsContianer";
import { ListOfCategories } from "./listCategories";
export default function TopEvents() {
  const [topEvents, setTopEvents] = useState([]);
  useEffect(() => {
    BestEvents(setTopEvents);
  }, []);
  return (
    <TopEventsContainer
      topEvents={topEvents}
    ></TopEventsContainer>
  );
}
