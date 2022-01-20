import React, {useEffect, useState} from "react";
import useFirestore from "../hooks/useFirestore";

const Starters = (data) => {
    const [starters, setStarters] = useState([]);
    const { docs } = useFirestore(data);
    let starterCounter = 0;

    useEffect(() => {
        let data = [];
        docs.map((docs,i) => {
            if (docs.inCart === true){
                starterCounter++;
                data.push(
                    <p className="title">docs.title</p>
                );
            }
        })
        setStarters(data);
    },[])

    return {starters, starterCounter};
}

export default Starters;