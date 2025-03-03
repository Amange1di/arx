import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsData, setSelected, setSelectedSub } from '../../app/redux/slices/studentsSlice';
import { Navigations } from '../../features';
import { ParlamentStudents, StudentsHostel, StudentsLife, ActivStudents } from '../../widgets';

export const StudentsPage = () => {
  const dispatch = useDispatch();
  const studentsState = useSelector(state => state.students) || {};
  const { navElements = [], selected = 0, selectedSub = null, page = '', isLoading = false } = studentsState;

  useEffect(() => {
    dispatch(fetchStudentsData());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

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
      <div className="content">
        <h2 className='title_h2'>
          {selectedSub !== null && navElements?.[selected]?.twoLink?.[selectedSub]?.link
            ? navElements[selected].twoLink[selectedSub].link
            : navElements?.[selected]?.link
          }
        </h2>

        {selected === 0 && <ParlamentStudents />}
        {selected === 1 && <ActivStudents />}
        {selected === 2 && <StudentsHostel />}
        {selected === 3 && <StudentsLife />}
      </div>
    </div>
  );
};
