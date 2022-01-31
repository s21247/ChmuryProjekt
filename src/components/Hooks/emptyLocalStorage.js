import { db } from "../../firebase-config/firebase-config";
import {setDoc, doc} from "firebase/firestore";
import {getAuth, onAuthStateChanged, signInAnonymously, signOut} from "firebase/auth";
const auth = getAuth();

async function emptyLocalStorage() {
    const arr = JSON.parse(localStorage.getItem('cart'));

    await signInAnonymously(auth)
        .then(() => {
            console.log("Sign In Anonymously")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Code: " + errorCode);
            console.log("Error Message: " + errorMessage);
        });

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const uid = user.uid;
            await setDoc(doc(db,'cart', uid), Object.assign({}, arr));

            signOut(auth).then();
        }
    })



    localStorage.clear();
    alert("We received your order");
    window.location.reload();
}


export default emptyLocalStorage;
