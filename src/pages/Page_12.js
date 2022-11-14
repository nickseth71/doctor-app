import React from 'react';
import Tabs from '../components/Tabs';
import india from '../assets/images/india.png';

function Page_12() {
    return (
        <>
            <section className='page-cover text-center'>
                <h1 className='mb-4'>You now have the skills to save a life </h1>
                <p className='font600 mb-4'>Let us make INDIA CPR-aware </p>
                <img src={india} alt='India' title='India' className='img-fuild d-block mx-auto' />
                <p className='font600 mt-5 mb-4'>So if you come across a person who has had a cardiac arrest USE THIS SKILL</p>
                <p className='font600'>Invite your friends and family to learn this lifesaving skill</p>
            </section>
            <Tabs />
        </>
    )
}

export default Page_12;




