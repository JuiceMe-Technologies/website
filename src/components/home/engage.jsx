import EngageImage from '../../assets/home/home_engage_image.png'
import Icon1 from '../../assets/home/engage/Frame_7556.svg'
import Icon2 from '../../assets/home/engage/Frame_7557-1.svg'
import Icon3 from '../../assets/home/engage/Frame_7557.svg'

export default function HomeEngage() {
  return (
    <>
      <section className="j_engage">
        <div className="j_engage-left">
          <img src={EngageImage} width="800" height="800" alt="engage-image" />
        </div>

        <div className="j_engage-right">
          <h2>Engage</h2>
          <p className="my-2">
            Embrace a paperless future and foster seamless communication among
            your employees with WhatsApp, the platform they rely on daily.
          </p>
          <br />
          <div className="flex my-2">
            <img className="my-auto" src={Icon1} alt="engage-icon" />

            <span className="my-auto mx-2">
              Highly secured, cloud-based platform connected to WhatsApp
            </span>
          </div>
          <div className="flex my-2">
            <img className="my-auto" src={Icon2} alt="engage-icon" />

            <span className="my-auto mx-2">Remove friction for staff</span>
          </div>
          <div className="flex my-2">
            <img className="my-auto" src={Icon3} alt="engage-icon" />

            <span className="my-auto mx-2">Easy Integration</span>
          </div>
        </div>
      </section>
    </>
  )
}
