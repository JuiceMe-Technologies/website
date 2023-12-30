// import Layout from '../base/Layout'
import EmployerIntro from './Intro'
import EmployerTestimonials from './Testimonials'
import EmployerServices from './services'
import DollarSign from '../../assets/employer/ewa/Frame_7556_1.svg'
import Receipt from '../../assets/employer/ewa/Frame_72556_1.svg'
import Money from '../../assets/employer/ewa/Frame_7526_1.svg'
import Chat from '../../assets/employer/ewa/Frame_83783.svg'
import Payslip from '../../assets/employer/ewa/Frame_1326.svg'
import TimeSheet from '../../assets/employer/ewa/Frame_7783.svg'
import EmployerAccess from '../../assets/employer/Frame_7659.png'
import JuciePortal from '../../assets/employer/Frame_7662.png'
import ThereMore from '../../assets/employer/Frame_7664.png'

//
import User from '../../assets/employer/ewa/Frame_7556.svg'
import Withdrawal from '../../assets/employer/ewa/Frame_7557.svg'
import Deduct from '../../assets/employer/ewa/Frame_7557-1.svg'
import Balance from '../../assets/employer/ewa/Frame_7557-2.svg'

const data = [
  {
    title: 'Sign Up',
    desc:
      'Employer add employees in the Juice Portal and set the percentage employees can withdraw.',
    icon: User,
    shadow: `4px 4px 70px 0px rgba(252, 125, 74, 0.10)`,
    color: '#FC7D4A'
  },
  {
    title: 'Withdraw',
    desc:
      'Employees can withdraw accrued salary at any time using WhatsApp and are charged a once-off withdrawal fee. ',
    icon: Withdrawal,
    shadow: `4px 4px 70px 0px rgba(240, 5, 231, 0.10)`,
    color: '#F005E7'
  },
  {
    title: 'Deduct',
    desc:
      'Withdrawn amount is automatically deducted from the employee’s salary at payday and remitted to JUICE.',
    icon: Deduct,
    shadow: `4px 4px 70px 0px rgba(227, 5, 98, 0.10)`,
    color: '#E30562'
  },
  {
    title: 'Balance',
    desc:
      'Employee receives balance of withdrawn amount from salary at the end of the month.',
    icon: Balance,
    shadow: `4px 4px 70px 0px rgba(80, 165, 87, 0.10)`,
    color: '#50A557'
  },
]

