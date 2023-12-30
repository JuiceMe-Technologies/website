import HeaderImage from '../../assets/about/about_intro_image.png'
export default function AboutIntro() {
  return (
    <>
      <section className="j_about">
        <div className="j_about-intro">
          <p>Our Story</p>
          <span className="intro-text md:my-4 my-2 md:w-[70%] w-100">
            <b>"Boss, can I have some juice?"</b> one of our dedicated sales
            agent asked. "I don't even have money for transport tomorrow, boss.
            Things are bad," he continued. "It's just the second week of the
            month! If I give you money, it means we won't have money to restock
            tomorrow, and we won't sell anything," I reluctantly explained.
            <br />
            <br />
            I've seen firsthand the toll of monthly payroll on our sales agents
            while running my first company. With limited capital, providing an
            advance salary seemed like a threat to our operations, but rejecting
            their requests resulted in lower sales, decreased productivity, and
            morale until payday. It left them vulnerable to predatory credit
            lenders, perpetuating a cycle of financial hardship.
            <br />
            <br />
            This is the very reason we started Juice. At Juice, we
            wholeheartedly embrace Africa's industrial revolution, collaborating
            with companies of all sizes, from small bakeries with just two
            employees to large multinationals with thousands of staff, to
            empower businesses across the spectrum with innovation and
            technology. We are joining forces with companies to improve
            productivity and retention by transforming the way they engage and
            empower their workforce by ensuring that any day can be payday.
          </span>
        
        </div>
        <div className="j_about-intro2">
          <img src={HeaderImage} alt="header-image" />
          <br />
          <br />
        </div>
      </section>
    </>
  )
}
