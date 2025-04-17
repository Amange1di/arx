// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';

// import Flg from '../../../../shared/images/homeImages/greenFlower.png';
// import Naws from '../../../../shared/images/homeImages/news.jpg';
// import { Link } from 'react-router-dom';
// import './IslamicAcademySlider.scss';

// export const IslamicAcademySlider = () => {
//   const newsData = [
//     { title: 'Название журнала', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '22.06.2023' },
//     { title: 'Второй журнал', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '10.08.2023' },
//     { title: 'Третий журнал', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '15.09.2023' },
//     { title: 'Четвертый журнал', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '20.10.2023' },
//     { title: 'Пятый журнал', desc: 'На этой неделе наша академия имела честь    принять выдающихся ученых из разных  уголков  исламского мира. В рамках серии лекций и  дискуссий они поделились своими знаниями о  важности исламского образования в современном обществе. ', date: '05.11.2023' },
//   ];

//   return (
//     <div className="container">
//       <div className="text__head">
//     <h1 className='academy__title'>журнал исламской академии</h1>
//     <Link to={'/JurnalSection'}> <p className='academy__link'>Читать больше</p></Link>
//     </div>

//       <Swiper
//         modules={[FreeMode]}
//         spaceBetween={10}
//         slidesPerView={4} 
//         freeMode={true}
//         loop={true}
//         breakpoints={{
//           768: { slidesPerView: 4 },
//           576: { slidesPerView: 2 },
//           0: { slidesPerView: 1 },
//         }}
//       >      
           
//         {newsData.map((item, index) => (
//           <SwiperSlide key={index} className="academy-slider__slide">
//             <div className="academy-slider__card">
//               <img src={Naws} alt="Обложка журнала" className="academy-slider__image" />
//               <div className="academy-slider__info">
//                 <p className="academy-slider__date">{item.date}</p>
//                 <h3 className="academy-slider__title">{item.title}</h3>
//               </div>
//               <p className="academy-slider__desc">{item.desc}</p>
//               <div className="academy-slider__footer">
//                <Link to={'/JurnalDetail'}> <p className="academy-slider__link">Читать больше ↗</p> </Link>
//                 <img src={Flg} alt="Цветок" className="academy-slider__flower" />
//               </div>
//             </div>  
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';

// import Flg from '../../../../shared/images/homeImages/greenFlower.png';
// import Naws from '../../../../shared/images/homeImages/news.jpg';
// import { Link } from 'react-router-dom';
// import './IslamicAcademySlider.scss';

// export const IslamicAcademySlider = () => {
//   const [magazines, setMagazines] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMagazines = async () => {
//       try {
//         const response = await axios.get('http://92.118.114.178/ru/api/v1/main/magazine/');
//         setMagazines(response.data[0]?.cards || []);
//       } catch (error) {
//         console.error('Ошибка при загрузке журналов:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMagazines();
//   }, []);

//   return (
//     <div className="container">
//       <div className="text__head">
//         <h1 className="academy__title">журнал исламской академии</h1>
//         <Link to={'/JurnalSection'}>
//           <p className="academy__link">Читать больше</p>
//         </Link>
//       </div>

//       <Swiper
//         modules={[FreeMode]}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         loop={true}
//         breakpoints={{
//           768: { slidesPerView: 4 },
//           576: { slidesPerView: 2 },
//           0: { slidesPerView: 1 },
//         }}
//       >
//         {loading ? (
//           <p>Загрузка...</p>
//         ) : (
//           magazines.map((item, index) => (
//             <SwiperSlide key={index} className="academy-slider__slide">
//               <div className="academy-slider__card">
//                 <img
//                   src={item.image || Naws}  
//                   alt="Обложка журнала"
//                   className="academy-slider__image"
//                 />
//                 <div className="academy-slider__info">
//                   <p className="academy-slider__date">{item.date}</p>
//                   <h3 className="academy-slider__title">{item.title}</h3>
//                 </div>
//                 <p
//                   className="academy-slider__desc"
//                   dangerouslySetInnerHTML={{ __html: item.text }}
//                 ></p>
//                 <div className="academy-slider__footer">
//                   <Link to={`/JurnalDetail/${index}`}>
//                     <p className="academy-slider__link">Читать больше ↗</p>
//                   </Link>
//                   <img src={Flg} alt="Цветок" className="academy-slider__flower" />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))
//         )}
//       </Swiper>
//     </div>
//   );
// };


