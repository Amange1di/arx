import { useState, useEffect } from 'react';
import { AwardsCard, Navigations } from '../../features';
import { AwardsBaner } from '../../widgets/awardsSection';
import "../awardsPage/awardsPage.scss";

export const HomePage = () => {

  const [navElements, setNavElements] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [page, setPage] = useState("Наука");

  useEffect(() => {
    fetch('http://localhost:5000/science')
      .then(response => response.json())
      .then(data => {
        setNavElements(data.navElements);
        setPage(data.page);
        console.log(data);
      })
  }, []);

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
    <div className='awards'>
      <Navigations
        page={page}
        selected={selected}
        setSelected={setSelected}
        selectedSub={selectedSub}
        setSelectedSub={setSelectedSub}
        list={navElements}
      />
      <div>
        <div className="content">
          {selected === null ? (
            <>
              <AwardsBaner />
              <h2 className='title'>{title}</h2>
              <AwardsCard />
            </>
          ) : selectedSub !== null ? (
            <>
              <h2 className='title'>{title}</h2>
              {renderSubComponents[`${selected}-${selectedSub}`]}
            </>
          ) : (
            <>
              <h2 className='title'>{title}</h2>
              {renderComponents[selected]}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
