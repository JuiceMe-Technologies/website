
import HeaderImage from '../../assets/employee/employee_intro_image.png'
export default function EmployeeIntro() {
  return (
    <>
      <section className="j_employee">
        <div className="j_employee-intro">
          <p>Access your Pay Today via WhatsApp</p>
          <span className="intro-text md:my-4 my-2 md:w-[70%] w-100">
            The pain of waiting for payday when you've already worked hard for
            your money is no more. Using WhatsApp, you can now access your
            earnings on your terms any day before payday with Juice.
          </span>
          <div className="flex md:flex-row flex-col">
            <button className="w-52 p-4 bg-black text-white rounded md:my-2 my-2">
              Get Started
            </button>
            <button className="w-52 p-4 bg-white text-black border border-black rounded md:my-2  md:mx-2">
              Refer your employer
            </button>
          </div>
        </div>
        <div className="j_employee-intro2">
          <img src={HeaderImage} width="500" height="500" alt="header-image" />
        </div>
      </section>
    </>
  )
}
