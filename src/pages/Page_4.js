import React from 'react';
import Tabs from '../components/Tabs';
import heart from '../assets/images/heart.png';
import heartimg from '../assets/images/heart-img.png';
import { Link } from "react-router-dom";
function Page_4() {
    return (
        <>
            <section className='page-cover text-center'>
                <div className='page-heart_wrap'>
                <h1 className='mb-4'>Heart attack  <br /> vs <br /> Sudden Cardiac arrest </h1>
                <span className='d-block mb-4 font600'>Blood flow problem <br />The person is usually conscious</span>
              <img src={heartimg} alt='Heart' title='Heart' className='img-fuild d-block text-left' /> 
                <span className='d-block mt-4 mb-5 font600'>Electrical problem <br />The person is usually unconscious </span>
                <img src={heart} alt='Heart' title='Heart' className='img-fuild d-block text-left' />
                <div className='text-right mt-4'>
                    <Link to='/Page_5'><button className="small-btn" >CONTINUE</button></Link>
                </div>
                </div>
            </section>
            <Tabs />
        </>
    )
}

export default Page_4;




