import Icon1 from '../../assets/home/mission/Frame_7556.svg'
import Icon2 from '../../assets/home/mission/Frame_7556-1.svg'
import Icon3 from '../../assets/home/mission/Frame_7556-2.svg'
import Icon4 from '../../assets/home/mission/Frame_7556-3.svg'
import Icon5 from '../../assets/home/mission/Frame_7556-4.svg'
import Icon6 from '../../assets/home/mission/Frame_7556-5.svg'
import Icon7 from '../../assets/home/mission/Frame_7557.svg'
import Icon8 from '../../assets/home/mission/Frame_7557-1.svg'
import Icon9 from '../../assets/home/mission/Frame_7557-2.svg'
import Icon10 from '../../assets/home/mission/Frame_7557-3.svg'
import Icon11 from '../../assets/home/mission/Frame_7557-4.svg'
import Icon12 from '../../assets/home/mission/Frame_7557-5.svg'

export default function HomeServices() {
  return (
    <>
      <ul className="w-100 flex items-center justify-between flex-wrap md:p-10 p-0 services-md">
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon1}
            alt="icon"
          />
          <span className="my-auto service-text">Agriculture</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon2}
            alt="icon"
          />
          <span className="my-auto service-text">Construction</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon3}
            alt="icon"
          />
          <span className="my-auto service-text">Education</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon4}
            alt="icon"
          />
          <span className="my-auto service-text">Hospitality</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon5}
            alt="icon"
          />
          <span className="my-auto service-text">Hotels</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon6}
            alt="icon"
          />
          <span className="my-auto service-text">Logistics</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon7}
            alt="icon"
          />
          <span className="my-auto service-text">Manufacturing</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon8}
            alt="icon"
          />
          <span className="my-auto service-text">Restaurants</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon9}
            alt="icon"
          />
          <span className="my-auto service-text">Retail</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon10}
            alt="icon"
          />
          <span className="my-auto service-text">Security</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon11}
            alt="icon"
          />
          <span className="my-auto service-text">Telesales</span>
        </li>
        <li className="md:w-[15%] flex my-2 cursor-pointer">
          <img
            className="mx-2"
            src={Icon12}
            alt="icon"
          />
          <span className="my-auto service-text">And lots more</span>
        </li>
      </ul>
    </>
  )
}
