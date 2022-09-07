import React from 'react';
import style from './Footer.module.css';
import {FaFacebook, FaInstagram,FaPinterest} from "react-icons/fa";


const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.social}>
                <FaFacebook className={style.icon}/>
                <FaInstagram className={style.icon}/>
                <FaPinterest className={style.icon}/>
            </div>
            <div className={style.container}>
                <div className={style.col}>
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className={style.col}>
                    <h3>Company</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className={style.col}>
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className={style.col}>
                    <h3>Information</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;