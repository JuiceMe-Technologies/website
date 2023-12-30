import ExcelImage from '../../assets/home/home_excel_image.png'
import Icon1 from '../../assets/home/excel/Frame_7556.svg'
import Icon2 from '../../assets/home/excel/Frame_7557-1.svg'
import Icon3 from '../../assets/home/excel/Frame_7557.svg'

export default function HomeExcel() {
  return (
    <>
      <section className="j_excel">
        <div className="j_excel-left">
          <img src={ExcelImage} width="800" height="800" alt="excel-image" />
        </div>

        <div className="j_excel-right my-5">
          <h2>Excel</h2>
          <p className="my-2">
            Become a thriving organisation in today’s <br /> competitive market.
          </p>
          <br />
          <div className="flex my-2">
            <img className="my-auto" src={Icon1} alt="excel-icon" />

            <span className="my-auto mx-2">Attract and retain top talent</span>
          </div>
          <div className="flex my-2">
            <img className="my-auto" src={Icon2} alt="excel-icon" />

            <span className="my-auto mx-2">Improve productivity</span>
          </div>
          <div className="flex my-2">
            <img className="my-auto" src={Icon3} alt="excel-icon" />

            <span className="my-auto mx-2">Save time and money</span>
          </div>
        </div>
      </section>
    </>
  )
}
