import React from 'react';
import MenuPage from "./Menu/MenuPage";
import "../../styles/menu.css";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <h1>Menu</h1>
                <MenuPage/>
            </div>
        </>
    );
}

export default Menu;