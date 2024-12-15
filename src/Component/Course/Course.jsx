import React from 'react'
import CourseInterest from '../CourseInterest/StudentCourseInterest'

import Footer from '../Footer/Footer'
import CourseList from './CourseList'


function Course() {
  return (
    <div>
      <h1 className='px-2 py-4 bg-blue-600 text-white font-bold text-2xl text-center'>Courses</h1>
      <div className='p-4 md:flex gap-5'>

          <div className=' p-4 md:w-8/12'>
          <div className='overflow-hidden'>
                <img src="/images/coursebanner.jpg" alt=""  className='w-full'/>
          </div>
              <CourseList/>
          </div>
         
          <div className='p-4  flex items-center justify-center flex-col'>
            <div className='overflow-hidden'>
              <img src="/images/careerImage.png" alt="" className='object-cover w-[310px]'/>
            </div>
            <div><CourseInterest/></div>
          </div>
      </div>
     
      <Footer/>
    </div>
  )
}

export default Course
