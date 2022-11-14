import React from 'react';
import Tabs from '../components/Tabs';
import remoteControl from '../assets/images/moot-ki-sawari.png';
import { Link } from "react-router-dom";
function Page_104() {
    return (
        <>
            <section className='page-cover text-center'>
                <h1 className='mb-4 mt-3'>Medical Help arrives Shift to hospital</h1>
                <img src={remoteControl} alt='Remote Control' title='Remote Control' className='img-fuild d-block mx-auto' />
                <p className='font600 mt-5 mb-4'>Great work…You have saved  a life!!</p>
                <Link to="/Page_12">
                    <button className="small-btn" >Finish</button>
                </Link>
            </section>
            <Tabs />
        </>
    )
}

export default Page_104;




