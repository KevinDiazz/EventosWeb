import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export async function userInfo(uid, setData) {
  const ref = doc(db, "users", uid);
  const elemt = await getDoc(ref);
  const userData = elemt.data();
  setData(userData);
}

export async function getUser(setUserId) {
  const auth = getAuth();
  onAuthStateChanged(auth, (usuario) => {
    if (usuario) {
      // El usuario está autenticado, puedes acceder a su UID
      const uidUsuario = usuario.uid;
      setUserId(uidUsuario);
    } else {
      // El usuario no está autenticado
      console.log("No hay usuario autenticado");
    }
  });
}

export async function getEvents(data, setData) {
  let events = [];
  if (data.EventsToGo) {
    for (let i = 0; i < data.EventsToGo.length; i++) {
      const ref = doc(
        db,
        "events",
        data.EventsToGo[i].typeEvent.split(" ").join("")
      );
      const elemt = await getDoc(ref);
      const userData = elemt.data();
      events.push(userData[data.EventsToGo[i].newEvent]);
    }
    setData((data) => ({ ...data, eventsToGoInfo: events }));
  }
}

export async function getImg(eventsToGo,createEvents,setImg) {
  let eventsUrl={}
  for (let index = 0; index < eventsToGo.length; index++) {
    const nameImg = "imgEvents/" + eventsToGo[index].newEvent;
    const storage = getStorage();
    let url = await getDownloadURL(ref(storage, nameImg));
    let uid=eventsToGo[index].newEvent
    eventsUrl={...eventsUrl, [uid]:url}
  }
  for (let index = 0; index < createEvents.length; index++) {
    const nameImg = "imgEvents/" + createEvents[index].uid;
    const storage = getStorage();
    let url = await getDownloadURL(ref(storage, nameImg));
    let uid=createEvents[index].uid
    eventsUrl={...eventsUrl, [uid]:url}
  }
  setImg(eventsUrl)
}
