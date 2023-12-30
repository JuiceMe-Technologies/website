// import { useState } from 'react'
// import './App.css'

import { useState } from 'react'
import AboutPage from './components/about'
import ContactPage from './components/contact'
import EmployeePage from './components/employee'
import EmployerPage from './components/employer'
import HomePage from './components/home'
import Layout from './components/base/Layout'

function App() {
  const [link, setLink] = useState('home')
  return (
    <Layout link={link} handleLink={(link) => setLink(link)}>
      {link === 'home' && <HomePage  />}
      {link === 'employer' && <EmployerPage  />}
      {link === 'employee' && <EmployeePage  />}
      {link === 'about' && <AboutPage  />}
      {link === 'contact' && <ContactPage  />}
    </Layout>
  )
}

export default App
