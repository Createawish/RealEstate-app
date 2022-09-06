import React from 'react';
import style from "../navBar/NavBar.module.css";

const NavList = ({click}) => {
    return (
        <>
        <ul className={click ? style.active : style.navmenu}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Search</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        </>
    );
};

export default NavList;