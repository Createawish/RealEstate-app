import React from 'react';
import style from "./Featured.module.css";
import Bed3 from "../../assets/images/bed3.jpg";
import Bed4 from "../../assets/images/bed4.jpg";
import House2 from "../../assets/images/house2.jpg";
import LivingRoom from "../../assets/images/living-room.jpg";
import Bathroom2 from "../../assets/images/bath2.jpg";

const FeatureImgBlock2 = () => {
    return (
        <>
            <img className={style.order2} src={Bed3} alt=''/>
            <img className={style.order3} src={Bed4} alt=''/>
            <img src={House2} alt='' className={style.imgmain}/>
            <img className={style.order4} src={LivingRoom} alt=''/>
            <img className={style.order5} src={Bathroom2} alt=''/>
        </>
    );
};

export default FeatureImgBlock2;