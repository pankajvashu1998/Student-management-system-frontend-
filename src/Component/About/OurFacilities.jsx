import React from 'react'
import { onlineAdm, onlineExam, onlineStudy } from './Content'

function OurFacilities() {
  return (
    <div>
              <div className='w-full p-4  mt-10'>
            <div>
                <h1 className='text-center py-2 text-2xl font-bold text-gray-600'>OUR FACILITIES</h1>
                <div className='border w-[120px] border-gray-300 mx-auto'></div>
                <div className='border w-[80px] mt-1 border-gray-300 mx-auto'></div>
                <div className='font-semibold text-gray-500 text-center py-5 max-w-[500px] mx-auto'>Icon Institute of Education is an innovative education company which provides knowledge sharing, skill development through practical training to the youngsters of India in order to prepare them for the real life challenges. .</div>
            </div>
            <div className='w-full p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                    <div className='p-4 border hover:shadow-lg cursor-pointer'>
                       <div><img src="/images/onlineExam.jpeg" alt="" /></div>
                       <h1 className='font-bold py-2'>ONLINE EXAMINATION</h1>
                       <p className='text-gray-500'>{onlineExam}</p>
                    </div>

                    <div className='p-4  border hover:shadow-lg cursor-pointer'>
                        <div><img src="/images/completeStudy.jpg" alt="" /></div>
                       <h1 className='font-bold py-2'>COMPLETE STUDY MATERIAL</h1>
                       <p className='text-gray-500'>{onlineStudy}</p>
                    </div>

                    <div className='p-4  border hover:shadow-lg cursor-pointer'>
                        <div><img src="/images/onlineAdmi.jpg" alt="" /></div>
                       <h1 className='font-bold py-2'>ONLINE ADMISSION</h1>
                       <p className='text-gray-500'>{onlineAdm}</p>
                    </div>
            </div>
           
      </div>
    </div>
  )
}

export default OurFacilities
