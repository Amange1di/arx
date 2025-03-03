import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScienceData, setSelected, setSelectedSub } from '../../app/redux/slices/scienceSlice';
import { Navigations } from '../../features';
import { Academy, ScienceCenter, Scientific } from '../../widgets';



export const SciencePage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page,  } = useSelector(state => state.science);

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
        list={navElements}
      />
      <div className="content">
        <h2 className='title_h2'>
          {selectedSub !== null && navElements?.[selected]?.twoLink?.[selectedSub]?.link
            ? navElements[selected].twoLink[selectedSub].link
            : navElements?.[selected]?.link
          }
        </h2>

        {selected === 0 && <Academy />}
        {selected === 1 &&<ScienceCenter />}
        {selected === 2 && <Scientific/>}
        {selected === 3 && selectedSub !== null && <ScienceCenter />}
      </div>
    </div>
  );
};

