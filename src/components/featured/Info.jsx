import React from 'react';
import style from "./Featured.module.css";

const Info = ({adress,name,price,item1,item2,quantity1,quantity2,title1,title2,num,pay}) => {
    return (
 <>
            <div className={style.top}>
                <h2>{adress}</h2>
                <p>{name}</p>
                <p className={style.price}>{price}</p>
            </div>
            <div className={style.grid}>
                <div>
                    <div className={style.info}>
                        <p className={style.bold}>{item1}:</p>
                        <p>{quantity1}</p>
                    </div>
                    <div className={style.info}>
                        <p className={style.bold}>{item2}:</p>
                        <p>{quantity2}</p>
                    </div>
                </div>
                <div>
                    <div className={style.info}>
                        <p className={style.bold}>{title1}:</p>
                        <p>{num}</p>
                    </div>
                    <div className={style.info}>
                        <p className={style.bold}>{title2}:</p>
                        <p>{pay}</p>
                    </div>
                </div>
            </div>
     </>
    );
};

export default Info;