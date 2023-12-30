import WhatsAppIcon from '../../assets/whatsapp_icon.svg'
import HeaderImage from '../../assets/home/home_header_image.svg'
export default function Intro() {
  return (
    <>
      <section className="j_home">
        <div className="j_home-intro">
          <p>
            Helping companies
            <br />
            <span className=""> Ensure any day is payday</span>
            <span className="hidden">Track time attendance</span>
            <span className="hidden">Process pay slips</span>
            <span className="hidden">Send critical information</span>
            <br />
            <div className="flex">
              using
              <img
                className="mx-2 w-sm"
                src={WhatsAppIcon}
                alt="whatsapp-icon"
              />
              WhatsApp
            </div>
          </p>
          <span className="intro-text my-2">
            Earned Wage Access and HR Solution Designed for <br /> Africa’s
            Workforce
          </span>
          <button className="w-52 p-4 bg-black text-white rounded md:my-2 my-5">
            Get Started
          </button>
        </div>
        <div className="j_home-intro2">
          <img src={HeaderImage} width="500" height="500" alt="header-image" />
        </div>
      </section>
    </>
  )
}
