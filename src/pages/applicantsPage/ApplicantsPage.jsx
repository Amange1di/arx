import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplicantsData, setSelected } from '../../app/redux/slices/applicantsSlice';
import { Navigations } from '../../features';
import { EnrollAcademy, AdmissionCommittee } from '../../widgets';

export const ApplicantsPage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, page } = useSelector(state => state.applicants);

  useEffect(() => {
    dispatch(fetchApplicantsData());
    return () => {
      dispatch(setSelected(null));
    };
  }, [dispatch]);

  const getComponent = () => {
    switch (selected) {
      case 0:
        return <EnrollAcademy />;
      case 1:
        return <AdmissionCommittee />;
      default:
        return null;
    }
  };

  return (
    <div className='pageNavigation'>
      <Navigations
        page={page}
        selected={selected}
        setSelected={(value) => dispatch(setSelected(value))}
        list={navElements}
      />
      <div className="content">
        <h2 className='title_h2'>{navElements[selected]?.link || 'Абитуриентам'}</h2>
        {getComponent()}
      </div>
    </div>
  );
};