export default function EmployeerPage() {
  return (
    <>
      <EmployerIntro />
      <EmployerServices />
      <section className="j_emr_status">
        <div className="w-100 flex md:flex-row flex-col justify-center items-center p-4">
          <div className="md:w-[20%] md:my-auto my-3 flex flex-col justify-center items-center">
            <p className="text-6xl font-bold my-2">92%</p>
            <span className="text-center text-sm my-auto">
              Monthly retention, employees requesting their earned salaries
            </span>
          </div>
          <div className="md:w-[20%] md:my-auto my-3 flex flex-col justify-center items-center">
            <p className="text-6xl font-bold my-2">76%</p>
            <span className="text-center text-sm my-auto">
              Increase in job application
            </span>
          </div>
          <div className="md:w-[20%] md:my-auto my-3 flex flex-col justify-center items-center">
            <p className="text-6xl font-bold my-2">46%</p>
            <span className="text-center text-sm my-auto">
              Reduction in staff turnover
            </span>
          </div>
          <div className="md:w-[20%] md:my-auto my-3 flex flex-col justify-center items-center">
            <p className="text-6xl font-bold my-2">0</p>
            <span className="text-center text-sm my-auto">Default rates</span>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="j_emr_access">
        <div className="j_emr_access-left">
          <span className="title">What is Earned Wage Access?</span>
          <h2 className="my-4">An incredibly easy solution to roll out</h2>
          <p className="my-3">
            Earned Wage Access (EWA) is a financial technology solution that
            provides employees access to their earned wages outside of their
            traditional pay cycle. If an employee has worked for 10 days, she
            should be able to access her 10 days worth of salary. It helps
            employees reduce the dangers of payday loans and other predatory
            financial products. These products often target individuals who need
            quick cash, but come with unfavorable terms. This can result in a
            cycle of debt that is difficult to break which affects their
            performance at the workplace.
          </p>
          <h2 className="my-4">
            Offering Earned Wage Access to your employees is super easy:
          </h2>

          <div className="flex md:flex-row flex-col my-2">
            <div className="md:w-[25%] w-100 flex flex-col ">
              <img
                className="my-2"
                width="40px"
                src={Receipt}
                alt="receipt-icon"
              />
              <span className="text-sm">No changes in your payroll system</span>
            </div>
            <div className="md:w-[25%] w-100 md:mx-3 flex flex-col ">
              <img
                className="my-2"
                width="40px"
                src={DollarSign}
                alt="dollar-icon"
              />

              <span className="text-sm">No cost to the employer</span>
            </div>
            <div className="md:w-[25%] w-100 md:mx-3 flex flex-col ">
              <img className="my-2" width="40px" src={Money} alt="money-icon" />

              <span className="text-sm">No impact in your cashflow</span>
            </div>
          </div>
        </div>
        <div className="j_emr_access-right">
          <img className="my-2" src={EmployerAccess} alt="employer-access" />
        </div>
      </section>

      <section className="j_emr_waw">
        <h2>How Earned Wage Access Works</h2>

        <div className="j_emr_waw-content">
          {data.map((item, _) => (
            <div className="card" key={_ + 1} style={{
              boxShadow: item.shadow
            }}>
              <div className="card-icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                <div className="card-content">
                  
                  <div className="card-desc">
                  <h3 className="my-2"
                    style={{
                      color: item.color
                  }}
                  >{item.title}</h3>
                    <p className="my-2">{item.desc}</p>
                  </div>
                </div>
              </div>
          ))}

        </div>
      </section>

      {/* juice-portal */}
      <section className="j_emr_access md:my-0 my-10">
        <div className="j_emr_access-left">
          <span className="title">The Juice Portal</span>
          <h2 className="my-4">Easy implementation, go live within minutes</h2>
          <p className="my-3">
            We don't replace your current solution; instead, we enhance it by
            seamlessly integrating your HR/payroll system with Juice or
            providing Juice as a powerful standalone solution.
            <br />
            <br />
            Our system can integrate with any payroll and HR system via API’s or
            SFTP file exchange.
            <br />
            <br />
            Highly secured, cloud-based platform integrated with WhatsApp to
            help you manage some of your biggest pain points: productivity,
            retention, absenteeism, and communication.
          </p>
        </div>
        <div className="j_emr_access-right">
          <img className="my-2" src={JuciePortal} alt="juice-portal" />
        </div>
      </section>
      {/*  */}
      {/* juice-portal */}
      <section className="j_emr_more">
        <div className="j_emr_more-left">
          <img className="my-2" src={ThereMore} alt="there-more" />
        </div>
        <div className="j_emr_more-right">
          <h2 className="my-4">There’s More!</h2>
          <p className="my-3 desc">
            Employers can opt to use our Juice Portal to digitalize their HR and
            Payroll processes and pay a SaaS fee per active feature and active
            user
          </p>

          <div className="flex md:flex-row flex-col my-2">
            <div className="w-100 flex flex-col md:my-1 my-3">
              <img className="my-2" width="40px" src={Chat} alt="chat-icon" />
              <p className="font-bold text-orange">Communication</p>
              <span className="text-sm md:my-0 my-2">
                Get critical information and surveys delivered to you employees
                from their favorite app, WhatsApp
              </span>
            </div>
            <div className="w-100 md:mx-3 md:my-1 my-3 flex flex-col ">
              <img
                className="my-2"
                width="40px"
                src={Payslip}
                alt="payslip-icon"
              />
              <p className="font-bold text-orange">Send payslips</p>
              <span className="text-sm md:my-0 my-2">
                Save cost from printing payslips and deliver secure payslips via
                WhatsApp
              </span>
            </div>
            <div className="w-100 md:mx-3 md:my-1 my-3 flex flex-col ">
              <img
                className="my-2"
                width="40px"
                src={TimeSheet}
                alt="timesheet-icon"
              />
              <p className="font-bold text-orange">Time Attendance</p>
              <span className="text-sm md:my-0 my-2">
                Make it easier to track employee time attendance using WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <EmployerTestimonials />
    </>
  )
}
