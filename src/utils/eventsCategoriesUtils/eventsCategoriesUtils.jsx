import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function getUrlIcons(eventsCategorieName) {
  let urlIcons = {};
  for (let i = 0; i < eventsCategorieName.tiposEvento.length; i++) {
    const nameImg = "iconos/iconos/" + eventsCategorieName.tiposEvento[i] + ".png";
    const storage = getStorage();
    let url = await getDownloadURL(ref(storage, nameImg));
    urlIcons = { ...urlIcons, [eventsCategorieName.tiposEvento[i]]: url };
  }
 return urlIcons;
}

export async function fetchData(){
  try {
    const docRef = doc(db, "variables", "fZWv6TT9HaZs8huwI0Em");
    const docSnap = await getDoc(docRef);
    return docSnap
  } catch (error) {
  }
};

 export async function data(){
   const result= await fetchData()
   const url = await getUrlIcons(result.data())
return [result.data() , url]
}
