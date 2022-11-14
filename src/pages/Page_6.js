import React from 'react';
import Tabs from '../components/Tabs';
import breathingMan from '../assets/images/breathing-man.png';
import clock from '../assets/images/clock.png';
import heartwave from '../assets/images/heart-wave.png';
import { Link } from "react-router-dom";

function Page_5() {
    return (
        <>
            <section className='page-cover text-center'>
                <div className='page6-wrap'>
                <img src={clock} alt='Clock' title='Clock' className='img-fuild d-block  clock-img' />
                <h1 className='mb-4'>Why is Time of essence </h1>
                <div className='content-border_box'>
                    <p className='borderBottom'>Cardiac activity must be re-started in 3 minutes otherwise brain will get permanent damage</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Without immediate help the victim’s chances of survival are nearly zero</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Every 1 minute delay in initiating life saving measures by bystanders decreases the chances of survival by 10%</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Without CPR and/or the use of a Shock Machine (AED), death will occur in a few minutes (8-10 minutes)</p>
                    <div className='partition'></div>
                </div>
                <img src={breathingMan} alt='breathingMan' title='breathingMan' className='breathingmen-img img-fuild d-block ' />
                <img src={heartwave} alt='Heart Wave' title='Heart Wave' className='heartwave-img-right img-fuild d-block ' />

                <div className='text-right mt-4'>
                    <Link to="/Page_9">
                        <button className="small-btn" >CONTINUE</button>
                    </Link>
                </div>
                </div>
            </section>
            <Tabs />
        </>
    )
}

export default Page_5;




