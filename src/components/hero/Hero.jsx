import React from 'react';
import style from './Hero.module.css'
import {AiOutlineSearch} from "react-icons/ai";

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.content}>
                <h1>Find the perfect place</h1>
                <p className={style.search}>Search  the lagest selection of luxury high-rise apartments, multi-family homes, and luxury homes.</p>
            <form className={style.form}>
                <div>
                    <input type='text' placeholder='Enter Keyword...' className={style.inputform}/>
                </div>
                <div className={style.radio}>
                    <input type='radio' checked/>
                    <label>Buy</label>
                    <input type='radio' />
                    <label>Rent</label>
                    <button type="submit">
                        <AiOutlineSearch className={style.icon}/>
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Hero;