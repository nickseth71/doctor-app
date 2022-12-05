import React, { useLayoutEffect, useState } from 'react';
// import Tabs from '../components/Tabs';
import { Link } from "react-router-dom";

const btnData = [
  {
    id: '1',
    name: 'Recognise cardiac arrest',
    title: 'Recognise cardiac arrest',
    url: '/Page_101'
  },
  {
    id: '2',
    name: 'Start CPR and ask someone to callan ambulance',
    title: 'Start CPR and ask someone to callan ambulance',
    url: '/Page_102'
  },
  {
    id: '3',
    name: 'Ask for an AED (or shock machine) if present',
    title: 'Ask for an AED (or shock machine) if present',
    url: '/Page_103'
  },
  {
    id: '4',
    name: 'Shift to hospital',
    title: 'Shift to hospital',
    url: '/Page_104'
  }
]

function Page_10() {

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
      <section className='page-cover text-center cprWrap' onScroll={(e) => handleScroll(e)}>
        <div className={scrollPosition}>
          <h1>Basic steps of CPR</h1>
        </div>
        <div className='main-wrapper'>
          {btnData.map((data) => (
            <Link to={data.url} key={data.id}>
              <button className="default-btn page_10-cta mb-3" alt={data.title}>{data.name}</button>
            </Link>
          ))}
        </div>
      </section>
      {/* <Tabs /> */}
    </>
  )
}

export default Page_10;
