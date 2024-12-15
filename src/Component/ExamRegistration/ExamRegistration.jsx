import React from 'react'
import Footer from '../Footer/Footer'
import Form from './Form'



function ExamRegistration() {
  return (
    <div>
         <h1 className='px-2 py-4 bg-blue-600 text-white font-bold text-2xl text-center'>EXAM REGISTRATION FORM</h1>
       <div className='p-4 flex justify-center gap-5'>
                <div className=' p-4 md:w-8/12'>
                <div className='overflow-hidden'>
                    <img src="/images/coursebanner.jpg" alt=""  className='w-full'/>
                </div>
                    <Form/>
                   
                </div>
        </div>
      
        <Footer/>
    </div>
  )
}

export default ExamRegistration
