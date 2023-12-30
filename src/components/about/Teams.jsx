import Icon1 from '../../assets/about/team/Frame 7556.png'
import Icon2 from '../../assets/about/team/Frame 7556-1.png'
import Icon3 from '../../assets/about/team/Frame 7556-2.png'
import Icon4 from '../../assets/about/team/Frame 7556-3.png'

const data = [
  {
    name: 'Sandile Dlamini',
    title: 'Founder, CEO',
    image: Icon1,
    color: '#FFECE5',
  },
  {
    name: 'Sipho Mkhize',
    title: 'Chief Operations Officer',
    image: Icon2,
    color: '#FFE5FE',
  },
  {
    name: 'Ntombi Mkhize',
    title: 'Advisor, HR',
    image: Icon3,
    color: '#FFE5EB',
  },
  {
    name: 'Malusi Mkhize',
    title: 'Advisor, Finance',
    image: Icon4,
    color: '#E5FFF1',
  },
]

export default function AboutTeams() {
  return (
    <section className="j_about_team">
      <h2>Our Team & Advisors</h2>
      <div className="j_about_team-content">
        {data.map((item, i) => (
          <div
            className="card"
            key={i + 1}
          >
            <img className='my-2' src={item.image} width="200px" height="200px" alt="icon" />
            <div className="flex flex-col">
              <p>{item.name}</p>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
