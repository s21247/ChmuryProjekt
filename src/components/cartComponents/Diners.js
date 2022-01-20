import React, {useEffect, useState} from "react";
import useFirestore from "../components2/hooks/useFirestore";

const Diners = (data) => {
    const [diners, setDiners] = useState([]);
    const { docs } = useFirestore(data);
    let dinersCounter = 0;

    useEffect(() => {
        let data = [];
        docs.map((docs,i) => {
            if (docs.inCart === true){
                dinersCounter++;
                data.push(
                    <p className="title">docs.title</p>
                );
            }
        })
        setDiners(data);
    },[])

    return {diners, dinersCounter};
}

export default Diners;