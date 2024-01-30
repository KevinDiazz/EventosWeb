import { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EventCreatorFormContainer from "./eventCreatorFormContainer.jsx";
import React from 'react';
import { v4 as uuidv4 } from "uuid";
//recibe un estado de profile , para saber si estar visible o no
export default function CreateEvent({showForm,setShowForm,userData,setUserData,uid}) {
  // num of characters in labels
  const [characters, setCharacters] = useState({
    textarea: 800,
    descriptionInput: 100,
    titleInput: 30,
  });
  const [imgEvent,setImgEvent]=useState(null)
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
    uid: uuidv4(),
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
    img:useRef(null)
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
      imgEvent={imgEvent}
      setImgEvent={setImgEvent}
      setUserData={setUserData}
      uid={uid}
      userData={userData}
    ></EventCreatorFormContainer>
  );
}
