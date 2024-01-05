import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export async function userInfo(uid, setData) {
  const ref = doc(db, "users", uid);
  const elemt = await getDoc(ref);
  const userData = elemt.data();
  console.log(userData);
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

export async function getEvents(data,setData) {
  let events=[]
  for (let i = 0; i < data.EventsToGo.length; i++) {
    const ref = doc(db, "events", data.EventsToGo[i].typeEvent.split(" ").join(""));
    const elemt = await getDoc(ref);
    const userData = elemt.data();
   events.push(userData[data.EventsToGo[i].newEvent])
  }
  setData(events)
}
