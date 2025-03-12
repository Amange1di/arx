import './banner.scss'
import chel from '../../../shared/images/homeImages/ok.jpg'


export const Banner = () => {
  return (
    <header className="home-banner">
    <div className="container">
        <div className="baner-content">
          <h1 id="title-banner">первая исламская академия в кыргызстане!</h1>
          <div className="text_img">
            <div className="text-ban">
              <p className='title-desc'>
                Наша академия — это место, где каждый студент может не только получить глубокие знания в области исламской теологии, но и развить личные качества, необходимые для служения обществу в духе милосердия, справедливости и терпимости.
                Мы уверены, что образование, полученное в нашей Академии, послужит вам основой для успешного профессионального и духовного пути. Пусть ваши труды здесь будут благословлены, а знания, которые вы получите, помогут вам стать достойными гражданами своей страны и служителями ислама.
                С уважением и благословением,Ректор Исламской Академии:
              </p>
              <h4 style={{ color: 'rgba(26, 66, 119, 1)' }} className='title-desc'>Доктор Эргешов Эрмамат Калмурзаевич</h4>
            </div>
            <img src={chel} id='banner-image' />
          </div>
        </div>
   
    </div>
    </header>
  )
}