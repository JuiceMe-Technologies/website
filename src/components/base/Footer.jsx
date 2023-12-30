import Logo4XL from '../../assets/Juiceme_Logo@4x1.svg'
import Flag1 from '../../assets/flag_1.svg'
import Flag2 from '../../assets/flag_2.svg'
import Flag3 from '../../assets/flag_3.svg'

export default function Foooter() {
  return (
    <>
      <div className="j_partner">
        <div className="j_partner-content">
          <h1 className="text-white md:text-4xl text-3xl">Partner with Juice Inc</h1>
          <p className="text-white md:text-md text-sm font-light my-3 text-center">
            Grow your business and become a truly employee
            <br /> centric organization.
          </p>
          <button className="p-4 px-10 bg-white hover:bg-black hover:text-white rounded">Book a demo</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content_list">
            <p>Product</p>
            <a href="#">Employer</a>
            <a href="#">Employee</a>
          </div>

          <div className="footer-content_list">
            <p>Company</p>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="footer-content_list">
            <p>Contact</p>
            <span>
              Email:{' '}
              <a href="#" className="underline">
                hello@juiceme.io
              </a>
            </span>
            <span>
              Phone: <a href="#">+256 741 657 535</a>
            </span>
          </div>

          <div className="footer-content_list">
            <p>Location</p>
            <div className="flex my-1">
              <img className="mr-2" src={Flag1} alt="flag1" />
              <span>Eswatini</span>
            </div>
            <div className="flex my-1">
              <img className="mr-2" src={Flag2} alt="flag2" />
              <span>Uganda</span>
            </div>
            <div className="flex my-1">
              <img className="mr-2" src={Flag3} alt="flag3" />
              <span>USA</span>
            </div>
          </div>

          <div className="footer-content_list">
            <p>Legal</p>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <img className="mx-auto" width="90%" src={Logo4XL} alt="JuiceLogo4XL" />
      </footer>
    </>
  )
}
