import Quote from '../../assets/home/mission/quote.svg'
import Test1 from '../../assets/home/testimonal/test-1.svg'
import Test2 from '../../assets/home/testimonal/test-2.svg'
import Test3 from '../../assets/home/testimonal/test-3.svg'

export default function EmployeeTestimonials() {
  const testimonials = [
    {
      name: 'Dlamini',
      desc:
        'Our workplace is full of energy. We did not realize how financially stressed our employees were. Juiceme has eliminated the financial stress of our employees.',
      role: 'CEO',
      image: Test3,
    },
    {
      name: 'Sandile Dlamini',
      desc:
        'Our workplace is full of energy. We did not realize how financially stressed our employees were. Juiceme has eliminated the financial stress of our employees.',
      role: 'Director of Engineering',
      image: Test1,
    },
    {
      name: 'Sandile Dlamini',
      desc:
        'I used to borrow money to cover transport costs but now I can get my money for the days I have worked anytime to my mobile money account.',
      role: 'Design Manager',
      image: Test2,
    },
  ]

  return (
    <>
      <div className="j_testiomnials">
        <div className="j_testiomnials-content md:w-[50%] w-100">
          <span>Testimonials</span>
          <h2>Here is what employees have to say about Juiceme Earned Wage Access</h2>
          <p className='text-center'>
            We are transforming employees' lives and growing <br /> African businesses.
          </p>
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
                <img src={data.image} alt="icon" />
                <div className="flex flex-col mx-2">
                  <p className="font-bold">{data.name}</p>
                  <span>{data.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
