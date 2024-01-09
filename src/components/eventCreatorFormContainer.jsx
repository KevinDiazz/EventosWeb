import { useEffect } from "react";
import {
  checkCharacters,
  submitValidate,
  writeInDb,
  submit,
} from "../utils/eventCreatorForm/eventCreatorForm";
import { v4 as uuidv4 } from "uuid";
export default function EventCreatorFormContainer({
  formData,
  setFormData,
  refInputsValues,
  setCharacters,
  setShowForm,
  showForm,
  characters,
  id,
  styleIsOk,
  setStyleIsOk,
  isLoading,
  setIsLoading,
  isDone,
  setIsDone,
}) {
  useEffect(() => {
    console.log(styleIsOk);
  }, [styleIsOk, isLoading]);
  return (
    <>
      <div
        className="flex flex-column col-12 align-items-center  h-100"
        style={{
          display: isLoading && !isDone ? "flex" : "none",
          position: "absolute",
          top: "120vh",
          zIndex: 1,
        }}
      >
        <div class="loader"></div>
        Cargando
      </div>
      <div
        className="flex flex-column col-12 align-items-center  h-100 fs-1"
        style={{
          display: isDone ? "flex" : "none",
          position: "absolute",
          top: "120vh",
          zIndex: 1,
        }}
      >
        <button
          className="float-end rounded"
          onClick={() => {
            setIsDone(false);
            setIsLoading(false);
            setShowForm(false);
          }}
        >
          X
        </button>
        Evento Creado con exito!
      </div>
      <div
        className="eventCreator p-3"
        style={{
          border: styleIsOk ? "blue 3px solid" : "red 3px solid",
          display: isLoading ? "none" : "block",
        }}
      >
        <button
          className="float-end rounded"
          onClick={() => {
            if (showForm) {
              setShowForm(false);
            } else {
              setShowForm(true);
            }
          }}
        >
          X
        </button>
        <div className="d-flex justify-content-center">
          <form className="col-8 d-flex flex-column">
            <div>
              <label htmlFor="title">Titulo del evento</label>
              <input
                className="col-10"
                id="title"
                type="text"
                style={{ border: styleIsOk ? "" : "red 3px solid" }}
                ref={refInputsValues.inputTitle}
                onChange={() => {
                  checkCharacters(
                    refInputsValues.inputTitle.current.value,
                    30,
                    setCharacters,
                    characters,
                    "titleInput"
                  ),
                    characters.titleInput > 0
                      ? setFormData({
                          ...formData,
                          title: refInputsValues.inputTitle.current.value,
                        })
                      : "";
                }}
              ></input>
              <span className="m-2">{characters.titleInput}</span>
            </div>
            <label htmlFor="title">Categoria del Evento</label>
            <select
              className="col-10"
              id="title"
              type="text"
              style={{ border: styleIsOk ? "" : "red 3px solid" }}
              ref={refInputsValues.selectInfo}
              onChange={() =>
                setFormData({
                  ...formData,
                  category: refInputsValues.selectInfo.current.value,
                })
              }
            >
              <option value="elegirCategoria">Elige una categoria</option>
              <option value="Conciertos y Espectáculos Musicales">
                Conciertos y Espectáculos Musicales
              </option>
              <option value="Eventos Culturales y Festivales">
                Eventos Culturales y Festivales
              </option>
              <option value="Deportivos y Competencias">
                Deportivos y Competencias
              </option>
              <option value="Conferencias y Seminarios">
                Conferencias y Seminarios
              </option>
              <option value="Arte y Exposiciones">Arte y Exposiciones</option>
              <option value="Celebraciones Sociales">
                Celebraciones Sociales
              </option>
              <option value="Eventos Corporativos">Eventos Corporativos</option>
              <option value="Eventos de Caridad y Voluntariado">
                Eventos de Caridad y Voluntariado
              </option>
              <option value="Eventos de Networking">
                Eventos de Networking
              </option>
              <option value="Eventos Religiosos">Eventos Religiosos</option>
              <option value="Eventos Tecnológicos">Eventos Tecnológicos</option>
              <option value="Eventos Gastronómicos">
                Eventos Gastronómicos
              </option>
              <option value="Eventos al Aire Libre">
                Eventos al Aire Libre
              </option>
              <option value="Eventos Recreativos y Entretenimiento">
                Eventos Recreativos y Entretenimiento
              </option>
              <option value="Eventos Literarios">Eventos Literarios</option>
              <option value="Eventos de Viaje y Aventura">
                Eventos de Viaje y Aventura
              </option>
              <option value="Eventos de Salud y Bienestar">
                Eventos de Salud y Bienestar
              </option>
              <option value="Eventos de Entretenimiento en Línea">
                Eventos de Entretenimiento en Línea
              </option>
            </select>
            <div className="col-12">
              <label htmlFor="descripcion">Descripcion breve del evento</label>

              <input
                className="col-10"
                id="descripcion"
                type="text"
                style={{ border: styleIsOk ? "" : "red 3px solid" }}
                ref={refInputsValues.inputDescripcion}
                onChange={() => {
                  checkCharacters(
                    refInputsValues.inputDescripcion.current.value,
                    100,
                    setCharacters,
                    characters,
                    "descriptionInput"
                  ),
                    characters.descriptionInput > 0
                      ? setFormData({
                          ...formData,
                          description:
                            refInputsValues.inputDescripcion.current.value,
                        })
                      : "";
                }}
              ></input>
              <span className="m-2">{characters.descriptionInput}</span>
            </div>
            <label htmlFor="descripcion">Lugar</label>
            <input
              className="col-10"
              id="descripcion"
              type="text"
              style={{ border: styleIsOk ? "" : "red 3px solid" }}
              ref={refInputsValues.placeInfo}
              onChange={() =>
                setFormData({
                  ...formData,
                  place: refInputsValues.placeInfo.current.value,
                })
              }
            ></input>
            <label htmlFor="descripcion">Fecha</label>
            <input
              className="col-10"
              id="descripcion"
              type="date"
              style={{ border: styleIsOk ? "" : "red 3px solid" }}
              ref={refInputsValues.dateInfo}
              onChange={() =>
                setFormData({
                  ...formData,
                  date: refInputsValues.dateInfo.current.value,
                })
              }
            ></input>
            <label htmlFor="descripcion">hora de inicio Evento</label>
            <input
              className="col-4"
              id="descripcion"
              type="time"
              style={{ border: styleIsOk ? "" : "red 3px solid" }}
              ref={refInputsValues.hourStart}
              onChange={() =>
                setFormData({
                  ...formData,
                  hourStart: refInputsValues.hourStart.current.value,
                })
              }
            ></input>
            <label htmlFor="descripcion">hora Final del evento</label>
            <input
              className="col-4"
              id="descripcion"
              type="time"
              style={{ border: styleIsOk ? "" : "red 3px solid" }}
              ref={refInputsValues.hourEnd}
              onChange={() =>
                setFormData({
                  ...formData,
                  hourFinish: refInputsValues.hourEnd.current.value,
                })
              }
            ></input>
            <label htmlFor="textarea">Descripcion del Evento</label>
            <textarea
              name="textarea"
              rows="10"
              ref={refInputsValues.textarea}
              cols="50"
              style={{ border: styleIsOk ? "" : "red 3px solid" }}
              onChange={() => {
                checkCharacters(
                  refInputsValues.textarea.current.value,
                  800,
                  setCharacters,
                  characters,
                  "textarea"
                ),
                  characters.textarea > 0
                    ? setFormData({
                        ...formData,
                        fullDescription: refInputsValues.textarea.current.value,
                      })
                    : "";
              }}
            ></textarea>
            <span>{characters.textarea}</span>
            <p
              className="fs-5"
              style={{
                display: styleIsOk ? "none" : "block",
                color: styleIsOk ? "" : "red",
              }}
            >
              Algo falló , ¡revise su evento y corriga los errores!
            </p>
            <button
              type="submit"
              onClick={(e) => {
                let ready = submit(
                  e,
                  formData,
                  setStyleIsOk,
                  id,
                  setFormData,
                  uuidv4,
                  setIsDone
                );
                ready ? setIsLoading(true) : "";
              }}
              className="mt-3"
            >
              Crear Evento
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
