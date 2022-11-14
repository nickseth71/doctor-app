import React from 'react';
import Tabs from '../components/Tabs';
import hand from '../assets/images/hand.png';
import { Link } from "react-router-dom";
function Page_9() {
    return (
        <>
            <section className='page-cover text-center'>
                <h1 className='mb-4'>Why do YOU need to HELP </h1>
                <p className='font600 mb-4'>In 3 minutes ambulance or medical help is unlikely to arrive</p>
                <img src={hand} alt='hand' title='Hand' className='img-fuild d-block mx-auto' />
                <p className='font600 mt-5'>So if someone has a sudden cardiac arrest, who is going to help that person ?  </p>
                <div className='text-right'>
                    <Link to="/Page_8"><button className="small-btn" >CONTINUE</button></Link>
                </div>
            </section>
            <Tabs />
        </>
    )
}

export default Page_9;




