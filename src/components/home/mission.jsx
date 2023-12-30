import HomeServices from './services'
import Quote from '../../assets/home/mission/quote.svg'

export default function HomeMission() {
  return (
    <>
      <section className="j_mission">
        <div className="j_mission-content">
          <span>Our Mission</span>
          <img
            className="my-4"
            src={Quote}
            alt="icon"
          />

          <p>
            Accelerate Africa’s industrialization by ensuring an engaged and
            productive workforce.
          </p>
        </div>

        <div className="j_mission-content">
          <span>Working Across Industries</span>
          <HomeServices />
        </div>
      </section>
    </>
  )
}
