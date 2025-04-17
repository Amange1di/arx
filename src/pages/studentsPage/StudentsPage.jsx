import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsData, setSelected, setSelectedSub } from '../../app/redux/slices/studentsSlice';
import { Navigations } from '../../features';
import { ParlamentStudents } from '../../widgets';
import { StudentsHostel } from '../../widgets/studentsSection/studentsHostel/StudentsHostel';
import { ActivStudents } from '../../widgets/studentsSection/activStudents/ActivStudents';
import Request from '../../widgets/studentsSection/Student';

const getContentType = (data) => {
  if (!data || !Array.isArray(data)) return null;

  if (data.length) {
    if (data[0]?.work?.length) return "parlament";
    if (data[0]?.images?.length || data[0]?.description) return "hostel";
  }
  return null;
};

export const StudentsPage = () => {
  const dispatch = useDispatch();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { navElements, selected, selectedSub, page } = useSelector(state => state.students);

  useEffect(() => {
    dispatch(fetchStudentsData());
  }, [dispatch]);

  useEffect(() => {
    setSelectedStudent(null);
  }, [selected, selectedSub, page, navElements]);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const currentData = navElements?.[selected];
  const cards = currentData?.cards || [];
  const contentType = getContentType(cards);

  return (
    <div className='pageNavigation'>
      <Navigations
        page={page}
        selected={selected}
        setSelected={(value) => {
          setSelectedStudent(null);
          dispatch(setSelected(value));
        }}
        selectedSub={selectedSub}
        setSelectedSub={(value) => {
          setSelectedStudent(null);
          dispatch(setSelectedSub(value));
        }}
        list={navElements}
      />
      <div className="container">
        <Request />
        <h2 className='title_h2'>
          {selectedSub !== null && currentData?.cards?.[selectedSub]?.title
            ? currentData.cards[selectedSub].title
            : currentData?.link}
        </h2>
        {selectedStudent && (
          <ActivStudents data={selectedStudent} />
        )}
        {!selectedStudent && contentType === "hostel" && (
          <StudentsHostel data={cards} />
        )}
        {!selectedStudent && contentType === "parlament" && (
          <ParlamentStudents
            data={cards}
            onSelectStudent={handleSelectStudent}
          />
        )}
      </div>
    </div>
  );
};


