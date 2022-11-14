import React from 'react';
import Tabs from '../components/Tabs';
import heart from '../assets/images/heart.png';
import breathing from '../assets/images/breathing.png';
import heartwave from '../assets/images/heart-wave.png';
import { Link } from "react-router-dom";
function Page_5() {
    return (
        <>
            <section className='page-cover text-center'>
                <img src={heart} alt='Heart' title='Heart' className='img-fuild d-block text-left opacity hide-img' />
                <h1 className='mb-4'>Why is it important for Indians to learn CPR</h1>
                <div className='content-border_box'>
                    <p className='borderBottom'>Every year in India nearly 2 million peoplediedue to out-of-hospitalsudden cardiac  arrest</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Less than 1% such victims survive due to minimal public awareness  on how to handle such emergencies</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Immediate CPR can double or triple chances of survival after cardiac arrest</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>If you know CPR you may be able to save a life one day!!</p>
                    <div className='partition'></div>
                </div>
                <img src={breathing} alt='Breathing' title='Breathing' className='breathing-img img-fuild d-block text-left' />
                <img src={heartwave} alt='Heart Wave' title='Heart Wave' className='heartwave-img-left img-fuild d-block ' />

                <div className='text-right mt-4'>
                    <Link to="/Page_6">
                        <button className="small-btn" >CONTINUE</button>
                    </Link>
                </div>
            </section>
            <Tabs />
        </>
    )
}

export default Page_5;




