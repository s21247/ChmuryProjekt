import React from 'react';
import UploadForm from '../components2/UploadForm'
import ImageGrid from "../ImageGrid";
import Menu from "../Menu/Menu";


const Movies = () => {
    return (
        <>
            <h1>Movies</h1>
            <UploadForm/>
            <ImageGrid/>
            <Menu/>
        </>
    );

}

export default Movies;