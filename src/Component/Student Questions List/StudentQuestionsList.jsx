import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StudentQuestionsList() {
    let[questionData, setQuestionData] = useState([])
    useEffect(()=>{
        let getData = async ()=>{
            let response = await axios.get("http://localhost:8080/student/questions/list")
            setQuestionData(response.data.questionData)
        }
        getData();
    },[])
  return (
    <div>
        <div className=''>
            <h1 className='py-5 px-2 text-center text-2xl text-white bg-blue-600 font-bold'>STUDENT QUESTIONS LIST</h1>
            <div className='overflow-auto'>
                <table className='w-full'>
                    <thead>
                            <tr className='bg-red-500 text-white'>
                                <th className='px-2 py-2  text-sm text-left'>S.No</th>
                                <th className='px-2 py-2  text-sm text-left'>Student Name</th>
                                <th className='px-2 py-2  text-sm text-left'>Mobile No.</th>
                                <th className='px-2 py-2  text-sm text-left'>Email Id</th>
                                <th className='px-2 py-2  text-sm text-left'>Questions</th>
                            </tr>
                    </thead>
                    <tbody>
                          {
                            questionData.map((value, index)=>(
                                <tr key={index} className='border-b border-red-400 border-dotted'>
                                    <th className='px-2 py-1 text-left font-normal text-gray-600'>{index+1}</th>
                                    <th className='px-2 py-1 text-left font-normal text-gray-600'>{value.fullname}</th>
                                    <th className='px-2 py-1 text-left font-normal text-gray-600'>{value.mobileno}</th>
                                    <th className='px-2 py-1 text-left font-normal text-gray-600'>{value.email}</th>
                                    <th className='px-2 py-1 text-left font-normal text-gray-600'>{value.question}</th>
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

export default StudentQuestionsList