import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useTranslation } from "react-i18next";

import Flg from '../../../../shared/images/homeImages/greenFlower.png';
import Naws from '../../../../shared/images/homeImages/news.jpg';
import { Link } from 'react-router-dom';
import './IslamicAcademySlider.scss';

export const IslamicAcademySlider = () => {
  const [magazines, setMagazines] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('http://92.118.114.178/ru/api/v1/main/magazine/')
      .then((res) => res.json())
      .then((data) => {
        const sectionWithCards = data.find((item) => item.cards && item.cards.length > 0);
        if (sectionWithCards) {
          let cards = sectionWithCards.cards;

    
          while (cards.length < 5) {
            cards = [...cards, ...cards];
          }

        
          cards = cards.slice(0, 10);
          setMagazines(cards);
        }
      })
      .catch((err) => {
        console.error('Ошибка при загрузке журналов:', err);
      });
  }, []);

  return (
    <div className="container">
      <div className="text__head">
        <h1 className="academy__title">журнал исламской академии</h1>
        <Link to={'/JurnalSection'}>
          <p className="academy__link">{t("читать больше")}</p>
        </Link>
      </div>

      <Swiper
        modules={[FreeMode]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 4 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {magazines.map((item, index) => (
          <SwiperSlide key={index} className="academy-slider__slide">
            <div className="academy-slider__card">
              <img
                src={item.image || Naws}
                alt="Обложка журнала"
                className="academy-slider__image"
              />
              <div className="academy-slider__info">
                <p className="academy-slider__date">{item.date}</p>
                <h3 className="academy-slider__title">{item.title}</h3>
              </div>
              <p
                className="academy-slider__desc"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
              <div className="academy-slider__footer">
                <Link to={'/JurnalDetail'}>
                  <p className="academy-slider__link">{t("читать больше")} ↗</p>
                </Link>
                <img src={Flg} alt="Цветок" className="academy-slider__flower" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// import { useEffect,  } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import { useTranslation } from "react-i18next";
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchMagazinesData } from '../../../../app/redux/slices/homeSlice';

// import Flg from '../../../../shared/images/homeImages/greenFlower.png';
// import Naws from '../../../../shared/images/homeImages/news.jpg';
// import { Link } from 'react-router-dom';
// import './IslamicAcademySlider.scss';

// export const IslamicAcademySlider = () => {
//   const dispatch = useDispatch();
//   const { magazines } = useSelector((state) => state.home);
//   const { t } = useTranslation();

//   useEffect(() => {
//     dispatch(fetchMagazinesData());
//   }, [dispatch]);
// console.log(magazines);

//   return (
//     <div className="container">
//       <div className="text__head">
//         <h1 className="academy__title">{t("журнал исламской академии")}</h1>
//         <Link to={'/JurnalSection'}>
//           <p className="academy__link">{t("читать больше")}</p>
//         </Link>
//       </div>

//       <Swiper
//         modules={[FreeMode]}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         loop={true}
//         breakpoints={{
//           768: { slidesPerView: 4 },
//           576: { slidesPerView: 2 },
//           0: { slidesPerView: 1 },
//         }}
//       >
//         {magazines.map((item, index) => (
//           <SwiperSlide key={index} className="academy-slider__slide">
//             <div className="academy-slider__card">
//               <img
//                 src={item.image || Naws}
//                 alt="Обложка журнала"
//                 className="academy-slider__image"
//               />
//               <div className="academy-slider__info">
//                 <p className="academy-slider__date">{item.date}</p>
//                 <h3 className="academy-slider__title">{item.title}</h3>
//               </div>
//               <p
//                 className="academy-slider__desc"
//                 dangerouslySetInnerHTML={{ __html: item.text }}
//               ></p>
//               <div className="academy-slider__footer">
//                 <Link to={`/JurnalDetail/${index}`}>
//                   <p className="academy-slider__link">{t("читать больше")} ↗</p>
//                 </Link>
//                 <img src={Flg} alt="Цветок" className="academy-slider__flower" />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };
