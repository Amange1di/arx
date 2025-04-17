
// import React from 'react';
// import NewsImage from '../../shared/images/homeImages/news.jpg';
// import { DetailPage } from '../detailComponent/DetailPage';

// export const NewsDetail = () => {
//   const newsData = [
//     {
//       name: 'Последние новости Исламской Академии',
//       image: NewsImage
//     },
//     {
//       discription: 'Исламская академия продолжает свою миссию...',
//     },
//     {
//       hottitle: 'САМЫЕ ГОРЯЧИЕ НОВОСТИ',
//       hotdisc: 'Скоро открытие новых курсов! Мы рады сообщить...',
//     },
//     {
//       newstitle: 'НОВОСТИ ДНЯ!',
//       di: 'Лекция «Современные вызовы и исламский ответ» — 20 марта',
//       di2: 'Благотворительный ифтар',
//       di3: 'Конференция «Ислам и наука: точки соприкосновения»',
//     }
//   ];

//   return <DetailPage image={NewsImage} data={newsData} classPrefix="news" />;
// };


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsImage from '../../shared/images/homeImages/news.jpg';
import { DetailPage } from '../detailComponent/DetailPage';

export const NewsDetail = () => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://92.118.114.178/ru/api/v1/main/news/')
      .then((response) => {
        console.log('Ответ API:', response.data); // для отладки
        setNewsData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Ошибка загрузки новостей');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <DetailPage
      image={NewsImage}
      data={newsData}
      classPrefix="news"
    />
  );
};
