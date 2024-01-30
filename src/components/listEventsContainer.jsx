import { useEffect,useState } from "react";
import Header from "./header";
import React from 'react';

import {getImg} from  "../utils/listEventsUtils/listEventsUtils.jsx"
export default function ListEventsContainer({
  data,
  eventToGo,
  updateEventsToGo,
  userUid,
  setData,
  typeEvent,
  documentoHijoRef,
}) {
  const events = [];
  const [imgEvent, setImgEvents] = useState({});
  eventToGo.map((value) => events.push(value.newEvent));
  useEffect(()=>{
   getImg(Object.keys(data),setImgEvents)
  },[data])
  return (
    <>
    <Header></Header>
      <h2 className="ms-4 fw-bold mt-2 text-center">{typeEvent}</h2>
      <div className="d-flex gap-3 m-4 flex-wrap justify-content-center">
        {data ? (
          Object.keys(data).map((event) => {
            return (
              <div
                className="eventContainer col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column gap-2"
                key={data[event].title}
              >
                <img
                  className="img-card"
                  src={imgEvent[data[event].uid]}
                ></img>
                <p className="title-event-card text-center">{data[event].title}</p>
                <p className="text-center">{data[event].place}</p>
                <p className="description-event-card mb-5">
                  {data[event].description}
                </p>
                <div className="d-flex justify-content-center">
                  <span className="fw-bold">
                    Asistentes{" "}
                    <span
                      className="fs-5 fw-bold rounded p-2 m-1"
                      style={{ backgroundColor: "#FEE440" }}
                    >
                      {data[event].assistants}
                    </span>
                  </span>
                </div>
                <div className="fw-bold">
                  <span className="float-start">{data[event].hourStart}</span>
                  <span className="float-end">{data[event].date}</span>
                </div>
                <button
                  id={event}
                  className="d-block mt-2"
                  onClick={() =>
                    updateEventsToGo(
                      event,
                      documentoHijoRef,
                      data,
                      userUid,
                      setData,
                      typeEvent
                    )
                  }
                >
                  {events.includes(data[event].uid) ? "No voy" : "Voy"}
                </button>
              </div>
            );
          })
        ) : (
          <p>no hay eventos</p>
        )}
      </div>
    </>
  );
}
