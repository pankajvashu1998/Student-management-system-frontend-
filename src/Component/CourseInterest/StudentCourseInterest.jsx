import React, { useState } from 'react'
import axios from 'axios'


function CourseInterest() {
  let[formData, setFormData] = useState(
    {
      fullname: '',
      courseInterest:'',
      phoneNumber:'',
      emailId:''
    }
  )

  const getFormData = (event)=>{
    let oldData = {...formData};
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  }

  const handleForm = async (event)=>{
    event.preventDefault();
    let response = await axios.post('http://localhost:8080/students/course-interests',formData)
   
    if(response.data.message == "Successfully submited"){
      setFormData({
        fullname: '',
        courseInterest:'',
        phoneNumber:'',
        emailId:''
      })
    }
    alert(response.data.message); 
  }

  return (
    <div>
      <div className='flex items-center justify-center p-4'>
        <div className='max-w-[400px] border p-6 bg-gray-100'>
               <form action="" onSubmit={handleForm}>
                        <h1 className='py-2 text-xl font-bold text-gray-600'>GET US TO CALL YOU BACK</h1>
                    <div>
                        <input type="text" placeholder='Full Name' name='fullname' value={formData.fullname} className='border w-full py-[9px] px-2 rounded' onChange={getFormData}/>
                    </div>
                    <div className='my-5'>
                        <input type="text" placeholder='Course Of Interest' name='courseInterest' value={formData.courseInterest} className='border w-full py-[9px] px-2 rounded' onChange={getFormData}/>
                    </div>
                    <div className='my-5'>
                        <input type="number" placeholder='Phone No' name='phoneNumber' value={formData.phoneNumber} className='border w-full py-[9px] px-2 rounded' onChange={getFormData}/>
                    </div>
                    <div className='my-5'>
                        <input type="email" placeholder='E-mail' name='emailId' value={formData.emailId} className='border w-full py-[9px] px-2 rounded' onChange={getFormData}/>
                    </div>
                    <div className='my-5'>
                        <input type="submit" className='border  py-[9px] px-6 rounded hover:bg-blue-600 cursor-pointer bg-blue-700 text-white'/>
                    </div>
               </form>
        </div>
      </div>
    </div>
  )
}

export default CourseInterest
