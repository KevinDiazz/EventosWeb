import { doc, getDoc,updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export async function getData(setData , typeEvent) {
  const ref = doc(db, "events", typeEvent.split(" ").join(""));
  const elemt = await getDoc(ref);
  const eventsData = elemt.data();
  const eventsInOrder = orderEventAssistants(eventsData);
  setData(eventsInOrder);
}

export async function updateEventsToGo(event,documentoHijoRef,data,userUid,setData,typeEvent) {
  const miBoton = document.getElementById(event);
  console.log(miBoton);
  if (miBoton.textContent == "Voy") {
    const id = event + ".assistants";
    await updateDoc(documentoHijoRef, {
      [id]: (data[event].assistants += 1),
    });
    updateDataFromUser(data[event].uid, true,userUid);
    getData(setData,typeEvent);
    miBoton.innerText = "No Voy";
  } else {
    const id = event + ".assistants";
    await updateDoc(documentoHijoRef, {
      [id]: (data[event].assistants -= 1),
    });
    getData(setData,typeEvent);
    miBoton.innerText = "Voy";
    updateDataFromUser(data[event].uid, false,userUid);
  }
}

export async function checkEvents(userUid , setEventsToGo) {
  if (userUid) {
    let userRef = doc(db, "users", userUid);
    const docSnap = await getDoc(userRef);
    let currentEventsToGo = docSnap.data().EventsToGo || [];
    console.log(currentEventsToGo);
    setEventsToGo(currentEventsToGo);
  }
}

function orderEventAssistants(events) {
  const arrayEvents = Object.entries(events);

  arrayEvents.sort((a, b) => b[1].assistants - a[1].assistants);

  const objetoOrdenado = Object.fromEntries(arrayEvents);

  return objetoOrdenado;
}

async function updateDataFromUser(newEvent, action , userUid) {
  let userRef = doc(db, "users", userUid);
  const docSnap = await getDoc(userRef);
  let currentEventsToGo = docSnap.data().EventsToGo || [];
  if (action) {
    currentEventsToGo.push(newEvent);
    const newEventToGo = currentEventsToGo;
    console.log(newEventToGo);
    await updateDoc(userRef, {
      EventsToGo: newEventToGo,
    });
  } else {
    currentEventsToGo = currentEventsToGo.filter((value) => value !== newEvent);
    await updateDoc(userRef, {
      EventsToGo: currentEventsToGo,
    });
  }
}
