import { doc, getDoc,updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
export function checkCharacters(valueLength, maxValue, setState,state,stateKey) {
    if (valueLength.length < maxValue) {
const newState= {...state,[stateKey]:maxValue - valueLength.length}
      setState(newState);
    } else {
      setState({...state,[stateKey]:0});
    }
  }

  //validacion de informacion en el form
 export function submitValidate(dataForm) {
    var isOk = true;
    Object.keys(dataForm).forEach((value) => {
      if (dataForm[value] === null) {
        isOk = false;
      }
    });
    return isOk;
  }

 export async function writeInDb(data) {
    const usuariosCollection = doc(
      db,
      "events",
      data.category.split(" ").join("")
    );
    console.log(usuariosCollection)
    await updateDoc(usuariosCollection, {[data.uid]:data}, {merge:true}) // se añade el evento creado al documento de la categoria
  }