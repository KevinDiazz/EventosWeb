import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
export function checkCharacters(
  valueLength,
  maxValue,
  setState,
  state,
  stateKey
) {
  if (valueLength.length < maxValue) {
    const newState = { ...state, [stateKey]: maxValue - valueLength.length };
    setState(newState);
  } else {
    setState({ ...state, [stateKey]: 0 });
  }
}

//validacion de informacion en el form
export function submitValidate(dataForm, setStyleIsOk) {
  var isOk = true;
  Object.keys(dataForm).forEach((value) => {
    if (dataForm[value] === null) {
      isOk = false;
      setStyleIsOk(false);
    }
  });
  return isOk;
}

export async function writeInDb(data, uid) {
  const usuariosCollection = doc(
    db,
    "events",
    data.category.split(" ").join("")
  );
  const usuarioInfo = doc(db, "users", uid);
  const docSnap = await getDoc(usuarioInfo);
  let eventsCreated = docSnap.data().createdEvents;
  let newArray = eventsCreated || [];
  newArray.push(data);
  await updateDoc(usuarioInfo, {
    createdEvents: newArray,
  });
  await updateDoc(usuariosCollection, { [data.uid]: data }, { merge: true }); // se añade el evento creado al documento de la categoria
}

export function submit(
  e,
  formData,
  setStyleIsOk,
  id,
  setFormData,
  setIsDone,
  imgEvent,
  setEventsToGo
) {
  e.preventDefault();
  let isready = submitValidate(formData, setStyleIsOk, setIsDone);
  isready && imgEvent !== null ? addImageInStorage(formData.uid, imgEvent) : "";
  imgEvent === null ? (isready = false) : "";
  isready ? writeInDb(formData, id) : "";
  isready
    ? setTimeout(() => {
        setIsDone(true);
      }, 3000)
    : "";
isready? setStyleIsOk(true):setStyleIsOk(false)
  return isready;
}

function addImageInStorage(name, file) {
  const storage = getStorage();
  const imgEvent = ref(storage, "imgEvents/" + name);
  uploadBytes(imgEvent, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
}
