import Quote from '../../assets/home/mission/quote.svg'

export default function AboutMission() {
  return (
    <>
      <section className="j_about_mission">
        <div className="j_about_mission-content">
          <span className="title">Reality of the African Continent</span>
          {/*  */}

          <div className="w-100 flex md:flex-row flex-col md:gap-4 justify-between p-4">
            <div className="md:w-[20%] h-[100px] my-3 flex flex-col md:justify-center items-center">
              <p className="text-4xl py-2 font-bold my-auto">1 Billion</p>
              <span className="md:text-center text-sm my-auto">
                Workforce will be added in the next 10 years
              </span>
            </div>
            <div className="md:w-[20%] h-[100px] my-3 flex flex-col md:justify-center items-center">
              <p className="text-4xl py-2 font-bold my-auto">80%</p>
              <span className="md:text-center text-sm my-auto">
                Working in deskless jobs
              </span>
            </div>
            <div className="md:w-[20%] h-[100px] my-3 flex flex-col md:justify-center items-center">
              <p className="text-4xl py-2 font-bold my-auto">$300</p>
              <span className="md:text-center text-sm my-auto">
                Average monthly salary
              </span>
            </div>
            <div className="md:w-[20%] h-[100px] my-3 flex flex-col md:justify-center items-center">
              <p className="text-4xl py-2 font-bold my-auto">WhatsApp</p>
              <span className="md:text-center text-sm my-auto">
                Is the dominate social media app
              </span>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="j_about_mission-content">
          <span className="title">Our Mission</span>
          <img className="my-4" src={Quote} alt="icon" />

          <p className="heading">
            Accelerate Africa’s industrialization, by ensuring an engaged and
            productive workforce.
          </p>
        </div>
      </section>
    </>
  )
}
