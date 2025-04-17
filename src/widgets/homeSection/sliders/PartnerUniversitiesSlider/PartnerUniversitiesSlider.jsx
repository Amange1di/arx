import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import Flg from '../../../../shared/images/homeImages/greenFlower.png';
import Naws from '../../../../shared/images/homeImages/news.jpg';
import './PartnerUniversitiesSlider.scss';import { useTranslation } from "react-i18next";

export const PartnerUniversitiesSlider = () => {
  const { t } = useTranslation();
  const newsData = [
    { title: 'Название журнала', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '22.06.2023' },
    { title: 'Второй журнал', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '10.08.2023' },
    { title: 'Третий журнал', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '15.09.2023' },
    { title: 'Четвертый журнал', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '20.10.2023' },
    { title: 'Пятый журнал', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '05.11.2023' },
  ];

  return (
    <div className="container">
      <h1 className='academy__title'>журналы партнерских вузов</h1>

      <Swiper
        modules={[FreeMode]}
        spaceBetween={10}  
        slidesPerView={4} 
        freeMode={true}  
        loop={true}
        breakpoints={{
            768: {
              slidesPerView: 4, 
            },
            576: {
              slidesPerView: 2, 
            },
            0: {
              slidesPerView: 1, 
            }
          }}
      >
        {newsData.map((item, index) => (
          <SwiperSlide key={index} className="partner-slider__slide">
            <div className="partner-slider__card">
              <img src={Naws} alt="Обложка журнала" className="partner-slider__image" />
              <div className="partner-slider__info">
                <p className="partner-slider__date">{item.date}</p>
                <h3 className="partner-slider__title">{item.title}</h3>
              </div>
              <p className="partner-slider__desc">{item.desc}</p>
              <div className="partner-slider__footer">
                <p className="partner-slider__link">{t("читать больше")}↗</p>
                <img src={Flg} alt="Цветок" className="partner-slider__flower" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

