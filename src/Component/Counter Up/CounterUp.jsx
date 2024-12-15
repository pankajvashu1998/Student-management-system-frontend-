import React, { useState } from 'react'
import Countup from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { LuUserPlus2 } from "react-icons/lu";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { LuNetwork } from "react-icons/lu";

function CounterUp() {
    let [counterOn, setCounterOn] = useState(false)
  return (
    <div>
        <div>
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className='bg-purple-500 py-8 px-2 text-white grid sm:grid-cols-2 lg:grid-cols-4 w-full text-center gap-10'>
                        <div className='flex items-center flex-col'>
                            <span className='text-5xl'><LuUserPlus2/></span>
                            <h1 className='text-3xl font-bold'> {counterOn &&  <Countup start={0} end={2000} duration={2} delay={0}/>}+</h1>
                            <p className='font-semibold'>STUDENTS</p>  
                        </div>

                        <div className='flex items-center flex-col'>
                            <span className='text-4xl'><FaRegMoneyBill1/></span>
                            <h1 className='text-3xl font-bold'> {counterOn &&  <Countup start={0} end={130} duration={2} delay={0}/>}+</h1>
                            <p className='font-semibold'>COURSES</p>  
                        </div>

                        <div className='flex items-center flex-col'>
                        <span className='text-4xl'><IoGlobeOutline/></span>
                            <h1 className='text-3xl font-bold'> {counterOn &&  <Countup start={0} end={40} duration={2} delay={0}/>}+</h1>
                            <p className='font-semibold'>CENTERS</p>  
                        </div>

                        <div className='flex items-center flex-col'>
                            <span  className='text-4xl'><LuNetwork/></span>
                            <h1 className='text-3xl font-bold'> {counterOn &&  <Countup start={0} end={100} duration={2} delay={0}/>}+</h1>
                            <p className='font-semibold'>FACULTIES</p>  
                        </div>
                       
                    </div>
             </ScrollTrigger>
        </div>
    </div>
  )
}

export default CounterUp
