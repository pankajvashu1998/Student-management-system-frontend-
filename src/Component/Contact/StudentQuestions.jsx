import React, { useState } from 'react'
import axios from 'axios';

function StudentQuestions() {
  let[formData, setFormData]  = useState({
    fullname:'',
    mobileno:'',
    email:'',
    question:''
  })

  let getFormData = (event)=>{
    let inputName = event.target.name;
    let inputValue = event.target.value;
    let oldFormData = {...formData};
    oldFormData[inputName] = inputValue;
    setFormData(oldFormData);
  }

  let handleSubmit = async(event)=>{
    event.preventDefault();
    let response = await axios.post('http://localhost:8080/students/questions',formData);
    alert(response.data.message);
    if(response.data.message == "Successfully submited"){
      setFormData({
        fullname:'',
        mobileno:'',
        email:'',
        question:''
      })
    }
  }
  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
       <div className='w-full'>
          <h1 className='py-3 font-bold text-2xl text-gray-800'>GET IN TOUCH</h1>
           <div className=''>
                <input type="text" placeholder='Full Name' name='fullname' value={formData.fullname} className='border py-3 px-2 w-full' onChange={getFormData}/>     
           </div>

           <div className='my-5'>
                <input type="number" placeholder='Mobile No.' name='mobileno' value={formData.mobileno} className='border py-3 px-2 w-full' onChange={getFormData}/> 
           </div>

           <div className='my-5'>
            <input type="email" placeholder='Email Id' name='email' value={formData.email} className='border py-3 px-2 w-full' onChange={getFormData} />
           </div>

           <div>
            <textarea rows={4} name="question" placeholder='Write Your Question' value={formData.question} className='border py-3 px-2 w-full' onChange={getFormData}></textarea>
           </div>
           <div className='my-4 rounded cursor-pointer'>
            <button className='py-3 px-5 bg-blue-700 text-white font-semibold'>Submit</button>
           </div>
           
        </div>
       </form>
    </div>
  )
}

export default StudentQuestions
