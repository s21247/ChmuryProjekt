import { db } from "../../firebase-config/firebase-config";
import {collection, addDoc} from "firebase/firestore";

async function emptyLocalStorage() {
    const arr = JSON.parse(localStorage.getItem('cart'));

    await addDoc(collection(db,'cart'), Object.assign({}, arr));

    localStorage.clear()
}


export default emptyLocalStorage;