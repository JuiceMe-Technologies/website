import HomeServices from "./services";
import MockImage from "../../assets/home/mission/mockup.png";

export default function HomeMission() {
  return (
    <>
      <section className="j_mission">
        <div className="j_mission-content">
          <span>Juiceme Platform</span>
          <p>Redefining the Employer-Employee Relationship</p>
          <div className="j_mission-text">
            Employees now have the opportunity to choose when and how they
            receive their pay with Juiceme&apos;s Earned Wage Access. No effort
            is required from employers. When payday becomes any day, workers
            gain the financial flexibility to manage unforeseen expenses
            effectively.
          </div>
        </div>

        <div className="j_mission-content">
          <button className="w-52 p-4 bg-black text-white rounded-xl md:my-2 my-5">
            Book a Demo
          </button>
          <img src={MockImage} width="900" height="500" alt="mock-image" />
          {/* <HomeServices /> */}
        </div>
      </section>
    </>
  );
}
