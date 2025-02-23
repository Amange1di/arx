import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityCard } from '../../app/redux/slices/activityCardSlice';
import "./awardsCard.scss";

export const AwardsCard = () => {
  const dispatch = useDispatch();
  const { card, } = useSelector(state => state.activityCard);

  useEffect(() => {
    dispatch(getActivityCard());
  }, [dispatch]);


  return (
    <div className="awardsCard">
      {card.map((item) => (
        <div className="awardsCard_bloc" key={item.id}>
          <div className="awardsCard_bloc_img">
            <img
              src={item.image}
              alt={`Сертификат: ${item.title}`}
            />
          </div>
          <div className="awardsCard_bloc_text">
            <h2>{item.date}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>{item.location}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
