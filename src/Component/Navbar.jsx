import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa6";
import {NavLink, Link} from 'react-router-dom'

import Home from './Home/Home';

function Navbar() {
  let[toggle, setToggle] = useState(false);
  let[show, setShow] = useState(false);
  return (
    <div className='z-[6]'>
      <div>
        <nav className='w-full flex justify-between items-center px-4 py-3 bg-white shadow'>
          <div>
            <img src="logo.png" alt="" className='md:w-[80px] w-[60px] rounded' />
          </div>
          <div>
            <ul className='hidden md:flex items-center gap-9 md:text-sm text-[12px] text-gray-600 '>
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/about'}>About</NavLink></li>
              <li><NavLink to={'/course'}>Course</NavLink></li>
              <li><NavLink to={'/contact'}>Contact</NavLink></li>
              <li onClick={()=>setShow(!show)}><NavLink>
              Zone
              <ul className={`absolute mt-2  bg-white border shadow-lg text-black  z-10 ${show ? 'block' : 'hidden'}`}>
                <li className='px-2 py-[6px] border-b'><NavLink to={'/students/exam-registration/form'} >Exam Registration Form</NavLink></li>
                <li className='px-2 py-[7px] border-b'><NavLink to={'/students/results'}>Result</NavLink></li> 
                <li className='px-2 py-[7px] border-b'><NavLink to={'/pdf/downloads'}>Download PDF</NavLink></li>
                <li className='px-2 py-[7px] border-b'></li>
              </ul>
              
              </NavLink></li>
             
            </ul>

            {/* Responsive navbar */}
            

            <ul className={`${toggle ? 'left-0' : 'left-[-100%]'} duration-300 fixed  md:hidden gap-9 md:text-sm text-[12px] text-gray-600  w-full top-[65px] bg-gray-300 z-10`} >
              <li className='py-4 px-3 hover:bg-sky-400  border-b hover:text-white hover:font-semibold'><NavLink onClick={()=>setToggle(!toggle)} to={'/'}>Home</NavLink></li>
              <li className='py-4 px-3 hover:bg-sky-400  border-b hover:text-white hover:font-semibold'><NavLink onClick={()=>setToggle(!toggle)} to={'/about'}>About</NavLink></li>
              <li className='py-4 px-3 hover:bg-sky-400  border-b hover:text-white hover:font-semibold'><NavLink onClick={()=>setToggle(!toggle)} to={'/course'}>Course</NavLink></li>
              <li className='py-4 px-3 hover:bg-sky-400  border-b hover:text-white hover:font-semibold'><NavLink onClick={()=>setToggle(!toggle)} to={'/contact'}>Contact</NavLink></li>
              <li className='py-4 px-3 hover:bg-sky-400  border-b hover:text-white hover:font-semibold'><NavLink  onClick={()=>setShow(!show)}>
              Zone

              <ul className={`absolute mt-2  bg-white border shadow-lg text-black  z-20  ${show ? 'block' : 'hidden'}`}>  
                <li className='px-2 py-[6px] border-b'><NavLink to={'/students/exam-registration/form'} >Exam Registration Form</NavLink></li>
                <li className='px-2 py-[7px] border-b'><NavLink to={'/students/results'}>Result</NavLink></li> 
                <li className='px-2 py-[7px] border-b'><NavLink to={'/pdf/downloads'}>Download PDF</NavLink></li>
                <li className='px-2 py-[7px] border-b'></li>
              </ul>
              
              </NavLink></li>
         
            </ul>

          </div>
          <div className='flex items-center gap-5'>
            <button className='border px-2 py-[6px] rounded bg-sky-400 text-white md:text-sm text-[12px] font-thin  hover:bg-sky-500 duration-300'><Link to={'/client/login'}>Client Login</Link></button>
            {
              toggle ?  <span className='text-[27px] text-gray-600 md:hidden border p-[2px] rounded bg-gray-100' onClick={()=> setToggle(!toggle)}><IoMdClose/></span> :
              <span className='text-[27px] text-gray-600 md:hidden border p-[2px] rounded bg-gray-100' onClick={()=> setToggle(!toggle)}><IoMenu/></span>
            }
           
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
