import React from 'react';
import style from './Main.module.css';
import Apt1 from '../../assets/images/apt1.jpeg';
import Apt2 from '../../assets/images/apt2.jpeg';
import Apt3 from '../../assets/images/apt3.jpeg';

const Main = () => {
    return (
        <div className={style.main}>
            <h1>Find Best Rated Proporties</h1>
            <div className={style.text}>
                <p><span className={style.bold}>All</span></p>
                <p >Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className={style.container}>
                <img src={Apt1} alt=''/>
                <img src={Apt2} alt=''/>
                <img src={Apt3} alt=''/>
            </div>
            <button className={style.btn}>View All</button>
        </div>
    );
};

export default Main;