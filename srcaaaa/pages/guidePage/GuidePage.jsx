import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPageData, setSelected, setSelectedSub } from '../../app/redux/slices/navSlice';
import { Navigations } from '../../features';
import { Rector, Departments, Vacancies } from '../../widgets';

export const GuidePage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page } = useSelector(state => state.nav);

  useEffect(() => {
    dispatch(fetchPageData('guide'));
  }, [dispatch]);

  const handleSetSelected = (value) => {
    dispatch(setSelected(value));
  };

  const handleSetSelectedSub = (value) => {
    dispatch(setSelectedSub(value));
  };

  return (
    <div className='pageNavigation'>
      <Navigations
        page={page}
        selected={selected}
        setSelected={handleSetSelected}
        selectedSub={selectedSub}
        setSelectedSub={handleSetSelectedSub}
        list={navElements}
      />
      <div className="content">
        <h2 className='title_h2'>
          {selectedSub !== null && navElements?.[selected]?.twoLink?.[selectedSub]?.link
            ? navElements[selected].twoLink[selectedSub].link
            : navElements?.[selected]?.link
          }
        </h2>
        
        {selected === 0 && <Rector />}
        {selected === 1 && selectedSub !== null && <Departments />}
        {selected === 2 && <Vacancies />}
      </div>
    </div>
  );
};
