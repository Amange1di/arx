import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewsData, fetchBannerData } from '../../../app/redux/slices/homeSlice';
import { Link } from 'react-router-dom';
import Naws from '../../../shared/images/homeImages/news.jpg';
import './news.scss';
import F1 from '../../../shared/images/homeImages/flower.png';
import FonFull from '../../../shared/images/homeImages/fon-full.png';
import { useTranslation } from "react-i18next";

export const News = () => {
  const dispatch = useDispatch();
  const { news, banner } = useSelector((state) => state.home); 
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNewsData());
    dispatch(fetchBannerData()); 
  }, [dispatch]);


  return (
    <div className="container">
      <section className="news">
        <div className="text-news-head">
        <h2 className="op" id='title-head'>{banner?.[0]?.title_news}</h2>
        <Link to={'/news'}><p className='view-all'>{t("читать больше")}→</p> </Link>
        </div>

        <div className="news-grid">
          {news.map((item, index) => (
            <div key={index} className="news-card">
              <div className="ol">
                <img src={Naws} className="news-image" />
                <div className="card-flex">
                  <p className="date" style={{ marginTop: '10px' }}>{item.date}</p>
                  <h3 id="title-card" style={{ marginTop: '5px' }}>{item.title}</h3>
                </div>
                <p style={{ marginTop: '5px' }} className='card-desc'>{item.text}</p>
              </div>
              <div className="flex-i">
                <Link to={`/newsDetail/${item.id}`}> <p className='view-all'>{t("читать больше")}↗</p> </Link>
                <img src={F1} className="flower" />
              </div>
            </div>
          ))}
          <img src={FonFull} alt="название говорит сам за себя" className='fon__news' />
        </div>
      </section>
    </div>
  );
};
