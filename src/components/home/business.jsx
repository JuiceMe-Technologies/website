import React from "react";
import BImage1 from "../../assets/home/business/b_image1.png";
import BImage2 from "../../assets/home/business/b_image2.png";
import BImage3 from "../../assets/home/business/b_image3.png";
import BImage4 from "../../assets/home/business/b_image4.png";

const HomeBusiness = () => {
  const cardsContent = [
    {
      title: "Unlock Peak Productivity and Motivation",
      desc: "Give employees the flexibility to access their earned wages when they need them, boosting motivation and productivity.",
      image: BImage1,
    },
    {
      title: "Elevate Workplace Morale",
      desc: "By removing financial barriers and offering financial freedom, companies see noticeable improvement in workplace morale and overall job satisfaction.",
      image: BImage2,
    },
    {
      title: "Attract Top Talent",
      desc: "Offering Earned Wage Access demonstrates commitment to employee financial wellness, making companies a magnet for talent.",
      image: BImage3,
    },
    {
      title: "Boost Employee Engagement and Retention",
      desc: "Happy, financially secure employees are more likely to stay and thrive in any company reducing the stress and cost of constantly hiring and training new employees.",
      image: BImage4,
    },
  ];
  return (
    <div className="j_business">
      <div className="j_business-content">
        <h2>Business Leaders Count on Juiceme</h2>
        <p>
          Juiceme is an HR & Payroll add-on, compatible with any system to
          enhance its functionalities. But also, it can work as a stand-alone
          solution.
        </p>
        <div className="b_container">
          {cardsContent.map((data, i) => (
            <div className="b_card" key={i + 1}>
              <div className="b_card-content">
                <h2 className="title">{data.title}</h2>
                <p className="desc">{data.desc}</p>
                <img src={data.image} alt="BImage" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBusiness;
