// NavbarContext.js
import React, { createContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const disableNavbar = () => {
        setIsNavbarVisible(false);
    };

    const enableNavbar = () => {
        setIsNavbarVisible(true);
    };

    return (
        <NavbarContext.Provider value={{ isNavbarVisible, disableNavbar, enableNavbar }}>
            {children}
        </NavbarContext.Provider>
    );
};

export default NavbarContext;
