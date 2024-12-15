import React from 'react'
import Navbar from '../Navbar'
import Slides from '../Header Slides/Slides'
import ContentSlides from '../Header Slides/ContentSlides'
import WelcomePage from '../Welcome page/WelcomePage'
import CourseHome from '../Course Home/CourseHome'
import WhyChoseUs from '../Why chose us/WhyChoseUs'
import WhyWithUs from '../Why with us/WhyWithUs'
import Testimonial from '../Testimonials/Testimonial'
import PlacementPartner from '../Placement partner/PlacementPartner'
import CounterUp from '../Counter Up/CounterUp'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
            <Navbar/>
           <div className=''> <Slides/> </div>
           <div className=''> <ContentSlides/></div>
           <div className='mt-[155px]'><WelcomePage/></div>
           <div className=''><CourseHome/></div>
           <div className=''><WhyChoseUs/></div>
           <div className=''><Testimonial/></div>
           <div className=''><WhyWithUs/></div>
           <div className=''><CounterUp/></div>
           <div className=''><PlacementPartner/></div>
           <div className=''><Footer/></div>

    </div>
  )
}

export default Home
