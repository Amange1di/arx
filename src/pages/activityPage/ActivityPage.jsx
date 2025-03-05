import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivityData, setSelected } from '../../app/redux/slices/activitySlice';
import { AwardsCard, Navigations } from '../../features';
import { ActivetyBaner } from '../../widgets';

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
      <div> 
        <div className="container ">
          {selected === null && <ActivetyBaner />}
          <h2 className='title_h2'>{selected === null ? "Все" : navElements[selected]?.link}</h2>
          <AwardsCard
            cards={selected === null
              ? navElements.flatMap(item => item.cards || [])
              : navElements[selected]?.cards || []
            }
          />
        </div>
      </div>
    </div>
  );
};
