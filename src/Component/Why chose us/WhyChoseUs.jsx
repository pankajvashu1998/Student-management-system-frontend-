import React from 'react'
import { extraCare, latestTechnology, unlimitedLab } from './Content'

function WhyChoseUs() {
  return (
    <div>
      <div className='w-full p-4  mt-10'>
            <div>
                <h1 className='text-center py-2 text-2xl font-bold text-gray-600'>WHY CHOSE USE</h1>
                <div className='border w-[120px] border-gray-300 mx-auto'></div>
                <div className='border w-[80px] mt-1 border-gray-300 mx-auto'></div>
                <div className='font-semibold text-gray-500 text-center py-5 max-w-[500px] mx-auto'>In ICON, learners are able to study and experience each procedure in a rich variety of ways to optimize their learning.</div>
            </div>
            <div className='w-full p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                    <div className='p-4 border hover:shadow-lg cursor-pointer'>
                        <div className='text-center py-2 font-bold text-gray-800 text-xl'>EXTRA CARE</div>
                        <h1 className='py-5 px-5 bg-white  text-gray-600 text-center'>{extraCare}</h1>
                        <div className='text-center font-semibold'><button>Read more</button></div>
                    </div>
                    <div className='p-4  border hover:shadow-lg cursor-pointer'>
                        < div className='text-center py-2 font-bold text-gray-800 text-xl'>LATEST TECHNOLOGY</div>
                        <h1 className='py-5 px-5 bg-white   text-gray-600 text-center'>{latestTechnology}</h1>
                        <div className='text-center font-semibold'><button>Read more</button></div>
                    </div>
                    <div className='p-4  border hover:shadow-lg cursor-pointer'>
                        <div className='text-center py-2 font-bold text-gray-800 text-xl'>UNLIMITED LAB</div>
                        <h1 className='py-5 px-5 bg-white   text-gray-600 text-center'>{unlimitedLab}</h1>
                        <div className='text-center font-semibold'><button>Read more</button></div>
                    </div>
            </div>
           
      </div>
    </div>
  )
}

export default WhyChoseUs
