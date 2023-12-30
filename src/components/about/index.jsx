// import Layout from '../base/Layout'
import AboutIntro from './Intro'
import AboutTestimonials from './Testimonials'
import AboutMission from './mission'
import Icon1 from '../../assets/about/values/Frame 7556.svg'
import Icon2 from '../../assets/about/values/Frame 7556-1.svg'
import Icon3 from '../../assets/about/values/Frame 7556-2.svg'
import Icon4 from '../../assets/about/values/Frame 7556-3.svg'
import AboutTeams from './Teams'

const data = [
  {
    title: 'Think Big',
    icon: Icon1,
    color: '#FFECE5',
  },
  {
    title: 'Invent and Simplify',
    icon: Icon2,
    color: '#FFE5FE',
  },
  {
    title: 'Seek Partnerships',
    icon: Icon3,
    color: '#FFE5EB',
  },
  {
    title: 'Create an unrivaled Work environment',
    icon: Icon4,
    color: '#E5FFF1',
  },
]

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutMission />
      <section className="j_about_values">
        <h2>Our Values</h2>
        <div className="j_about_values-content">
          {data.map((item, i) => (
            <div
              className="card"
              key={i + 1}
              style={{
                background: item.color,
              }}
            >
              <img src={item.icon} width="50px" height="50px" alt="icon" />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>
        <section className="j_about_mission_2">
        <div className="j_about_mission_2-content">
          <h2 className="heading">How we think about earned wage access? </h2>
          <p className="desc">
            Our dual proposition for the employer and the employee creates a sticky product: unlocking scalable efficiencies for HR by integrating with WhatsApp while empowering employees to access much-needed financial relief.
            </p>
        </div>
    
      </section>
      {/* <AboutTeams/> */}

      {/* <AboutTestimonials /> */}
    </>
  )
}
