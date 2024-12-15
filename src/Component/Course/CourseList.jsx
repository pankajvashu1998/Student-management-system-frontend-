import React from 'react'
import { courses } from './Content'
function CourseList() {
  return (
    <div>
         <div className='p-4 '>
              <h1 className='py-3 text-2xl font-bold text-gray-700'>COMPUTER COURSES</h1>
              <div className='overflow-auto'>
                <table className='w-full'>
                  <thead>
                          <tr className='bg-red-600 text-white'>
                            <th className='py-3 px-2'>S.No</th>
                            <th className='py-3 px-2 text-left'>Course</th>
                            <th className='py-3 px-2 text-left'>Course Name</th>
                            <th className='py-3 px-2 text-left'>Duration</th>
                            <th className='py-3 px-2 text-left'>Eligibility</th>
                          </tr>
                  </thead>
                  <tbody>
                           {
                            courses.map((value, index)=>(
                              <tr key={index} className='border-b border-red-400 border-dotted hover:bg-gray-300'>
                                  <td className='text-center px-2 py-2'>{index+1}</td>
                                  <td className='px-2 py-2'>{value.cours}</td>
                                  <td className='px-2 py-2'>{value.courseName}</td>
                                  <td className='px-2 py-2'>{value.duration}</td>
                                  <td className='px-2 py-2'>{value.eligibility}</td>
                              </tr>
                            ))
                           }
                  </tbody>
                </table>
              </div>
          </div>
    </div>
  )
}

export default CourseList
