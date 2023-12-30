
import HeaderImage from '../../assets/employer/employer_intro_image.png'
export default function EmployeerIntro() {
  return (
    <>
      <section className="j_employeer">
        <div className="j_employeer-intro">
          <p>
            Transform your HR & Payroll <br /> Processes using WhatsApp
          </p>
          <ul>
            <li>Remove financial stress on your employees.</li>
            <li>Become an employer of choice by ensuring any day is pay for your employees.</li>
            <li>Remove financial stress on your employees.</li>
            <li>Save cost and time by digitalizing your HR and payroll process.</li>
          </ul>
          <button className="w-52 p-4 bg-black text-white rounded md:my-2 my-5">
         Request a demo
          </button>
        </div>
        <div className="j_employeer-intro2">
          <img src={HeaderImage} width="500" height="500" alt="header-image" />
        </div>
      </section>
    </>
  )
}
