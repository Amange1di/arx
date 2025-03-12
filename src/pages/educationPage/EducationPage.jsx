import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEducationData, setSelected, setSelectedSub } from '../../app/redux/slices/educationSlice';
import { Navigations } from '../../features';
import { Cpo } from '../../widgets';

export const EducationPage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page } = useSelector(state => state.education);

  useEffect(() => {
    dispatch(fetchEducationData());
  }, [dispatch]);

  return (
    <div className='pageNavigation'>
      <Navigations
        page={page}
        selected={selected}
        setSelected={(value) => dispatch(setSelected(value))}
        selectedSub={selectedSub}
        setSelectedSub={(value) => dispatch(setSelectedSub(value))}
        list={navElements}
      />
      <div className="container">
        <Cpo currentSection={navElements[selected]} />
      </div>
    </div>
  );
};
