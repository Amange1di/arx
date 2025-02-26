import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPageData, setSelected, setSelectedSub } from '../../app/redux/slices/navSlice';
import { AwardsCard, Navigations } from '../../features';
import { AwardsBaner } from '../../widgets/awardsSection';
import "../awardsPage/awardsPage.scss";

export const ActivityPage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page } = useSelector(state => state.nav);

  useEffect(() => {
    dispatch(fetchPageData('activity'));
  }, [dispatch]);

  const title = selected === null
    ? "Все"
    : navElements[selected]?.link;

  const getCards = () => {
    if (selected === null) {
      return navElements.flatMap(item => item.cards || []);
    }
    return navElements[selected]?.cards || [];
  };

  return (
    <div className='awards'>
        <Navigations
          page={page}
          selected={selected}
          setSelected={(selected) => dispatch(setSelected(selected))}
          selectedSub={selectedSub}
          setSelectedSub={(selectedSub) => dispatch(setSelectedSub(selectedSub))}
          list={navElements}
        />
      <div>
        <div className="content">
          {selected === null && <AwardsBaner />}
          <h2 className='title'>{title}</h2>
          <AwardsCard cards={getCards()} />
        </div>
      </div>
    </div>
  );
};
