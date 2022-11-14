import React from 'react';
import Tabs from '../components/Tabs';
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
  return (
    <>
      <section className='page-cover text-center'>
        <h1 className='mt-4 mb-5'> Basic steps of CPR</h1>
        {btnData.map((data) => (
          <Link to={data.url} key={data.id}>
            <button className="default-btn page_10-cta mb-4" alt={data.title}>{data.name}</button>
          </Link>
        ))}
      </section>
      {/* <Tabs /> */}
    </>
  )
}

export default Page_10;
