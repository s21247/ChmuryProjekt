import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({file,setFile}) => {

    const {url,progress} = useStorage(file);
    console.log(progress,url);
    return <div>
        {progress < 100 && <h3>Uploading..{progress}%</h3>}

    </div>
}

export default ProgressBar;