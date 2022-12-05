import React, { useState, useLayoutEffect } from 'react';
import homeLogo from '../assets/images/home-screen.png';
import { Link } from "react-router-dom";
function Page_1() {

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
    <section className='home-screen text-center mt-5' onScroll={(e) => handleScroll(e)}>
      <div className={scrollPosition}>
        <h1 className='mb-4'>Learn CPR and Save a Life</h1>
      </div>
      <div className="main-wrapper">
        <p>Train for the moments that could matter !!</p>
        <img src={homeLogo} alt='logo' className='img-fuild d-block' />
        <Link to="/Page_2" className='home-btn'>START</Link>
        <h2 className='content-para'>Aditya Kapoor <br /> Prof and Head, Dept of Cardiology SGPGIMS, Lucknow</h2>
      </div>
    </section>
  )
}

export default Page_1;