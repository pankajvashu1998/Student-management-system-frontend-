import React from 'react'
import { whyWithUs } from './Content'

function WhyWithUs() {
  return (
    <div>
      <div className='w-full p-4 grid md:grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
        <div className='p-4'>
            <h1 className='text-2xl font-bold text-gray-600 py-3 px-1'>Why With Us</h1>
           <p className='mt-3'> {whyWithUs}</p>
        </div>
        <div className='p-4'>
            <img src="/images/student.jpg" alt="" className='w-full'/>
        </div>
      </div>
    </div>
  )
}

export default WhyWithUs
