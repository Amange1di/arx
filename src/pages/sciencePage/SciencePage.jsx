import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScienceData, setSelected, setSelectedSub } from '../../app/redux/slices/scienceSlice';
import { Navigations } from '../../features';
import { Academy, Scientific } from '../../widgets';

export const SciencePage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page } = useSelector(state => state.science);

  useEffect(() => {
    dispatch(fetchScienceData());
  }, [dispatch]);

  return (
    <div className='pageNavigation'>
      <Navigations
        page={page}
        selected={selected}
        setSelected={(value) => dispatch(setSelected(value))}
        selectedSub={selectedSub}
        setSelectedSub={(value) => dispatch(setSelectedSub(value))}
        list={navElements[selected]?.cards?.map((card) => ({
          title: card.title || 'Без названия'
        })) || []}
      />
      <div className="content">
        <h2 className='title_h2'>
          {navElements[selected]?.title || 'Заголовок отсутствует'}
        </h2>

        {navElements[selected]?.cards?.length > 0 ? (
          navElements[selected].cards.map((card) => {
            if (selected === 0) return <Academy key={card.id} data={card} />;
            if (selected === 2) return <Scientific key={card.id} data={card} />;
            return null;
          })
        ) : (
          <p>Нет данных для отображения</p>
        )}
      </div>
    </div>
  );
};

