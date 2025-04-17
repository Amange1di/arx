import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAboutData, setSelected, setSelectedSub } from '../../app/redux/slices/aboutSlice';
import { Navigations } from '../../features';
import { AboutMain } from '../../widgets';

export const AboutAcademyPage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page } = useSelector(state => state.about);

  useEffect(() => {
    dispatch(fetchAboutData());
    dispatch(setSelected(null));

    return () => {
      dispatch(setSelected(null));
    };
  }, [dispatch]);

  // Выбираем текущий элемент для передачи в AboutMain
  const selectedItem = selected === null && navElements.length > 0
    ? navElements[0] // Первый элемент по умолчанию
    : selected !== null && navElements[selected]
      ? navElements[selected]
      : null;

  return (
    <div className='pageNavigation'>
      <Navigations
        page={page}
        selected={selected}
        setSelected={(value) => dispatch(setSelected(value))}
        selectedSub={selectedSub}
        setSelectedSub={(value) => dispatch(setSelectedSub(value))}
        list={navElements}
        res={true}
      />
      <div className="container">
        <AboutMain items={selectedItem} />
      </div>
    </div>
  );
};