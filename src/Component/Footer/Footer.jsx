import React from 'react'
import { about, contact, image, onlineService } from './Content'

function Footer() {
  return (
    <div>
        <div className='bg-black p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  text-white'>
                <div className=' p-4 '>
                    <h1 className='py-3 font-bold'>ABOUT US</h1>
                    <p className='text-gray-400'>{about}</p>
                </div>
                <div className='p-4 '>
                <h1 className='py-3 font-bold'>ONLINE SERVICES</h1>
                    {
                        onlineService.map((value, index)=>(
                            <p key={index} className='text-gray-400'>{value}</p>
                        ))
                    }
                </div>
                <div className='p-4 '>
                    <h1 className='py-3 font-bold'>CONTACT US</h1>
                    {
                        contact.map((value, index)=>(
                            <p key={index} className='text-gray-400'>{value}</p>
                        ))
                    }

                </div>
                    <div className='p-4'>
                        <h1 className=' py-3 font-bold'>RECENT PHOTO</h1>

                    <div className='grid grid-cols-3 gap-2'>
                        {
                            image.map((img, index)=>(
                                <div key={index} className='overflow-hidden'>
                                    <img src={img.image} alt="" className='w-full hover:scale-110 duration-300' />
                                </div>
                            ))
                        }
                </div>
                    </div>
        </div>
    </div>
  )
}

export default Footer
