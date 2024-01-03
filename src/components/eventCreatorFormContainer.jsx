import {
  checkCharacters,
  submitValidate,
  writeInDb,
} from "../utils/eventCreatorForm/eventCreatorForm";
import { v4 as uuidv4 } from "uuid";
export default function EventCreatorFormContainer({
  formData,
  setFormData,
  refInputsValues,
  isVisible,
  setCharacters,
  characters
}) {
  return (
    <div className="eventCreator">
      <button className="float-end" onClick={() => isVisible(false)}>
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
            <option value="Eventos de Networking">Eventos de Networking</option>
            <option value="Eventos Religiosos">Eventos Religiosos</option>
            <option value="Eventos Tecnológicos">Eventos Tecnológicos</option>
            <option value="Eventos Gastronómicos">Eventos Gastronómicos</option>
            <option value="Eventos al Aire Libre">Eventos al Aire Libre</option>
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
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const isready = submitValidate(formData);
              setFormData({ ...formData, uid: uuidv4() });
              isready ? writeInDb(formData) : "";
            }}
            className="mt-3"
          >
            Crear Evento
          </button>
        </form>
      </div>
    </div>
  );
}
