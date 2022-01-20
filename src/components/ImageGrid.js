import React from "react";
import useFirestore from "./hooks/useFirestore";


const ImageGrid = () => {
    const {docs} = useFirestore('images')
    console.log(docs);
    return (
        <div className="sliderMenuImageGrid">
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