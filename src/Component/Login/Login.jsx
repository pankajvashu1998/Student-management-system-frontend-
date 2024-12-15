import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiShow,BiHide } from "react-icons/bi";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
 let[show, setShow] = useState(false)
  let[user, setUser] = useState({
    username:'',
    password:''
  })

  let getUserData = (event)=>{
    let inputName = event.target.name;
    let inputValue = event.target.value;
    let oldData = {...user};
    oldData[inputName] = inputValue;
    setUser(oldData);
  }
  let navigate = useNavigate()
  let onsubmit = async (event)=>{
    event.preventDefault();
    let response = await axios.post("http://localhost:8080/client/user/data",user);
    
    if( response.data.message == "loged"){
      navigate("/client/dashboard")
    }
    else{
      alert(response.data.message);
    }
    
  }

  return (
    <div className='p-4'>
      <div>
        <video autoPlay loop className='min-w-[100%]  fixed right-0 bottom-0 min-h-[100%] object-cover overflow-clip over'>
            <source src='/videos/adpp_is.mp4'/>
        </video>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='border z-[5] w-[400px] p-6 mx-auto bg-white mt-[70px] rounded'>
          <h1 className='text-center text-2xl font-bold text-gray-600 py-5'>Client Login</h1>
          <form action="" onSubmit={onsubmit}>
            <div>
              <label htmlFor="" className='text-gray-600'>Username</label>
              <div>
                <input type="text" placeholder='Enter username' name='username' value={user.username} className='border w-full py-2 px-2 outline-yellow-300' onChange={getUserData}/>
              </div>
            </div>
            <div className='my-5'>
              <label htmlFor="" className='text-gray-600'>Password</label>
              <div className='relative'>
                <input type={`${show ? 'text' : 'password'}`} placeholder='Enter password' name='password' value={user.password} className='border w-full py-2 px-2  outline-yellow-300' onChange={getUserData}/>
                {
                  show ? <span className='absolute top-3 right-2 text-xl text-gray-600' onClick={()=>setShow(!show)}><BiShow/></span>:
                  <span className='absolute top-3 right-2 text-xl text-gray-600' onClick={()=>setShow(!show)}><BiHide/></span>
                }
              </div>
            </div>
            <div className='my-5'>
              <div>
                  <h1 className='text-blue-600'><Link>Forgot Password</Link></h1>
              </div>
            </div>
            <div className='my-4'>
              <div>
                <input type="submit" value={'Login'} className='border w-full py-2 px-2 bg-blue-600 text-white rounded hover:bg-blue-700'/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
