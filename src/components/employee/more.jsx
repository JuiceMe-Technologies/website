import EmployeeAccess from '../../assets/employee/Frame 7664.png'
import Saving from '../../assets/employee/Frame_7556.svg'
import BNPL from '../../assets/employee/Frame_7556-1.svg'
import Grow from '../../assets/employee/Frame_7556-2.svg'
export default function EmployeeMore() {
    return (
        <>
         <section className="j_employee_more">
        <div className="j_employee_more-left">
          <img className="my-2" src={EmployeeAccess} alt="employer-access" />
        </div>
        <div className="j_employee_more-right">
          <h2 className="my-4">There’s More!</h2>
          <p className="my-3 desc">
            There is more coming soon that you will do from your WhatsApp
          </p>

          <div className="flex md:flex-row flex-col my-2">
            <div className="md:w-[25%] w-100 flex flex-col md:my-1 my-3">
              <img className="my-2" width="40px" src={Saving} alt="saving-icon" />
              <p className="font-bold text-orange">Saving</p>
              <span className="text-sm md:my-0 my-2">
                Access high interest rate
              </span>
            </div>
            <div className="md:w-[25%] w-100 md:mx-3 md:my-1 my-3 flex flex-col ">
              <img
                className="my-2"
                width="40px"
                src={BNPL}
                alt="bnpl-icon"
              />
              <p className="font-bold text-orange">Buy now pay later</p>
              <span className="text-sm md:my-0 my-2">
                Get products from our partner shops and pay later
              </span>
            </div>
            <div className="md:w-[25%] w-100 md:mx-3 md:my-1 my-3 flex flex-col ">
              <img
                className="my-2"
                width="40px"
                src={Grow}
                alt="grow-icon"
              />
              <p className="font-bold text-orange">Grow your knowledge</p>
              <span className="text-sm md:my-0 my-2">
                Earn about personal finance such save pension, saving, budgeting
              </span>
            </div>
          </div>
        </div>
      </section></>
    )
}