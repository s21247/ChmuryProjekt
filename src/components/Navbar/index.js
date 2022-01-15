import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    Logo
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Logo to='/'>Restaurant</Logo>
                <Bars />
                <NavMenu>
                    <NavLink to='/menu' activeStyle>
                        Menu
                    </NavLink>
                    <NavLink to='/cart' activeStyle>
                        Your Cart
                    </NavLink>
                    <NavLink to='/about-us' activeStyle>
                        About Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;