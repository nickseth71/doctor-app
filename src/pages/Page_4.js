import React, { useState, useLayoutEffect } from 'react';
import Tabs from '../components/Tabs';
import heart from '../assets/images/heart.png';
// import heartimg from '../assets/images/heart-img.png';
import { Link } from "react-router-dom";
import indication from '../assets/images/indication.png'
function Page_4() {
    const [scrollPosition, setScrollPosition] = useState("noStricyHeader");

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    const handleScroll = (event) => {
        if (event.target.scrollTop >= 60) {
            setScrollPosition("stickyheader");
        } else {
            setScrollPosition("noStricyHeader");
        }
    }
    return (
        <>
            <section className='page-cover text-center'>
                <div className='page-heart_wrap'>
                    <div className={scrollPosition}>
                        <h1>Heart attack  <br /> vs <br /> Sudden Cardiac arrest </h1>
                    </div>
                    <div className="main-wrapper">
                        <span className='d-block mb-4 font600'>Blood flow problem <br />The person is usually conscious</span>
                        <div className='indiWrap'>  <img src={indication} alt='Heart' title='Heart' className='img-fuild d-block text-left indic' />
                            <span>Dead Muscle</span>
                        </div>
                        {/* <img src={heartimg} alt='Heart' title='Heart' className='img-fuild d-block text-left' />  */}
                        <span className='d-block mt-4 mb-5 font600'>Electrical problem <br />The person is usually unconscious </span>
                        <img src={heart} alt='Heart' title='Heart' className='img-fuild d-block text-left' />
                        <div className='text-right mt-4'>
                            <Link to='/Page_5'><button className="small-btn" >CONTINUE</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Tabs />
        </>
    )
}

export default Page_4;




