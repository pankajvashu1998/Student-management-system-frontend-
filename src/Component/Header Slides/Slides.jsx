
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slides() {
  return (
    <div className='w-full absolute brightness-50'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        //navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='z-[-7]'><img src="/images/1.webp" alt="" className='w-full sm:h-[400px] h-[300px] object-cover'/></SwiperSlide>
        <SwiperSlide className='z-[-7]'><img src="/images/2.webp" alt="" className='w-full sm:h-[400px] h-[300px] object-cover'/></SwiperSlide>
        <SwiperSlide className='z-[-7]'><img src="/images/3.jpg" alt="" className='w-full sm:h-[400px] h-[300px] object-cover'/></SwiperSlide>
        <SwiperSlide className='z-[-7]'><img src="/images/4.jpg" alt="" className='w-full sm:h-[400px] h-[300px] object-cover'/></SwiperSlide>
        <SwiperSlide className='z-[-7]'><img src="/images/5.jpg" alt="" className='w-full sm:h-[400px] h-[300px] object-cover'/></SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Slides
