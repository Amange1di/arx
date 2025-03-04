import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEducationData, setSelected, setSelectedSub } from '../../app/redux/slices/educationSlice';
import { Navigations } from '../../features';
import { Obraz, Cpo } from '../../widgets';

export const EducationPage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page,  } = useSelector(state => state.education);

  useEffect(() => {
    dispatch(fetchEducationData());
  }, [dispatch]);


  const renderContent = () => {
    switch (selected) {
      case 0:
        return <Cpo />;
      case 1:
        return <Cpo />;
      case 2:
        return <Obraz />;
      case 3:
        return <Obraz />;
      case 4:
        return <Obraz />;
      case 5:
        return <Cpo />;
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
        selectedSub={selectedSub}
        setSelectedSub={(value) => dispatch(setSelectedSub(value))}
        list={navElements}
      />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};
