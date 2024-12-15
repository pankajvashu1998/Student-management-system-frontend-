import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CourseInterestList() {
    let[courseData, setCourseData] = useState([])
    useEffect(()=>{
        let getData = async ()=>{
            let response = await axios.get("http://localhost:8080/student/course-interest/list")
            setCourseData(response.data.courseinterestData)
            
        }
        getData()
    },[])
    console.log(courseData);
  return (
    <div>
         <div className=''>
            <h1 className='py-5 text-center text-2xl text-white bg-blue-600 font-bold'>STUDENT COURSE INTEREST LIST</h1>
            <div className='overflow-auto'>
                <table className='w-full'>
                    <thead>
                            <tr className='bg-red-500 text-white'>
                                <th className='px-2 py-2  text-sm text-left'>S.No</th>
                                <th className='px-2 py-2  text-sm text-left'>Student Name</th>
                                <th className='px-2 py-2  text-sm text-left'>Course Interest</th>
                                <th className='px-2 py-2  text-sm text-left'>Mobile No.</th>
                                <th className='px-2 py-2  text-sm text-left'>Email Id</th>
                            </tr>
                    </thead>
                    <tbody>
                           {
                                courseData.map((value, index)=>(
                                    <tr key={index} className='border-b border-red-400 border-dotted'>
                                        <td className='px-2 py-1 bg-gray-200'>{index+1}</td>
                                        <td className='px-2 py-1 bg-gray-200'>{value.fullname}</td>
                                        <td className='px-2 py-1 bg-gray-200'>{value.courseInterest}</td>
                                        <td className='px-2 py-1 bg-gray-200'>{value.phoneNumber}</td>
                                        <td className='px-2 py-1 bg-gray-200'>{value.emailId}</td>
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

export default CourseInterestList
