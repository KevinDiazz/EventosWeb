import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export function orderEventAssistants(events) {
  let arrayEvents = Object.entries(events);
  arrayEvents = arrayEvents.sort((a, b) => b[1].assistants - a[1].assistants);
  const arrayOrdenado = arrayEvents.map(([key, value]) => ({ [key]: value }));
  return arrayOrdenado;
}
export async function BestEvents(setTopEvents) {
  let bestEvents = [];
  const docRef = doc(db, "variables", "fZWv6TT9HaZs8huwI0Em");
  const categoriesEvents = await getDoc(docRef);
  let topEvents = categoriesEvents.data();

  for (let index = 0; index < topEvents.tiposEvento.length; index++) {
    let usuariosCollection = doc(
      db,
      "events",
      topEvents.tiposEvento[index].split(" ").join("")
    );
    let categoriesEvents = await getDoc(usuariosCollection);
    let orderEvents = categoriesEvents.data();
    let top = orderEventAssistants(orderEvents);
    //   console.log(top)
    bestEvents.push(top[0]);
  }
  setTopEvents(bestEvents);
}
export async function getImg(events,setImg) {
  let eventsUrl = {};
  for (let index = 0; index < events.length; index++) {
    const nameImg = "imgEvents/" + Object.keys(events[index])[0]
    const storage = getStorage();
    let url = await getDownloadURL(ref(storage, nameImg));
    let uid=Object.keys(events[index])[0]
    eventsUrl={...eventsUrl, [uid]:url}
  }

  setImg(eventsUrl)
}
