import React from 'react';
import Tabs from '../components/Tabs';
import heart from '../assets/images/heart.png';
import breathing from '../assets/images/breathing.png';
import heartwave from '../assets/images/heart-wave.png';
import { Link } from "react-router-dom";
function Page_7() {
    return (
        <>
            <section className='page-cover text-center'>
                <img src={heart} alt='Heart' title='Heart' className='img-fuild d-block text-left opacity hide-img' />
                <div className='content-border_box'>
                    <p className='borderBottom'>Cardiopulmonary resuscitation (CPR) is an emergency procedure that can help sav a person’s life if the he or she has had a Cardiac arrest</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Cardiac arrest means that the heart suddenly stops beating</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>This disrupts the heart's pumping action and the brain and rest of the body do not get blood supply to keep them working</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>CPR uses chest compressions to imitate the pumping action of the heart so that blood keeps flowing throughout the body and keeps the organs intact</p>
                    <div className='partition'></div>
                </div>
                <img src={breathing} alt='Breathing' title='Breathing' className='breathing-img img-fuild d-block text-left' />
                <img src={heartwave} alt='Heart Wave' title='Heart Wave' className='heartwave-img-left img-fuild d-block ' />

                <div className='text-right mt-4'>
                    <Link to="/Page_3">
                        <button className="small-btn" >CONTINUE</button>
                    </Link>
                </div>
            </section>
            <Tabs />
        </>
    )
}

export default Page_7;




