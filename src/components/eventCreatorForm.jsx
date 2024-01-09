import { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EventCreatorFormContainer from "./eventCreatorFormContainer";
//recibe un estado de profile , para saber si estar visible o no
export default function CreateEvent({showForm,setShowForm}) {
  // num of characters in labels
  const [characters, setCharacters] = useState({
    textarea: 800,
    descriptionInput: 100,
    titleInput: 30,
  });
  const [styleIsOk, setStyleIsOk]=useState(true)
  const [isLoading,setIsLoading]=useState(false)
  const [isDone,setIsDone]=useState(false)
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
const [id,setID]=useState(null)
  //DB collections
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario está autenticado
        setID(user.uid);
        console.log("ID del usuario:", id);
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
      setCharacters={setCharacters}
      characters={characters}
      showForm={showForm}
      setShowForm={setShowForm}
      id={id}
      styleIsOk={styleIsOk}
      setStyleIsOk={setStyleIsOk}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      isDone={isDone}
      setIsDone={setIsDone}
    ></EventCreatorFormContainer>
  );
}
