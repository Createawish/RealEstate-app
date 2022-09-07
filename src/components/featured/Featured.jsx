import React from 'react';
import style from './Featured.module.css';
import FeaturedImgBlock1 from "./FeaturedImgBlock1";
import FeatureImgBlock2 from "./FeatureImgBlock2";
import FeaturedTitle from "./FeaturedTitle";
import Button from "../button/Button";
import Info from "./Info";
import {title,info} from "../../data/data";


const Featured = () => {
    return (
        <div className={style.featured}>
            <FeaturedTitle description={title.description} name={title.name}/>
            <div className={style.container}>
               <FeaturedImgBlock1/>
               <div className={style.discrip1}>
                <Info adress={info.address} name={info.name} price={info.price} title1={info.items.title1} title2={info.items.title2}
                      quantity1={info.items.quantity1} quantity2={info.items.quantity2} item1={info.items.item1} item2={info.items.item2}
                      num={info.items.num} pay={info.items.pay}/>
               </div>
                    <div className={style.text1}>
                        <p>{info.description1} </p>
                        <Button name='View Listing'/>
                    </div>
            </div>
                {/*Section */}
                <div className={style.container}>
                    <FeatureImgBlock2/>
                    <div className={style.text2}>
                        <p>{info.description1} </p>
                        <Button name= 'View Listing'/>
                    </div>
                    <div className={style.discrip2}>
                        <Info adress={info.address} name={info.name} price={info.price} title1={info.items.title1} title2={info.items.title2}
                                    quantity1={info.items.quantity1} quantity2={info.items.quantity2} item1={info.items.item1} item2={info.items.item2}
                                    num={info.items.num} pay={info.items.pay}/>
                    </div>
            </div>
        </div>
    );
};

export default Featured;