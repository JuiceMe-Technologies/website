// import Layout from '../base/Layout'
import ContactImage from '../../assets/get_started.png'

export default function ContactPage() {
  return (
    <>
      <section className="j_contact">
        <div className="j_contact-left">
          <h1 className="font-bold text-5xl">
            Make Flexible Payouts to your Employees
          </h1>
          <ul>
            <li>Connect to Juiceme and start paying advances</li>
            <li>Focus your stuff and HR to your business</li>
            <li>Make real-time payout without charges.</li>
          </ul>
          <img  src={ContactImage} alt="get-started" />
        </div>
        <div className="j_contact-right">
          <div className="content">
            <div className="w-100 flex md:flex-row flex-col md:gap-4">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input name="firstname" type="text" placeholder="James" />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input name="lastname" type="text" placeholder=" Kamden" />
              </div>
            </div>
            {/*  */}
            <div className="form-group">
              <label htmlFor="email">Work email</label>
              <input
                name="email"
                type="email"
                placeholder="jameskamden@testgroupinc.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input name="website" type="text" placeholder="www.juiceme.com" />
            </div>

            <div className="w-100 flex md:flex-row flex-col md:gap-4">
              <div className="form-group">
                <label htmlFor="company_size">Company Size</label>
                <input name="company_size" type="text" placeholder="James" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input name="country" type="text" placeholder=" Kamden" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="more">Anything else</label>
              <textarea
                name="more"
                id=""
                cols="30"
                rows="5"
                placeholder="Add any other details here"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-52 p-4 bg-primary text-white rounded md:my-2 my-5"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
