import "../css/profile-style.css";
import CreateEvent from "../components/eventCreatorForm";
import { Children, useEffect, useRef, useState } from "react";
import { getImg } from "../utils/profile/profileUtils.jsx";
import Header from "./header.jsx";
import React from 'react';
export default function ProfileContainer({
  showForm,
  setShowForm,
  Children,
  userData,
  eventsToGo,
}) {
  const [imgEvent, setImgEvents] = useState({});
  useEffect(() => {
  getImg(userData.EventsToGo, userData.createdEvents, setImgEvents);
  },[userData]);

  return (
    <>
      <Header></Header>
      <div className="d-flex  flex-column m-4 align-items-center">
        <div className="d-flex gap-3 mb-4">
          <div className="d-inline-block img-profile">
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex flex-column">
              <h1>{userData.name}</h1>
              <button
                className="buttonCreateEvent"
                onClick={() =>
                  showForm ? setShowForm(false) : setShowForm(true)
                }
              >
                Crear Evento
              </button>
            </div>
          </div>
        </div>
      </div>
      {showForm && Children}
      <div
        className="contenidoPrincial m-4"
        style={{
          filter: showForm ? "blur(10px)" : "",
          zIndex: showForm ? "-1" : "",
        }}
      >
        <p className="fs-1 fw-bold text-center">Mis Proximos Eventos</p>
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {eventsToGo &&
            eventsToGo.map((event) => {
              return (
                <div
                  className="top-event-container d-flex flex-column col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 justify-content-center"
                  key={event.uid + event.uid}
                >
                  <img src={imgEvent[event.uid]} className="img-event"></img>
                  <div className="info-top-event-container d-flex flex-column align-content-center p-2">
                    <p className="title-event-card mt-2 text-center">
                      {event.title}
                    </p>
                    <p className="text-center">{event.place}</p>
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <p className="description-event-card">
                        {event.description}
                      </p>
                    </div>
                    <div className="info-top-event-time d-flex flex-column justify-content-end mb-3 gap-1 mt-2">
                      <div className="text-start w-100 text-center fw-bold m-3">
                        Asistentes:
                        <div className="rounded asistants d-inline text-center fs-5 p-2">
                          {event.assistants}
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="float-end fw-bold">
                          {event.hourStart}
                        </span>
                        <span className="float-start fw-bold">
                          {event.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="type-event d-flex justify-content-center align-items-center">
                    {event.category}
                  </div>
                </div>
              );
            })}
        </div>
        <p className="fs-1 mt-4 fw-bold text-center">Mis eventos</p>
        <div className="d-flex gap-4 mt-4 flex-wrap justify-content-center">
          {userData.createdEvents &&
            userData.createdEvents.map((value) => {
              return (
                <div
                  className="top-event-container d-flex flex-column col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 justify-content-center"
                  key={value.uid}
                >
                  <img src={imgEvent[value.uid]} className="img-event"></img>
                  <div className="info-top-event-container d-flex flex-column align-content-center p-2">
                    <p className="title-event-card mt-2 text-center">
                      {value.title}
                    </p>
                    <p className="text-center">{value.place}</p>
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <p className="description-event-card">
                        {value.description}
                      </p>
                    </div>
                    <div className="info-top-event-time d-flex flex-column mb-3 gap-3">
                      <div className="text-start w-100 text-center fw-bold">
                        Asistentes:
                        <div className="rounded asistants d-inline text-center fs-5 p-2 m-1">
                          {value.assistants}
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="float-end fw-bold">
                          {value.hourStart}
                        </span>
                        <span className="float-start fw-bold">
                          {value.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="type-event d-flex justify-content-center align-items-center ">
                    {value.category}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
