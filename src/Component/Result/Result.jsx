import React from 'react'
import Footer from '../Footer/Footer'

function Result() {
  return (
    <div>
      <h1 className='px-2 py-4 bg-blue-600 text-white font-bold text-2xl text-center'>RESULTS</h1>
      <div className='w-full p-4 flex  justify-center gap-4  mt-10'>
           <div className='w-[350px] px-5 py-8 bg-gray-100 shadow-xl'>
            <h1 className='pb-5 font-bold text-xl text-gray-700'>Search Results</h1>
                <div>
                    <input type="text" placeholder='Enter Name' className='border py-3 px-2 rounded w-full'/>
                </div>
                <div className='my-4'>
                    <input type="text" placeholder='Enter Registration No.' className='border py-3 px-2 rounded w-full'/>
                </div>
                <div className='my-4'>
                    <button className='py-3 px-5 border bg-gray-500 text-white font-semibold rounded hover:bg-gray-600 duration-300'>Search</button>
                </div>
           </div>
      </div>
      <div className='p-4'>

      </div>
      <Footer/>
    </div>
  )
}

export default Result
 