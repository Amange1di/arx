import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsData, setSelected, setSelectedSub } from '../../app/redux/slices/studentsSlice';
import { Navigations } from '../../features';
import {  Student } from '../../widgets';

export const StudentsPage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page,  } = useSelector(state => state.students);

  useEffect(() => {
    dispatch(fetchStudentsData());
  }, [dispatch]);

  const currentData = navElements?.[selected];


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
        <h2 className='title_h2'>  {selectedSub !== null && navElements?.[selected]?.twoLink?.[selectedSub]?.link
            ? navElements[selected].twoLink[selectedSub].link
            : navElements?.[selected]?.link
          }</h2>
        <Student studentData={currentData} />
      </div>
    </div>
  );
};
