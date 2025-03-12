import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivityData, setSelected } from '../../app/redux/slices/activitySlice';
import { Navigations } from '../../features';
import { ActivetyBaner, ActivetyCard } from '../../widgets';

export const ActivityPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.activity);

  const { navElements = [], selected = null, page, banner } = state || {};

  useEffect(() => {
    dispatch(fetchActivityData());
    dispatch(setSelected(null));

    return () => {
      dispatch(setSelected(null));
    };
  }, [dispatch]);

  const cards = selected === null
    ? navElements.reduce((acc, item) => [...acc, ...(item.cards || [])], [])
    : (navElements[selected]?.cards || []);

  return (
    <div className='pageNavigation'>
      <Navigations
        page={page}
        selected={selected}
        setSelected={(value) => dispatch(setSelected(value))}
        selectedSub={null}
        setSelectedSub={null}
        list={navElements}
      />
      <div className="container">
        {selected === null && <ActivetyBaner banner={banner} />}
        <h2 className='title_h2'>
          {selected === null ? "Все" : (navElements[selected]?.link || "Не найдено")}
        </h2>
        <ActivetyCard cards={cards} />
      </div>
    </div>
  );
};
