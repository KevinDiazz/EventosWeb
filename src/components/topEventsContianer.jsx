import {getImg} from "../utils/topEvents/topEventsUtils.jsx"
import {useState,useEffect} from "react"
import React from 'react';
export default function TopEventsContainer({ topEvents }) {
  const [imgEvent, setImgEvents] = useState()
  useEffect(() => {
  getImg(topEvents,setImgEvents);
  }, [topEvents]);
  return (
    imgEvent &&
    <>
      <p className="titleTopEvents fs-4 col-12 text-center">TOP EVENTOS</p>
      <div className="">
        <div className="col-12 d-flex flex-wrap gap-3 justify-content-center text-center">
          {topEvents
            ? topEvents.map((value) => {
                let key = Object.keys(value);
                return (
                  <div
                    className="top-event-container d-flex flex-column col-10 col-sm-10 col-xl-4 justify-content-center justify-items-end"
                    key={value[key[0]].uid}
                  >
                    <img src={imgEvent[value[key[0]].uid]} className="img-event"></img>
                    <div className="info-top-event-container d-flex flex-column align-content-center p-2">
                      <p className="title-event-card mt-2 text-center">
                        {value[key[0]].title}
                      </p>
                      <p className="text-center">{value[key[0]].place}</p>
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <p className="description-event-card">
                          {value[key[0]].description}
                        </p>
                      </div>
                      <div className="info-top-event-time d-flex flex-column  mb-3 gap-2 mt-3">
                        <div className="text-start w-100 text-center fw-bold">
                          Asistentes:
                          <div
                            className="rounded d-inline text-center fs-5 p-2 m-1"
                            style={{ background: "#FEE440",color:"black" }}
                          >
                            {value[key[0]].assistants}
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="float-end fw-bold">{value[key[0]].hourStart}</span>
                          <span className="float-start fw-bold">{value[key[0]].date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="type-event d-flex justify-content-center align-items-center">
                      {value[key[0]].category}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
