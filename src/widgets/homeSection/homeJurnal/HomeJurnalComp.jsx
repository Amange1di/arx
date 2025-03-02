
import Naws from '../../../shared/images/news.jpg';
import Flg from '../../../shared/images/greenFlower.png'
import './homeJurnal.scss'

export const HomeJurnalComp = () => {
  const newsData = [
    {
      title: 'День открытых дверей',
      desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ',
      date: '22.06.2023',
    },

  ]

  return (
    <div className="container">
      <section className="JurnalComp">
        <div className="comp-grid">

          {newsData.map((item, index) => (
            <div key={index} className="comp-card">
              <img src={Naws} className="comp-image" />
              <div className="card-flex-comp">
                <p className="date" style={{marginTop: '10px'}}>{item.date}</p>
                <h3 id="title-card" style={{marginTop: '5px', color: 'white'}}>{item.title}</h3>
              </div>
              <p style={{marginTop: '5px'}}>{item.desc}</p>
              <div className="flex-i">
              <p style={{ cursor: 'pointer', textAlign: 'start', marginTop: '10px', color: 'rgba(26, 66, 119, 1)'}} className='view-all'>читать больше ↗</p> 
              <img src={Flg} className="flower"/>
              </div>
            </div>
          ))}

        </div>


      </section>
    </div>
  )
}
