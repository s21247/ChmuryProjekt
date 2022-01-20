import React, {useEffect, useState} from "react";
import useFirestore from "../components2/hooks/useFirestore";

const Salads = (data) => {
    const [salads, setSalads] = useState([]);
    const { docs } = useFirestore(data);
    let saladCounter = 0;

    useEffect(() => {
        let data = [];
        docs.map((docs,i) => {
            if (docs.inCart === true){
                saladCounter++;
                data.push(
                    <p className="title">docs.title</p>
                );
            }
        })
        setSalads(data);
    },[])

    return {salads, saladCounter};
}

export default Salads;