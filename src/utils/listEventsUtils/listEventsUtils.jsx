import { doc, getDoc,updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
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
    updateDataFromUser(data[event].uid,data[event].category, true,userUid);
    getData(setData,typeEvent);
    miBoton.innerText = "No Voy";
  } else {
    const id = event + ".assistants";
    await updateDoc(documentoHijoRef, {
      [id]: (data[event].assistants -= 1),
    });
    getData(setData,typeEvent);
    miBoton.innerText = "Voy";
    updateDataFromUser(data[event].uid,data[event].category, false,userUid);
  }
}

export async function checkEvents(userUid , setEventsToGo) {
  if (userUid) {
    let userRef = doc(db, "users", userUid);
    const docSnap = await getDoc(userRef);
    let currentEventsToGo = await docSnap.data().EventsToGo || [];
    setEventsToGo(currentEventsToGo);
  }
}

function orderEventAssistants(events) {
  const arrayEvents = Object.entries(events);

  arrayEvents.sort((a, b) => b[1].assistants - a[1].assistants);

  const objetoOrdenado = Object.fromEntries(arrayEvents);

  return objetoOrdenado;
}

async function updateDataFromUser(newEvent,typeEvent,action , userUid) {
  let userRef = doc(db, "users", userUid);
  const docSnap = await getDoc(userRef);
  let currentEventsToGo = await docSnap.data().EventsToGo;
  if (action) {
    let newArray=currentEventsToGo
    newArray.push({typeEvent,newEvent})
    await updateDoc(userRef, {
      EventsToGo:newArray
    });
  } else {
    currentEventsToGo = currentEventsToGo.filter((value) => value.newEvent !== newEvent);
    console.log(currentEventsToGo);
    await updateDoc(userRef, {
      EventsToGo: currentEventsToGo
    });
  }
}

export async function getImg(events,setImg) {
  let eventsUrl = {};
  for (let index = 0; index < events.length; index++) {
    const nameImg = "imgEvents/" + events[index]
    const storage = getStorage();
    let url = await getDownloadURL(ref(storage, nameImg));
    let uid=events[index]
    eventsUrl={...eventsUrl, [uid]:url}
  }

  setImg(eventsUrl)
}