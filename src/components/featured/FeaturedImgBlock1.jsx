import React from 'react';
import House1 from "../../assets/images/house1.jpg";
import style from "./Featured.module.css";
import Bed1 from "../../assets/images/bed1.jpg";
import Bed2 from "../../assets/images/bed2.jpg";
import Kitchen from "../../assets/images/kitchen.jpg";
import Bathroom from "../../assets/images/bath1.jpg";

const FeaturedImgBlock1 = () => {
    return (
        <>
            <img src={House1} alt='' className={style.imgmain}/>
            <img src={Bed1} alt=''/>
            <img src={Bed2} alt=''/>
            <img src={Kitchen} alt=''/>
            <img src={Bathroom} alt=''/>
        </>
    );
};

export default FeaturedImgBlock1;