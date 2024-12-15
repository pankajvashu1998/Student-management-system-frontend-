import React from 'react'
import StudentQuestion from './StudentQuestions'
import { contact } from '../Footer/Content'
import Footer from '../Footer/Footer'


function Contact() {
  return (
    <div>
      <h1 className='px-2 py-4 bg-blue-600 text-white font-bold text-2xl text-center'>Contact</h1>
      <div className=' p-4 grid md:grid-cols-2 gap-4'>
        <div className='p-4'>
           <StudentQuestion/>
        </div>
        <div className='p-4 '>
          <h1 className='pt-3 pb-4 font-bold text-2xl text-gray-800'>GET IN TOUCH</h1>
          {
            contact.map((value, index)=>(
              <p key={index} className='text-gray-600'>{value}</p>
            ))
          }
        </div>
      </div>
      
      <div className='w-full'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.598075865671!2d85.26709017404808!3d25.783836007692567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed43e7a24805e1%3A0x87f4c88955505a7e!2sICON%20INSTITUTE%20OF%20COMPUTER!5e0!3m2!1sen!2sin!4v1733216592137!5m2!1sen!2sin" className='w-full h-[500px]'></iframe>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Contact
