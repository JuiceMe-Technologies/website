import EmpowerImage from '../../assets/home/home_empower_image.png'
import Icon1 from '../../assets/home/empower/Frame_7556.svg'
import Icon2 from '../../assets/home/empower/Frame_7557-1.svg'
import Icon3 from '../../assets/home/empower/Frame_7557.svg'

export default function HomeEmpower() {
  return (
    <>
      <section className="j_empower">
        <div className="j_empower-left">
          <h2>Empower</h2>
          <p className="my-2">
            Ensure any day is payday for your employees. We empower your
            employees access their earned salaries anytime before payday without
            disrupting your payroll systems. It's not a loan, so there's no
            interest, just their earned pay whenever they need it.
          </p>
          <br />
          <div className="flex my-2">
            <img className="my-auto" src={Icon1} alt="empower-icon" />

            <span className="my-auto mx-2">Zero cost to the employer</span>
          </div>
          <div className="flex my-2">
            <img className="my-auto" src={Icon2} alt="empower-icon" />

            <span className="my-auto mx-2">Controlled by you</span>
          </div>
          <div className="flex my-2">
            <img className="my-auto" src={Icon3} alt="empower-icon" />

            <span className="my-auto mx-2">Easy Integration</span>
          </div>
        </div>
        <div className="j_empower-right">
          <img
            src={EmpowerImage}
            width="800"
            height="800"
            alt="empower-image"
          />
        </div>
      </section>

      <div className="w-100 flex md:flex-row flex-col justify-center items-center p-4">
        <div className="md:w-[20%] md:my-auto my-3 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold my-2">92%</p>
          <span className="text-center text-sm my-auto">
            Monthly retention, employees requesting their earned salaries
          </span>
        </div>
        <div className="md:w-[20%] md:my-auto my-3 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold my-2">76%</p>
          <span className="text-center text-sm my-auto">
            Increase in job application
          </span>
        </div>
        <div className="md:w-[20%] md:my-auto my-3 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold my-2">46%</p>
          <span className="text-center text-sm my-auto">
            Reduction in staff turnover
          </span>
        </div>
        <div className="md:w-[20%] md:my-auto my-3 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold my-2">0</p>
          <span className="text-center text-sm my-auto">Default rates</span>
        </div>
      </div>
    </>
  )
}
