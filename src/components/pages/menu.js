import React from 'react';
import UploadForm from '../components2/UploadForm'
import ImageGrid from "../ImageGrid";
import MenuPage from "../Menu/MenuPage";
import "../styles/menu.css";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <h1>Menu</h1>
                <UploadForm/>
                <ImageGrid/>
                <MenuPage/>
            </div>
        </>
    );
}

export default Menu;