import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { najruddin, prakash, rajni, vasisth } from './Content';

function Testimonial() {
  return (
    <div className='p-4 pb-[50px] bg-blue-500'>
      <div>
        <h1 className='text-center font-bold text-white py-2 my-4 text-2xl'>TESTIMONIALS</h1>
        <div className='max-w-[130px] border mx-auto'></div>
        <div className='max-w-[100px] border mx-auto mt-1 mb-4'></div>
        <p className='text-center font-bold text-xl text-white mb-5'>What people say about us.</p>
      </div>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <div className='border p-8 max-w-[500px] mx-auto bg-white rounded'>
              <p className='pb-[20px] text-gray-500'>{rajni}</p>
              <div className='flex items-center  gap-3'>
                <div className='w-[80px] h-[80px] border rounded-full  border-gray-400 bg-gray-100'></div>
                <div>
                  <h1  className='text-sm text-gray-800'>RAJNI GUPTA</h1>
                  <p className='text-gray-600 text-[14px]'>Student</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='border p-8 max-w-[500px]  mx-auto bg-white rounded'>
          <p className='pb-[20px] text-gray-500'>{prakash}</p>
          <div className='flex items-center  gap-3'>
                <div className='w-[80px] h-[80px] border rounded-full  border-gray-400  bg-gray-100'></div>
                <div>
                  <h1  className='text-sm text-gray-800'>PRAKSH SHARMA</h1>
                  <p className='text-gray-600 text-[14px]'>Faculty</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='border p-8 max-w-[500px]  mx-auto bg-white rounded'>
          <p className='pb-[20px] text-gray-500'>{najruddin}</p>
          <div className='flex items-center  gap-3'>
                <div className='w-[80px] h-[80px] border border-gray-400 rounded-full  bg-gray-100'></div>
                <div>
                  <h1  className='text-sm text-gray-800'>NAJRUDDIN AHMAD</h1>
                  <p className='text-gray-600 text-[14px]'>Former Student</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='border p-8 max-w-[500px]  mx-auto bg-white rounded'>
          <p className='pb-[20px] text-gray-500'>{vasisth}</p>
          <div className='flex items-center  gap-3'>
                <div className='w-[80px] h-[80px] border rounded-full  border-gray-400  bg-gray-100'></div>
                <div>
                  <h1 className='text-sm text-gray-800'>VASISTH JAIN</h1>
                  <p className='text-gray-600 text-[14px]'>Group Member</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
       
       
      </Swiper>
    </div>
  )
}

export default Testimonial
