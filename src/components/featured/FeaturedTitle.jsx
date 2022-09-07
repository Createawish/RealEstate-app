import React from 'react';
import style from "./Featured.module.css";

const FeaturedTitle = ({name,description}) => {
    return (
        <div>
            <h1 className={style.title}> {name}</h1>
            <p className={style.title}>{description}</p>
        </div>
    );
};

export default FeaturedTitle;