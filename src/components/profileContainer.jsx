import "../css/profile-style.css";
import CreateEvent from "../components/eventCreatorForm";
import { Children, useEffect, useRef, useState } from "react";

export default function ProfileContainer({
  showForm,
  setShowForm,
  Children,
  userData,
  eventsToGo,
}) {
  console.log(eventsToGo);
  return (
    eventsToGo && (
      <>
        <div className="d-flex flex-column m-4">
          <div className="d-flex gap-3 mb-4">
            <div className="d-inline-block img-profile">
              <img src="/images/2022-12-03-17-35-32-01-kevindiazimagen_cartoon-31154832-scale8.00-k_euler_a-Copia de kevindiazim.png"></img>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex flex-column">
                <h1>{userData.name}</h1>
                <div className="d-flex gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <span>Seguidores</span>
                    <span>123</span>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <span>Seguidos</span>
                    <span>123</span>
                  </div>
                </div>
              </div>
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
        {showForm && Children}
        <div className="d-flex gap-4">
          <p>Mis Proximos Eventos</p>
          {eventsToGo.map((event) => {
            return (
              <div
                className="top-event-container d-flex flex-column col-4 justify-content-center"
                key={event.uid}
              >
                <div className="img-event"></div>
                <div className="info-top-event-container d-flex flex-column align-content-center">
                  <p className="title-event-card mt-2">{event.title}</p>
                  <p>{event.place}</p>
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <p className="description-event-card">
                      {event.description}
                    </p>
                  </div>
                  <div className="info-top-event-time d-flex flex-column justify-content-end mb-3 gap-1">
                    <span>Asistentes {event.assistants}</span>
                    <span className="float-start">{event.hourStart}</span>
                    <span className="float-end">{event.date}</span>
                  </div>
                </div>
                <div className="type-event d-flex justify-content-center align-items-center">
                  {event.category}
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex gap-4 mt-4">
          <p>Mis eventos</p>
          {userData.createdEvents.map((value) => {
            return (
              <div
                className="top-event-container d-flex flex-column col-4 justify-content-center"
                key={value.uid}
              >
                <div className="img-event"></div>
                <div className="info-top-event-container d-flex flex-column align-content-center">
                  <p className="title-event-card mt-2">{value.title}</p>
                  <p>{value.place}</p>
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <p className="description-event-card">
                      {value.description}
                    </p>
                  </div>
                  <div className="info-top-event-time d-flex flex-column justify-content-end mb-3 gap-1">
                    <span>Asistentes {value.assistants}</span>
                    <span className="float-start">{value.hourStart}</span>
                    <span className="float-end">{value.date}</span>
                  </div>
                </div>
                <div className="type-event d-flex justify-content-center align-items-center">
                  {value.category}
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}