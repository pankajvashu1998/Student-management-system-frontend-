import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ExamRegistrationList() {
    let [examData, setExamData] = useState([]);
    useEffect(()=>{
        let getExamData = async ()=>{
            let response = await axios.get("http://localhost:8080/students/exam-registration/list")
            setExamData(response.data.examData); 
        }
        getExamData()
    },[]);
  return (
    <div>
        <div className=''>
            <h1 className='py-5 text-center text-2xl text-white bg-blue-600 font-bold'>STUDENT EXAM REGISTRATION LIST</h1>
            <div className='overflow-auto'>
                <table className='w-full'>
                    <thead>
                            <tr className='bg-red-500 text-white'>
                                <th className='px-2 py-2  text-sm text-left'>S.No</th>
                                <th className='px-2 py-2  text-sm text-left'>Student Name</th>
                                <th className='px-2 py-2  text-sm text-left'>Father's Name</th>
                                <th className='px-2 py-2  text-sm text-left'>Mobile No.</th>
                                <th className='px-2 py-2  text-sm text-left'>Registration No.</th>
                                <th className='px-2 py-2  text-sm text-left'>Batch Time</th>
                            </tr>
                    </thead>
                    <tbody>
                            {
                                examData.map((value, index)=>(
                                    <tr key={index} className='border-b border-red-400 border-dotted'>
                                        <td className='px-2 py-1 bg-blue-200 '>{index+1}</td>
                                        <td className='px-2 py-1 bg-blue-200 '>{value.studentname}</td>
                                        <td className='px-2 py-1 bg-blue-200 '>{value.fathername}</td>
                                        <td className='px-2 py-1 bg-blue-200 '>{value.mobileno}</td>
                                        <td className='px-2 py-1 bg-blue-200 '>{value.registrationno}</td>
                                        <td className='px-2 py-1 bg-blue-200 '>{value.batchtime}</td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ExamRegistrationList
