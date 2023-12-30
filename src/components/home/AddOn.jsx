import Image1 from '../../assets/home/add-on/SAP_2011_logo.svg'
import Image2 from '../../assets/home/add-on/Sage_logo.svg'
import Image3 from '../../assets/home/add-on/Oracle_logo.svg'
import Image4 from '../../assets/home/add-on/logo-black.svg'
import Image5 from '../../assets/home/add-on/paymaster-logo.svg'

export default function HomeAddOn() {
  return (
    <>
      <div className="j_add-on ">
        <div className="j_add-on-content">
          <span>A Software Add-on</span>
          <h2>Works with all HR and Payroll System</h2>
          <p>
            Juiceme is an HR & Payroll add-on, compatible with any system to
            enhance its functionalities. But also,
            <b> it can work as a stand-alone solution.</b>
          </p>
          <div className="md:w-[70%] flex md:flex-row  justify-between">
            <img src={Image1} alt="SAP_2011_logo" />
            <img src={Image2} alt="sage_logo" />
            <img src={Image3} alt="Oracle_logo" />
            <img src={Image4} alt="logo-black" />
            <img src={Image5} alt="paymaster-logo" />
          </div>
        </div>
      </div>
    </>
  )
}
