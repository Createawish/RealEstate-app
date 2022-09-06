import React,{useState} from 'react';
import style from './NavBar.module.css';
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {FaRegTimesCircle} from "react-icons/fa";
import {BsFillHouseFill} from "react-icons/bs";
import NavList from "../navList/NavList";

const NavBar = () => {
    const [click, setClick] = useState(false)


    const handleClick =() => setClick(!click)


    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <h1><span><BsFillHouseFill/>Real</span>Estate</h1>
                <button className='btn'>Sign In</button>
                <NavList click={click}/>
                <div className={style.hamburger} onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className={style.icon}/>) :
                   ( <HiOutlineMenuAlt4 className={style.icon}/>)}
                </div>
            </div>

        </div>
    );
};

export default NavBar;