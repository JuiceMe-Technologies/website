import Icon1 from "../../assets/home/add-on/Frame_7556.svg";
import Icon2 from "../../assets/home/add-on/Frame_7557.svg";
import Icon3 from "../../assets/home/add-on/Frame_7558.svg";
import Icon4 from "../../assets/home/add-on/Frame_7559.svg";
import AddOnImage from "../../assets/home/add-on/image_1.svg";

export default function HomeAddOn() {
  return (
    <>
      <div className="j_add-on ">
        <div className="j_add-on-content">
          <span>A Software Add-on</span>
          <h2>Works with all HR and Payroll System</h2>
          <p>
            Juiceme is an HR & Payroll add-on, compatible with any system to
            enhance its functionalities. But also, it can work as a stand-alone
            solution.
          </p>
          {/* <div className="md:w-[70%] flex md:flex-row  justify-between">
            <img src={Image1} alt="SAP_2011_logo" />
            <img src={Image2} alt="sage_logo" />
            <img src={Image3} alt="Oracle_logo" />
            <img src={Image4} alt="logo-black" />
            <img src={Image5} alt="paymaster-logo" />
          </div> */}
        </div>
        <section className="j_add-on-section">
          <div className="j_add-on-left">
            <img src={AddOnImage} width="800" height="800" alt="addon-image" />
          </div>

          <div className="j_add-on-right my-5">
            <div className="flex my-2">
              <img className="my-auto" src={Icon3} alt="excel-icon" />

              <span className="my-auto mx-2">
                Highly secured, cloud-based <br />
                platform connected to WhatsApp
              </span>
            </div>
            <div className="flex my-2">
              <img className="my-auto" src={Icon1} alt="excel-icon" />

              <span className="my-auto mx-2">Easy Integration</span>
            </div>
            <div className="flex my-2">
              <img className="my-auto" src={Icon2} alt="excel-icon" />

              <span className="my-auto mx-2">Controlled by the employer</span>
            </div>
            <div className="flex my-2">
              <img className="my-auto" src={Icon4} alt="excel-icon" />

              <span className="my-auto mx-2">Zero cost to the employer</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
