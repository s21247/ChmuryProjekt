import React from 'react';
import UploadForm from '../components2/UploadForm'
import ImageGrid from "../ImageGrid";
import MenuPage from "../Menu/MenuPage";


const Menu = () => {
    return (
        <>
            <h1>Menu</h1>
            <UploadForm/>
            <ImageGrid/>
            <MenuPage/>
        </>
    );
}

export default Menu;