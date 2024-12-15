import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { MdLibraryBooks } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { IoList } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import {Outlet} from 'react-router-dom'
import { NavLink } from 'react-router-dom';


function Dashboard() {
  let[isActive, setActive] = useState(false)
  return (
    <div className='w-full'>
       
          <nav className='text-2xl font-bold  py-4 px-2 w-full bg-white'>DASHBOARD</nav>

        <div className='flex'>
              <div className={`md:w-[320px] text-white duration-300 ${isActive ? 'w-full' : ''}`}>
                  <div className='flex items-center justify-between p-4 bg-gray-800'>
                      <h1 className=' font-semibold hidden md:block'>Dashboard</h1>
                      {
                        isActive ?<span className='text-2xl md:hidden block' onClick={()=>setActive(!isActive)}><IoMdClose/></span>:
                        <span className='text-2xl md:hidden block' onClick={()=>setActive(!isActive)}><IoMdMenu/></span>
                      }
                  </div>
                  <div className='bg-gray-700 min-h-screen'>
                    <ul>
                      <li className='py-2 px-4 hover:bg-gray-600 flex items-center gap-2 border-b'>
                        <span className='text-2xl'><IoMdPersonAdd/></span>
                        <h1 className={` ${isActive ? 'block' : 'hidden'} md:block`}><NavLink to={''}>New Admission</NavLink></h1>
                      </li>
                      <li className='py-2 px-4 hover:bg-gray-600 flex items-center gap-2 border-b'>
                        <span className='text-2xl'><HiUserGroup/></span>
                       <h1 className={` ${isActive ? 'block' : 'hidden'} md:block`}><NavLink to={'students/exam-registration/list'}> Examination</NavLink></h1>
                      </li>
                      <li className='py-2 px-4 hover:bg-gray-600 flex items-center gap-2 border-b'>
                        <span className='text-2xl'><MdLibraryBooks/></span>
                       <h1 className={` ${isActive ? 'block' : 'hidden'} md:block`}><NavLink to={'students/course-interest/list'}>Student Interest</NavLink></h1>
                      </li>
                      <li className='py-2 px-4 hover:bg-gray-600 flex items-center gap-2 border-b'>
                        <span className='text-2xl'><FaQuestion/></span>
                       <h1 className={` ${isActive ? 'block' : 'hidden'} md:block`}><NavLink to={'students/questions/list'}>Student Query</NavLink></h1>
                      </li>
                      <li className='py-2 px-4 hover:bg-gray-600 flex items-center gap-2 border-b'>
                        <span className='text-2xl'><IoList/></span>
                       <h1 className={` ${isActive ? 'block' : 'hidden'} md:block`}><NavLink to={''}>Result</NavLink></h1>
                      </li>
                    </ul>
                  </div>
              </div>

              <div className='w-full p-1 bg-gray-200'>
                <Outlet/>
              </div>
        </div>
    </div>
  )
}

export default Dashboard
