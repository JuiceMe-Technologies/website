import Logo from '../../assets/Juiceme_Logo.svg'
import Menu from '../../assets/menu.svg'
import Flag from '../../assets/header_flag.svg'
// import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Navbar({ link, handleLink }) {
  useEffect(() => {
    const menu = document.querySelector('.navbar-right ')
    menu.classList.toggle('active')
    window.scrollTo(0, 0)

  }, [link])

  const toggleMenu = () => {
    const menu = document.querySelector('.navbar-right ')
    menu.classList.toggle('active')
    window.scrollTo(0, 0)
  }

  return (
    <div className="navbar">
      <div className="logo md:pl-24">
        <a onClick={() => handleLink('home')} href="#home">
          {' '}
          <img className="cursor-pointer" src={Logo} alt="Juiceme Logo" />
        </a>
        <img
          className="block md:hidden"
          src={Menu}
          alt="Menu Logo"
          onClick={() => toggleMenu()}
        />
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a onClick={() => handleLink('employeer')} href="#employeer">
              Employer
            </a>
          </li>
          <li>
            <a onClick={() => handleLink('employee')} href="#employee">
              Employee
            </a>
          </li>
          <li>
            <a onClick={() => handleLink('about')} href="#about">
              About
            </a>
          </li>
        </ul>
        <button onClick={() => handleLink('contact')}>Get Started</button>
        <img className="md:ml-5 md:block hidden" src={Flag} alt="Flag Logo" />
      </div>
    </div>
  )
}
