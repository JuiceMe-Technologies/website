// import Layout from '../base/Layout'
import EmployeeIntro from './Intro'
import ReferForm from './ReferForm'
import EmployeeTestimonials from './Testimonials'
import EmployeeMission from './mission'
import EmployeeMore from './more'



export default function EmployeePage() {
  return (
    <>
      <EmployeeIntro />
      <EmployeeMission />
      <EmployeeMore />
      {/* <EmployeeTestimonials /> */}
      <div className="content-center">
         <ReferForm/>
      </div>
    </>
  )
}
