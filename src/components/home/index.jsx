// import Layout from '../base/Layout'
import HomeAddOn from "./AddOn";
import Intro from "./Intro";
import Testimonials from "./Testimonials";
import HomeEmpower from "./empower";
import HomeEngage from "./engage";
import HomeExcel from "./excel";
import HomeMission from "./mission";
import HomeBusiness from "./business";

export default function HomePage() {
  return (
    <>
      <Intro />
      <HomeMission />
      {/* <HomeEngage /> */}
      <HomeAddOn />
      <HomeBusiness />
      <HomeEmpower />
      <br />
      <br />
      <HomeExcel />
      {/* <Testimonials /> */}
    </>
  );
}
