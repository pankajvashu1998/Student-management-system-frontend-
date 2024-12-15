
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function ContentSlides() {
  return (
    <div className='w-full relative p-4'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        //navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
               <h1 className='text-white md:text-2xl text-[20px] py-3 font-bold mt-6'>THE BEST LEARNING CENTER</h1>   
               <h1 className='text-white md:text-5xl text-3xl  font-bold'>WE CAN LEARN ANYTHING</h1>
               <button className='border py-2 px-5 bg-red-600 text-white mt-8'>Learn more</button>
         </SwiperSlide>

         <SwiperSlide >
               <h1 className='text-white md:text-2xl text-[20px] py-3 font-bold mt-6'>ICON INSTITUTE OF COMPUTER</h1>   
               <h1 className='text-white md:text-5xl text-3xl  font-bold'>EDUCATION AND TRAINING</h1>
               <button className='border py-2 px-5 bg-red-600 text-white mt-8'>Learn more</button>
         </SwiperSlide>

         <SwiperSlide >
               <h1 className='text-white md:text-2xl text-[20px] py-3 font-bold mt-6'>COMPLETE DIGITAL</h1>   
               <h1 className='text-white md:text-5xl text-3xl  font-bold'>LEARN FROM BEST STUDY MATERIAL</h1>
               <button className='border py-2 px-5 bg-red-600 text-white mt-8'>Join today</button>
         </SwiperSlide>

         <SwiperSlide >
               <h1 className='text-white md:text-2xl text-[20px] py-3 font-bold mt-6'>WEL EQUIPPED</h1>   
               <h1 className='text-white md:text-5xl text-3xl  font-bold'>UP TO DATE COMPUTER LAB</h1>
               <button className='border py-2 px-5 bg-red-600 text-white mt-8'>Visit today</button>
         </SwiperSlide>
       
       
       
      </Swiper>
    </div>
  )
}

export default ContentSlides
