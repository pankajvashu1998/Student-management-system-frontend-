import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


function PlacementPartner() {
  return (
    <div className='p-4 pb-[50px] bg-blue-400'>
      <div>
        <h1 className='text-center font-bold text-white py-2 my-4 text-2xl'>OUR PLACEMENT PARTNER</h1>
        <div className='max-w-[130px] border mx-auto'></div>
        <div className='max-w-[100px] border mx-auto mt-1 mb-4'></div>
        <p className='text-center font-bold text-xl text-white mb-5'>Top recruites of india where our students are placed.</p>
      </div>
          <Swiper
        // effect={'coverflow'}
        // grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={'auto'}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 0,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
         <div className='grid grid-cols-2 gap-2 md:grid-cols-4  '>
            <div className='border p-8 max-w-[200px] mx-auto bg-white rounded flex items-center justify-center'>
                <img src="/images/ntpc.png" alt="" />
           </div>

            <div className='border p-8 max-w-[200px]  mx-auto bg-white rounded flex items-center justify-center'>
                  <img src="/images/nielit.png" alt="" />
            </div>
            
            <div className='border p-8 max-w-[200px]  mx-auto bg-white rounded flex items-center justify-center'>
               <img src="/images/positive.png" alt="" />
           </div>

           <div className='border p-8 max-w-[200px]  mx-auto bg-white rounded flex items-center justify-center'>
              <img src="/images/shaksham.png" alt="" />
          </div>
         </div>
        </SwiperSlide>
       
        
        <SwiperSlide>
         <div className='grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-2'>
            <div className='border p-8 max-w-[200px]  mx-auto bg-white rounded flex items-center justify-center '>
                  <img src="/images/sskill.png" alt="" />
              </div>

              <div className='border p-8 max-w-[200px]  mx-auto bg-white rounded flex items-center justify-center'>
                  <img src="/images/tally.png" alt=""  />
              </div>
         </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default PlacementPartner
