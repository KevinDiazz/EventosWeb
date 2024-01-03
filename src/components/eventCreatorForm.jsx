import { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EventCreatorFormContainer from "./eventCreatorFormContainer";
//recibe un estado de profile , para saber si estar visible o no
export default function CreateEvent({ isVisible }) {
  // num of characters in labels
  const [characters, setCharacters] = useState({
    textarea: 800,
    descriptionInput: 100,
    titleInput: 30,
  });
  const [formData, setFormData] = useState({
    title: null,
    category: null,
    description: null,
    place: null,
    date: null,
    hourStart: null,
    hourFinish: null,
    fullDescription: null,
    assistants: 1,
    uid: null,
  });
  //form inputs values
  const formRefsValues = {
    textarea: useRef(null),
    inputTitle: useRef(null),
    inputTitle: useRef(null),
    inputDescripcion: useRef(null),
    selectInfo: useRef(null),
    placeInfo: useRef(null),
    dateInfo: useRef(null),
    hourStart: useRef(null),
    hourEnd: useRef(null),
  };
  const form = useRef(null);
  let Id = null;
  //DB collections
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario está autenticado
        Id = user.uid;
        console.log("ID del usuario:", Id);
      } else {
        // El usuario no está autenticado
        console.log("Usuario no autenticado");
      }
    });
  }, []);

  return (
    <EventCreatorFormContainer
      formData={formData}
      setFormData={setFormData}
      refInputsValues={formRefsValues}
      isVisible={isVisible}
      setCharacters={setCharacters}
      characters={characters}
    ></EventCreatorFormContainer>
  );
}
