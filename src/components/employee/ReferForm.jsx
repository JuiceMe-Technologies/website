export default function ReferForm() {
    return (

            <div className="j_employee_form">
                <h2>Refer your Company</h2>
                <span>Your company does not offer Juice yet? Just let us know who to contact in your organization.</span>
                <div className="content">
                    <div className="w-100 flex md:flex-row flex-col md:gap-4">
                        <div className="form-group">
                            <label htmlFor="company_name">Company Name</label>
                            <input name="company_name" type="text" placeholder="Test Group Inc" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hr_name">HR Name</label>
                            <input name="hr_name" type="text" placeholder="James Kamden" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="form-group">
                            <label htmlFor="hr_email">HR Email Address</label>
                            <input name="hr_email" type="email" placeholder="jameskamden@testgroupinc.com" />
                    </div>
                    
                    <div className="flex justify-end">
                        <button type="submit" className="w-52 p-4 bg-primary text-white rounded md:my-2 my-5">Submit</button>
                    </div>
                </div>
            </div>
    )
}