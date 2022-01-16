import React from "react";
import useFirestore from "./components2/hooks/useFirestore";


const ImageGrid = () => {
    const {docs} = useFirestore('images')
    console.log(docs);
    return (
        <div>
            {
                docs && docs.map(doc => {
                    return <div key={doc.id}>
                        <img src={doc.url} alt="u"/>
                    </div>
                })
            }
        </div>
    )

}
export default ImageGrid;