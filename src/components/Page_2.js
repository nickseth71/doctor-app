import React from 'react';
// import Tabs from '../components/Tabs';
import { Link } from "react-router-dom";
import  {IoIosArrowForward}  from 'react-icons/io';
const btnData = [
  {
    id: '1',
    name: 'What is CPR ?',
    title: 'What is CPR ?',
    url: '/Page_7',
  },
  {
    id: '2',
    name: 'What is Sudden Cardiac Arrest',
    title: 'What is Sudden Cardiac Arrest',
    url: '/Page_3'
  },
  {
    id: '3',
    name: 'Heart attack vs Cardiac arrest ?',
    title: 'Heart attack vs Cardiac arrest ?',
    url: '/Page_4'
  },
  {
    id: '4',
    name: 'Why is it important for Indians to learn CPR ?',
    title: 'Why is it important for Indians to learn CPR ?',
    url: '/Page_5'
  },
  {
    id: '5',
    name: 'Why is Time of essence ?',
    title: 'Why is Time of essence ?',
    url: '/Page_6'
  },
  {
    id: '6',
    name: 'Why do YOU need to HELP ?',
    title: 'Why do YOU need to HELP ?',
    url: '/Page_9'
  },
  {
    id: '7',
    name: 'What is the Good Samaritan Law ?',
    title: 'What is the Good Samaritan Law ?',
    url: '/Page_8'
  },
  // {
  //   id: '8',
  //   name: 'What are the 4 basic steps of CPR ?',
  //   title: 'What are the 4 basic steps of CPR ?',
  //   url: '/Page_10'
  // },
]

function Page_2() {
  return (
    <>
      <section className='page-cover text-center'>
        <h1 className='mb-4'>What will we learn</h1>
        {btnData.map((data) => (
          <Link key={data.id} to={data.url}><button className="default-btn mb-3" alt={data.title} >{data.name}  </button></Link>
        ))}
      </section>
    </>
  )
}

export default Page_2;




