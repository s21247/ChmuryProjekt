import {useEffect, useState} from "react";
import { db } from "../../firebase-config/firebase-config";
import {onSnapshot, query, collection } from "firebase/firestore";

const useFirestore = (data) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(collection(db, data));

        const unsub = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        });
        return () => unsub();
    }, [data])

    return { docs };
}

export default useFirestore;