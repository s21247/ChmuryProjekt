import { db } from "../../firebase-config/firebase-config";

function emptyLocalStorage(){
    const arr = JSON.parse(localStorage.getItem('cart'));
    console.log(Object.assign({},arr));
    db
        .collection('cart')
        .add(Object.assign({},arr))
        .then(r => console.log(r))
    localStorage.clear()
}


export default emptyLocalStorage;