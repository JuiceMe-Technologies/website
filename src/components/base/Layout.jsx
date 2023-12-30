import Foooter from './Footer'
import Navbar from './Navbar'

export default function Layout({ link, handleLink,children }) {
  return (
    <main>
      <Navbar link={link} handleLink={handleLink} />
      <div className="space"></div>
      {children}
      <Foooter />
    </main>
  )
}
