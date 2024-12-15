import React from 'react'
import CourseInterest from '../CourseInterest/StudentCourseInterest'
import { content1, content2 } from './Content'

function WelcomePage() {
  return (
    <div>
        <div className='w-full p-4 md:flex gap-5'>
                <div className='p-4  md:w-7/12'>
                    <h1 className='text-xl font-bold text-gray-600 py-2'>WELCOME TO ICON INSTITUTE OF COMPUTER</h1>
                    <p className='py-3 text-gray-700'>{content1}</p>
                    <p className='text-gray-700'>{content2}</p>
                </div>
                <div className='p-4  md:w-5/12'><CourseInterest/></div>
        </div>
    </div>
  )
}

export default WelcomePage
