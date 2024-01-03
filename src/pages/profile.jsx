import "../css/profile-style.css";
import CreateEvent from "../components/eventCreatorForm";
import { Children, useRef, useState } from "react";


export default function Profile() {
  //estado para controlar la visibilidad del form
  const [showForm,setShowForm]=useState(false)
  return (
    <>
      <div className="d-flex flex-column m-4">
        <div className="d-flex gap-3 mb-4">
          <div className="d-inline-block img-profile">
            <img src="/images/2022-12-03-17-35-32-01-kevindiazimagen_cartoon-31154832-scale8.00-k_euler_a-Copia de kevindiazim.png"></img>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex flex-column">
              <h1>Kevin Diaz</h1>
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
              onClick={() =>showForm?  setShowForm(false):setShowForm(true)}
            >
              Crear Evento
            </button>
          </div>
        </div>
        <h3>Mis Eventos</h3>
        <div className="myEvents d-flex">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="/images/plants-7722970_1920.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>{" "}
              <span className="card-title">10/08/2023 18:00</span>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="eventsFuture">
          <h3>Asistirá</h3>
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>{" "}
              <span className="card-title">10/08/2023 18:00</span>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        {showForm && <CreateEvent isVisible={setShowForm}></CreateEvent>}
      </div>
    </>
  );
}
