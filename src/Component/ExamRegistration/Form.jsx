import React, { useState } from 'react'
import axios from 'axios'

function Form() {
  let[formData, setFormData] = useState({
    studentname:'',
    fathername:'',
    mobileno:'',
    registrationno:'',
    batchtime:''

  })

  let getFormData = (event)=>{
    let inputName = event.target.name;
    let inputValue = event.target.value;
    let oldFormData = {...formData};
    oldFormData[inputName] = inputValue;
    setFormData(oldFormData);
  }

  let handleSubmit = async (event)=>{
    event.preventDefault();
    let response = await axios.post("http://localhost:8080/students/exam/registration/form",formData);
    alert(response.data.message);

    if(response.data.message == "Successfully submited"){
      setFormData({
        studentname:'',
        fathername:'',
        mobileno:'',
        registrationno:'',
        batchtime:''
      })
    }
  }
  return (
    <div>
      <div className='p-4 border bg-gray-100'>
        <form action="" onSubmit={handleSubmit}>
        <h1 className='py-2 text-blue-500 italic font-semibold underline '>Fill this form to register for examination</h1>
            <div className='w-full'>
                <label htmlFor="" className='text-gray-700'>Enter Full Name</label>
                <input type="text" placeholder='Student Name' name='studentname' value={formData.studentname} className='border py-3 px-2 w-full rounded' onChange={getFormData}/>
            </div>
            <div className='w-full my-3'>
                <label htmlFor="" className='text-gray-700'>Enter Father's Name</label>
                <input type="text" placeholder="Father's Name" name='fathername' value={formData.fathername} className='border py-3 px-2 w-full rounded' onChange={getFormData}/>
            </div>
            <div className='w-full my-3'>
                <label htmlFor="" className='text-gray-700'>Enter Mobile No.</label>
                <input type="number" placeholder="Mobile No." name='mobileno' value={formData.mobileno} className='border py-3 px-2 w-full rounded' onChange={getFormData}/>
            </div>
            <div className='w-full my-3'>
                <label htmlFor="" className='text-gray-700'>Enter Registration No.</label>
                <input type="text" placeholder="Registration No." name='registrationno' value={formData.registrationno} className='border py-3 px-2 w-full rounded' onChange={getFormData}/>
            </div>
            <div className='w-full my-3'>
                <label htmlFor="" className='text-gray-700'>Select Batch Time</label>
                <input type="time"  name='batchtime' value={formData.batchtime} className='border py-3 px-2 w-full' onChange={getFormData}/>
            </div>
            <div className='w-full my-3'>
                <input type="submit"  className='border py-3 px-5 bg-red-600 text-white font-bold rounded cursor-pointer'/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
