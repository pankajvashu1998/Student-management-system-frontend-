import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Component/About/About'
import Course from './Component/Course/Course'
import Contact from './Component/Contact/Contact'
import Zone from './Component/Zone/Zone'
import Root from './Component/Root Route/Root'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import ExamRegistration from './Component/ExamRegistration/ExamRegistration'
import Result from './Component/Result/Result'
import PdfDownload from './Component/PDF Downloads/PdfDownload'
import Dashboard from './Component/Client Dashboard/Dashboard'
import CourseInterestList from './Component/Student Course Interest List/CourseInterestList'
import ExamRegistrationList from './Component/Student Exam Registration List/ExamRegistrationList'
import StudentQuestionsList from './Component/Student Questions List/StudentQuestionsList'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Root/>}>
              <Route path='about' element={<About/>}/>
              <Route path='course' element={<Course/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='zone' element={<Zone/>}/>
          </Route>
          <Route path='client/login' element={<Login/>}/>
          <Route path='students/exam-registration/form' element={<ExamRegistration/>}/>
          <Route path='students/results' element={<Result/>}/>
          <Route path='pdf/downloads' element={<PdfDownload/>}/>
          <Route path='client/dashboard' element={<Dashboard/>}>
              <Route path='students/course-interest/list' element={<CourseInterestList/>}/>
              <Route path='students/exam-registration/list' element={<ExamRegistrationList/>}/>
              <Route path='students/questions/list' element={<StudentQuestionsList/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
