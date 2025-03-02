import chel from '../../../shared/images/ok.jpg'
import "./homeBanner.scss"
export const HomeBaaner = () => {
    return (
        <div className='homeBanner'>
            <div className="container">
                <div className="homeBanner_content">
                    <h1 className="homeBanner_content_title">первая исламская академия в кыргызстане!</h1>
                    <div className="homeBanner_content_text">
                        <p className="homeBanner_content_text_dec" style={{ color: 'white' }}>
                            Наша академия — это место, где каждый студент может не только получить глубокие знания в области исламской теологии, но и развить личные качества, необходимые для служения обществу в духе милосердия, справедливости и терпимости.
                            Мы уверены, что образование, полученное в нашей Академии, послужит вам основой для успешного профессионального и духовного пути. Пусть ваши труды здесь будут благословлены, а знания, которые вы получите, помогут вам стать достойными гражданами своей страны и служителями ислама.
                            С уважением и благословением,Ректор Исламской Академии:<p style={{ color: 'rgba(26, 66, 119, 1)' }}>Доктор Эргешов Эрмамат Калмурзаевич</p>
                        </p>
                        <img src={chel} className='homeBanner_content_text_img' />
                    </div>
                </div>
            </div>
        </div>
    )
}
