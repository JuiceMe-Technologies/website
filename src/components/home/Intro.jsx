import WhatsAppIcon from "../../assets/whatsapp_icon.svg";
import HeaderImage from "../../assets/home/home_header_image.png";
export default function Intro() {
  return (
    <>
      <section className="j_home">
        <div className="j_home-intro">
          <h2>
            Get your
            <br />
            <span className="">earnings </span> when
            <br />
            you need them
            {/* <span className="hidden">Track time attendance</span>
              <span className="hidden">Process pay slips</span>
              <span className="hidden">Send critical information</span> */}
            {/* <br />
            <div className="flex">
              using
              <img
                className="mx-2 w-sm"
                src={WhatsAppIcon}
                alt="whatsapp-icon"
              />
              WhatsApp
            </div> */}
          </h2>
          <span className="intro-text my-2">
            Juiceme gives employees access to their salary for <br />
            the days they worked any time before payday via <br /> WhatsApp
            <img
              className="inline w-5"
              src={WhatsAppIcon}
              alt="whatsapp-icon"
            />
          </span>
          <button className="w-52 p-4 bg-black text-white rounded-xl md:my-2 my-5">
            Get Started
          </button>
        </div>
        <div className="j_home-intro2">
          <img src={HeaderImage} width="700" height="500" alt="header-image" />
        </div>
      </section>
    </>
  );
}
