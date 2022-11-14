import React from 'react';
import Tabs from './Tabs';
import stepsBreathingman1 from '../assets/images/stepsto-breathing.png';
import stepstoBreathingman2 from '../assets/images/steps-breathingman.png';
import userHead1 from '../assets/images/user-head1.png';
import userHead2 from '../assets/images/user-head2.png';
import userHead3 from '../assets/images/user-head3.png';
import userHead4 from '../assets/images/user-head4.png';
import breathingmanThree from '../assets/images/breathingman-three.png';
import breathingmanTwo from '../assets/images/breathingman-two.png';
import { Link } from "react-router-dom";

function Page_102() {
    return (
        <>
            <section className='page-cover text-center relative'>
                <h1 className='mt-3'>Give CPR</h1>
                <img src={stepstoBreathingman2} alt='steps-breathingman' title='steps-breathingman' className='img-fuild m-auto d-block breathing-img' />

                <div className='content-border_box'>
                    <p>Lay the person on his/her back, on a firm/flat surface or floor</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>Remove anything from behind their head gently, don’t roll the head over </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>Start CPR/chest compressions </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>Alert someone to call ambulance </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>Call for an AED machine, if it is available </p>
                    <div className='partition'></div>
                </div> .
                <h1 className='mb-5'>Effective CPR: The power to save is in your hands!!</h1>
                <p className='font600 mb-4'>Put one hand flat in the centre of the person’s chest, between the nipples</p>
                <p className='font600 mb-5'>Put the other hand on top Lock your fingers together</p>
                {/* <img src={tenAedLow} alt='Artificial External Defibrillator' title='Artificial External Defibrillator' className='img-fuild aed-img d-block' /> */}
                <img src={stepsBreathingman1} alt='steps-breathingman' title='steps-breathingman' className='img-fuild m-auto d-block' />

                <div className='img-box mt-4 mb-5'>
                    <img src={userHead1} alt='User Hand' title='User Hand' className='img-fuild m-auto d-inline-block' />
                    <img src={userHead2} alt='User Hand' title='User Hand' className='img-fuild m-auto d-inline-block' />
                    <img src={userHead3} alt='User Hand' title='User Hand' className='img-fuild m-auto d-inline-block' />
                    <img src={userHead4} alt='User Hand' title='User Hand' className='img-fuild m-auto d-inline-block' />
                </div>
                <h1 className='mb-5'>Body position during CPR</h1>
                <p className='font600 mb-5 mx-4'>Lean over the Chest, push straight down. DON’T bend the elbows </p>
                <img src={breathingmanThree} alt='steps-breathingman' title='steps-breathingman' className='img-fuild m-auto d-block' />
                <p className='font600 my-5'>Hand position during CPR Fingers interlocked</p>
                <img src={breathingmanTwo} alt='steps-breathingman' title='steps-breathingman' className='img-fuild m-auto d-block' />
                <p className='font600 my-5 mx-4'>Start CPR 100-120/min <br /> Go down at least 5 cm or 2 inches <br /> Be sure to let the chest rise between compressions</p>
                <Link to="/Page_103">
                    <button className="small-btn" >CONTINUE</button>
                </Link>

            </section>
        </>
    )
}

export default Page_102;




