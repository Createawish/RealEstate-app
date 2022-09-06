import React,{useState} from 'react';
import style from './NavBar.module.css';
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {FaRegTimesCircle} from "react-icons/fa";
import {BsFillHouseFill} from "react-icons/bs";

const NavBar = () => {
    const [click, setClick] = useState(false)


    const handleClick =() => setClick(!click)


    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <h1><span><BsFillHouseFill/>Real</span>Estate</h1>
                <button className='btn'>Sign In</button>
                <ul className={click ? style.active : style.navmenu}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className={style.hamburger} onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className={style.icon}/>) :
                   ( <HiOutlineMenuAlt4 className={style.icon}/>)}
                </div>
            </div>

        </div>
    );
};

export default NavBar;