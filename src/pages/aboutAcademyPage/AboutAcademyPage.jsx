import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPageData, setSelected, setSelectedSub } from '../../app/redux/slices/navSlice';
import { AwardsCard, Navigations } from '../../features';
import { AwardsBaner } from '../../widgets/awardsSection';
export const AboutAcademyPage = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page, } = useSelector(state => state.nav);

  useEffect(() => {
    dispatch(fetchPageData('aboutacademy'));
  }, [dispatch]);

  const title =
    selected === null
      ? "Все"
      : selectedSub !== null
        ? navElements[selected]?.twoLink[selectedSub]?.link
        : navElements[selected]?.link;

  const renderComponents = {
    0: <AwardsCard />,
    1: <AwardsCard />,
  };

  const renderSubComponents = {
    '3-0': <AwardsBaner />,
    '2-1': <AwardsCard />,
  };

  return (
    <div className='pageNavigation'>
         <Navigations
        page={page}
        selected={selected}
        setSelected={(selected) => dispatch(setSelected(selected))}
        selectedSub={selectedSub}
        setSelectedSub={(selectedSub) => dispatch(setSelectedSub(selectedSub))}
        list={navElements}
      />
      <div className>
        <div className="content">
          {selected === null ? (
            <>
              <AwardsBaner />
              <h2 className='title_h2'>{title}</h2>
              <AwardsCard />
            </>
          ) : selectedSub !== null ? (
            <>
              <h2 className='title_h2'>{title}</h2>
              {renderSubComponents[`${selected}-${selectedSub}`] || <AwardsCard />}
            </>
          ) : (
            <>
              <h2 className='title_h2'>{title}</h2>
              {renderComponents[selected] || <AwardsCard />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
