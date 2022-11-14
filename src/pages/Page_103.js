import React from 'react';
import Tabs from '../components/Tabs';
import tenAedLock from '../assets/images/aed-lock.png';
import tenAedHand from '../assets/images/aed-hand.png';
import tenAedMan from '../assets/images/aed-man.png';
import tenAedLow from '../assets/images/aed-low.png';
import { Link } from "react-router-dom";

function Page_103() {
    return (
        <>
            <section className='page-cover text-center relative'>
                <h1 className='mb-4'>Use an Artificial External Defibrillator (AED or “shock machine”)</h1>
                <img src={tenAedLock} alt='Artificial External Defibrillator' title='Artificial External Defibrillator' className='img-fuild m-auto d-block' />
                <img src={tenAedLow} alt='Artificial External Defibrillator' title='Artificial External Defibrillator' className='img-fuild aed-img d-block' />

                <div className='content-border_box'>
                    <p>This is a machine that analyzes the victim’s hythm and provide a shock as quickly as possible when needed </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>It is meant for public use only</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>You don’t need to be trained to use it </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>It will tell you what to do</p>
                    <div className='partition'></div>
                </div>
                <h4>Why is a shock needed </h4>
                <div className='content-border_box'>
                    <p>Cardiac arrest is due to electrical malfunctioning of the heart, usually caused by sudden ventricular fibrillation</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>An AED shocks this abnormal rhythm back to normal </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>It will only do so if this it is needed</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>So you can’t do any harm by using an AED</p>
                    <div className='partition'></div>
                </div>
                <h6 className='mb-4'>Ask for an AED</h6>
                <img src={tenAedLock} alt='Artificial External Defibrillator' title='Artificial External Defibrillator' className='img-fuild m-auto d-block' />
                <h6 className='my-5'>Apply pads as instructed on BARE skin </h6>
                <img src={tenAedHand} alt='Apply pads as instructed on BARE skin' title='Apply pads as instructed on BARE skin' className='img-fuild m-auto d-block' />
                <h6 className='my-5'>Apply pads as instructed on BARE skin </h6>
                <img src={tenAedMan} alt='Apply pads as instructed on BARE skin' title='Apply pads as instructed on BARE skin' className='img-fuild m-auto d-block' />
                <div className='content-border_box'>
                    <p>Try not to interrupt the CPR while you remove or move clothes to bare the chest and apply pads</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>Do not touch the patient when  device is analyzing heart rhythm</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>When  SHOCK is applied, stay clear </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>Resume chest compressions after the shock and fallow AED Prompts</p>
                    <div className='partition'></div>
                </div>
                <h4 className='my-5'>Till when do you need to continue CPR</h4>
                <div className='content-border_box'>
                    <p>Continue CPR till Patient revives, Opens eyes, Starts breathing  </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>Medical Help arrives </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p>NEVER give anything by mouth: food, water, medicines </p>
                    <div className='partition'></div>
                </div>
                <Link to="/Page_104">
                    <button className="small-btn" >CONTINUE</button>
                </Link>
            </section>
            <Tabs />
        </>
    )
}

export default Page_103;




