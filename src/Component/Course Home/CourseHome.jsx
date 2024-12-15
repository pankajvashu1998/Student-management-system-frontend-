import React from 'react'
import {Link} from 'react-router-dom'

function CourseHome() {
  return (
    <div>
      <div className='w-full p-4 bg-green-100'>
            <div>
                <h1 className='text-center py-2 text-2xl font-bold text-gray-600'>OUR COURSES</h1>
                <div className='border w-[120px] border-gray-300 mx-auto'></div>
                <div className='border w-[80px] mt-1 border-gray-300 mx-auto'></div>
                <h1 className='font-semibold text-gray-500 text-center py-5'>We are ready with all type of IT Professional courses.</h1>
            </div>
            <div className='w-full p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='p-4'>
                        <div className='overflow-hidden'><img src="/images/fundamental.png" alt="" className='hover:scale-[1.05] duration-300' /></div>
                        <h1 className='py-4 px-2 bg-white font-bold hover:text-red-600'>COMPUTER FUNDAMENTAL</h1>
                    </div>
                    <div className='p-4 '>
                        < div className='overflow-hidden'><img src="/images/corejava.jpeg" alt="" className='hover:scale-[1.05] duration-300'/></div>
                        <h1 className='py-4 px-2 bg-white font-bold  hover:text-red-600'>CORE & ADVANCE JAVA</h1>
                    </div>
                    <div className='p-4 '>
                        <div className='overflow-hidden'><img src="/images/dotnet.png" alt="" className='hover:scale-[1.05] duration-300'/></div>
                        <h1 className='py-4 px-2 bg-white font-bold  hover:text-red-600'>MICROSOFT .NET</h1>
                    </div>
                    <div className='p-4 '>
                        <div className='overflow-hidden'><img src="/images/appDev.jpeg" alt="" className='hover:scale-[1.05] duration-300'/></div>
                        <h1 className='py-4 px-2 bg-white font-bold  hover:text-red-600'>MOBILE UI DESIGNING</h1>
                    </div>
                    <div className='p-4 '>
                        <div className='overflow-hidden'><img src="/images/webDesign.jpg" alt="" className='hover:scale-[1.05] duration-300'/></div>
                        <h1 className='py-4 px-2 bg-white font-bold  hover:text-red-600'>WEB DESIGNING</h1>
                    </div>
                    <div className='p-4 '>
                        <div className='overflow-hidden'><img src="/images/webDeve.jpg" alt="" className='hover:scale-[1.05] duration-300'/></div>
                        <h1 className='py-4 px-2 bg-white font-bold  hover:text-red-600'>WEB DEVELOPMENT</h1>
                    </div>
                   
            </div>
            <div>
                <div className='text-center p-4'>
                    <button className='border-2 border-red-600 px-3 py-2 text-red-600 hover:text-black font-semibold duration-300'><Link to={'/course'}>View All Courses</Link></button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CourseHome
