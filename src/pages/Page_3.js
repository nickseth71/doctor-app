import React from 'react';
import Tabs from '../components/Tabs';
import heart from '../assets/images/heart.png';
import wave from '../assets/images/wave.png';
import { Link } from "react-router-dom";

function Page_3() {
    return (
        <>
            <section className='page-cover text-center'>
                <h1 className='mb-4'>What is Sudden Cardiac Arrest?</h1>
                <p className='mb-5'>It is a malfunctioning of the electrical system of the heart caused by sudden ventricular fibrillation</p>
                <span className='d-block mb-3 font600'>Normal beating of Heart</span>
                <img src={heart} alt='Heart' title='Heart' className='img-fuild d-inline-block' />
                <img src={wave} alt='Heart wave' title='Heart wave' className='img-fuild d-inline-block' />
                <span className='d-block mt-5 mb-4 font600'>Sudden Cardiac Arrest/ventricular fibrillation</span>

                <img src={heart} alt='Heart' title='Heart' className='img-fuild d-inline-block' />
                <img src={wave} alt='Heart wave' title='Heart wave' className='img-fuild d-inline-block' />

                <div className='text-right mt-4'>
                    <Link to='/Page_4'>
                        <button className="small-btn" >CONTINUE</button>
                    </Link>
                </div>

            </section>
            <Tabs />
        </>
    )
}

export default Page_3;




