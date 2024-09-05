/*ye courses cards wala main page h*/

import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import {Link} from "react-router-dom";


function Course() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-3xl ">We're delighted to have you 
                <span className="text-pink-400"> Here! :)</span> 
            </h1>
            <p className='mt-12'>
            Explore our Courses and Books section, where you'll find a wealth of knowledge to fuel your growth.
            Whether you're looking to develop new skills or dive deep into a captivating read,
            we offer a range of resources designed to empower and inspire you on your learning journey.
            </p>
            <Link to ="/">
            <button className= " mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
