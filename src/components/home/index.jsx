// import Layout from '../base/Layout'
import HomeAddOn from './AddOn'
import Intro from './Intro'
import Testimonials from './Testimonials'
import HomeEmpower from './empower'
import HomeEngage from './engage'
import HomeExcel from './excel'
import HomeMission from './mission'

export default function HomePage() {
  return (
    <>
      <Intro />
      <HomeMission />
      <HomeEngage />
      <HomeAddOn />
      <HomeEmpower />
      <br />
      <br />
      <HomeExcel />
      {/* <Testimonials /> */}
    </>
  )
}
