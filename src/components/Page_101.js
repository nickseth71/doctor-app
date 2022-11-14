import React from 'react';
import Tabs from './Tabs';
import tenman from '../assets/images/10man.png';
import tenHelpMen from '../assets/images/10help-men.png';
import tenpils from '../assets/images/10pils.png';
import noseMan from '../assets/images/10nose.png';
import tenCheckup from '../assets/images/tenCheckup.png';
import tenFront from '../assets/images/10front.png';
import { Link } from "react-router-dom";
function Page_101() {
    return (
        <>
            <section className='page-cover text-center'>
                <h1 className='mb-4'>Recognise cardiac arrest</h1>
                <p className='mb-4 font600'>If you find a collapsed person</p>
                <img src={tenman} alt='Sleeping Man' title='Sleeping Man' className='img-fuild m-auto d-block' />

                <p className='my-5 mx-4 font600'>Every year in India nearly 2 million peoplediedue to out-of-hospitalsudden cardiac  arrest</p>
                <p className='my-5 mx-4 font600'>Gently but firmly tap the shoulders, chest and check and ask  “Hello?! Can you hear me?!” Are you OK?”</p>
                <img src={tenHelpMen} alt='Help to Man' title='Help to Man' className='img-fuild m-auto d-block' />
                <p className='my-5 mx-4 font600'>If there was no response to your voice, check pulse</p>
                <img src={tenpils} alt='Pils Hand' title='Pils Hand' className='img-fuild d-inline-block mr-5' />
                <img src={noseMan} alt='Nose Man' title='Nose Man' className='img-fuild d-inline-block' />
                <p className='my-5 mx-4 font600'>Check breathing by keeping your palm on nostril/ abdomen </p>
                <img src={tenCheckup} alt='Pils Hand' title='Pils Hand' className='img-fuild d-inline-block mr-5' />
                <img src={tenFront} alt='Front View Doctor' title='Front View Doctor' className='img-fuild d-inline-block' />
                <div className='content-border_box'>
                    <p>If there is no response, no pulse, no breathing then it means the person has had a cardiac arrest</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>Person will be dead if YOU don’t help him</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box mb-5'>
                    <p>Do not give ANYTHING by mouth: Water, food, medicines</p>
                    <div className='partition'></div>
                </div>
                <Link to="/Page_102">
                    <button className="small-btn" >CONTINUE</button>
                </Link>
            </section>
            <Tabs />
        </>
    )
}

export default Page_101;




