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
                <Logo to='/'>Restauracja</Logo>
                <Bars />
                <NavMenu>
                    <NavLink to='/Movies' activeStyle>
                        Movies
                    </NavLink>
                    <NavLink to='/extras' activeStyle>
                        Extras
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