import React from 'react';
import Tabs from '../components/Tabs';
import satyamave from '../assets/images/satyamave.png';
// import { Link } from "react-router-dom";
function Page_8() {
    return (
        <>
            <section className='page-cover text-center'>
                <h1 className='mb-5'>Be aware of The Good Samaritan Law</h1>
                <p className='font600 mb-4'>Passed by the Government of India in 2016</p>
                <img src={satyamave} alt='satyamave' title='satyamave' className='img-fuild d-block mx-auto' />
                <span className='font600 d-block' style={{ color: 'var(--info)', marginBottom: '46px' }}>Ministry of Road Transport and Highways </span>
                <p className='font600 mb-4'>Good Samaritan Law protects you from any legal harassment on actions taken by to save the life of a person injured in an accident, or crash, or emergency medical condition</p>
                <p className='font600'>So if you help a cardiac arrest victim, the Country and the Law are with YOU!!</p>
                {/* <div className='text-right'>
                    <Link to="/Page_10"><button className="small-btn" >CONTINUE</button></Link>
                </div> */}
            </section>
            <Tabs />
        </>
    )
}

export default Page_8;




