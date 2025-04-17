
import React from 'react';
import NewsImage from '../../shared/images/homeImages/news.jpg';
import { DetailPage } from '../detailComponent/DetailPage';

export const JurnalDetail = () => {
  const jurnalData = [
    {
      name: 'Последние журналы Исламской Академии',
      image: NewsImage
    },
    {
      discription: 'Исламская академия продолжает свою миссию...',
    },  
    {
      hottitle: 'САМЫЕ ГОРЯЧИЕ НОВОСТИ',
      hotdisc: 'Скоро открытие новых курсов! Мы рады сообщить...',
    },
    {
      newstitle: 'НОВОСТИ ДНЯ!',
      di: 'Лекция «Современные вызовы и исламский ответ» — 20 марта',
      di2: 'Благотворительный ифтар',
      di3: 'Конференция «Ислам и наука: точки соприкосновения»',
    }
  ];

  return <DetailPage image={NewsImage} data={jurnalData} classPrefix="jurnal" />;
};
