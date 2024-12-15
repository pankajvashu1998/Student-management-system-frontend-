import React from 'react'
import CourseInterest from '../CourseInterest/StudentCourseInterest'
import { coreValue, ourMission, ourVision1, ourVision2 } from './Content'
import CounterUp from '../Counter Up/CounterUp'
import OurFacilities from './OurFacilities'
import Footer from '../Footer/Footer'

function About() {
  return (
    <div>
      <h1 className='px-2 py-4 bg-blue-600 text-white font-bold text-2xl text-center'>About</h1>
      <div className='p-4 grid md:grid-cols-2 gap-4'>
          <div className='p-4'>
            <h1 className='text-2xl py-4 text-gray-500 font-bold'>WELCOME TO EDUCATION COURSE</h1>
            <p className='text-gray-500 font-semibold py-2'>Our Mission</p>
            <p className='text-gray-600'>{ourMission}</p>
            <p className='text-gray-500 font-semibold py-2'>Our Vision</p>
            <p className='text-gray-600'>{ourVision1}</p>
            <p className='text-gray-600 py-3'>{ourVision2}</p>
            <p className='text-gray-500 font-semibold py-2'>Our Core Values of the Institution</p>
           
            {
              coreValue.map((value, index)=>(
                <h1 key={index} className='text-gray-600  m-0 p-0'>{value}</h1>
              ))
            }

            <button className='py-3 px-5 bg-red-600 text-white font-semibold rounded my-4'>READ MORE</button>
          
          </div>
          <div className='p-4'>
            <CourseInterest/>
          </div>
      </div>
      <div><CounterUp/></div>
      <div><OurFacilities/></div>
      <div><Footer/></div>
    </div>
  )
}

export default About
