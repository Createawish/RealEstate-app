import React from 'react';
import style from './Featured.module.css';
import House1 from '../../assets/images/house1.jpg';
import Bed1 from '../../assets/images/bed1.jpg';
import Bed2 from '../../assets/images/bed2.jpg';
import Kitchen from '../../assets/images/kitchen.jpg';
import Bathroom from '../../assets/images/bath1.jpg';
import House2 from '../../assets/images/house2.jpg';
import Bed3 from '../../assets/images/bed3.jpg';
import Bed4 from '../../assets/images/bed4.jpg';
import LivingRoom from '../../assets/images/living-room.jpg';
import Bathroom2 from '../../assets/images/bath2.jpg'

const Featured = () => {
    return (
        <div className={style.featured}>
            <h1 className={style.title}> Top Featured Listings</h1>
            <p className={style.title}>Selected listings by City, State, & Zip based on views.</p>
            <div className={style.container}>
                <img src={House1} alt='' className={style.imgmain}/>
                <img src={Bed1} alt=''/>
                <img src={Bed2} alt=''/>
                <img src={Kitchen} alt=''/>
                <img src={Bathroom} alt=''/>
                <div className={style.discrip1}>
                    <div className={style.top}>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className={style.price}>$2,6,000</p>
                    </div>
                    <div className={style.grid}>
                        <div>
                            <div className={style.info}>
                                <p className={style.bold}>Bedrooms:</p>
                                <p>5</p>
                            </div>
                            <div className={style.info}>
                                <p className={style.bold}>Bathrooms:</p>
                                <p>5</p>
                            </div>
                        </div>
                        <div>
                            <div className={style.info}>
                                <p className={style.bold}>Square Feet:</p>
                                <p>8,138</p>
                            </div>
                            <div className={style.info}>
                                <p className={style.bold}>Est Payment:</p>
                                <p>$14,797</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={style.text1}>
                        <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room,workout facility, and built-in sauna. </p>
                        <button className='btn'>View Listing</button>
                    </div>
            </div>
                {/*Section */}
                <div className={style.container}>
                    <img className={style.order2} src={Bed3} alt=''/>
                    <img className={style.order3} src={Bed4} alt=''/>
                    <img src={House2} alt='' className={style.imgmain}/>
                    <img className={style.order4} src={LivingRoom} alt=''/>
                    <img className={style.order5} src={Bathroom2} alt=''/>
                    <div className={style.text2}>
                        <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room,workout facility, and built-in sauna. </p>
                        <button className='btn'>ViewListing</button>
                    </div>
                    <div className={style.discrip2}>
                        <div className={style.top}>
                            <h2>123 Acme St. Dallas, TX</h2>
                            <p>House for Sale</p>
                            <p className={style.price}>$2,6,000</p>
                        </div>
                        <div className={style.grid}>
                            <div>
                                <div className={style.info}>
                                    <p className={style.bold}>Bedrooms:</p>
                                    <p>5</p>
                                </div>
                                <div className={style.info}>
                                    <p className={style.bold}>Bathrooms:</p>
                                    <p>5</p>
                                </div>
                            </div>
                            <div>
                                <div className={style.info}>
                                    <p className={style.bold}>Square Feet:</p>
                                    <p>8,138</p>
                                </div>
                                <div className={style.info}>
                                    <p className={style.bold}>Est Payment:</p>
                                    <p>$14,797</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Featured;