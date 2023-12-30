import Quote from '../../assets/home/mission/quote.svg'
import Test1 from '../../assets/employer/testimonials/Frame_7639-1.svg'
import Test2 from '../../assets/employer/testimonials/Frame_7639-2.svg'
import Test3 from '../../assets/employer/testimonials/Frame_7639.svg'


export default function EmployerTestimonials() {
  const testimonials = [
    {
      desc: `The surge in job applications we've experienced since joining forces with Juice is a powerful testament to the genuine interest our employees have in this exceptional service.`,
      type: 'Rental',
      image: Test3,
    },
    {
      desc: `Juice has revolutionized our HR operations, and it's truly captivating to witness the seamless transition of all tasks to the convenience of WhatsApp.`,
      type: 'Restaurant',
      image: Test1,
    },
    {
      desc: `Gone are the days of manual labor in tracking time attendance and printing payslips, thanks to Juice. This innovation has not only saved us valuable time but also made significant cost savings`,
      type: 'Construction',
      image: Test2,
    },
  ]

  return (
    <>
      <div className="j_testiomnials">
        <div className="j_testiomnials-content">
          <span>Testimonials</span>
          <h2>Here is what industries say about us</h2>
        </div>
      </div>

      <div className="t_container">
        {testimonials.map((data, i) => (
          <div className="t_card" key={i + 1}>
            <div className="t_card-content">
              <img className="my-4 opacity-[0.5]" src={Quote} alt="icon" />

              <p className="desc">{data.desc}</p>
              <br />
              <br />

              <hr className="w-[35%] my-3" />

              <div className="flex my-auto">
                <img className='my-auto' src={data.image} alt="icon" />
                <div className="flex flex-col mx-2">
                  <p className="font-bold my-auto">{data.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
