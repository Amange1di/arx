import { useState } from 'react';
import { AwardsCard, Aw, AwardsCardTwo, Navigations } from '../../features';
import { AwardsBaner } from '../../widgets/awardsSection';
import "../awardsPage/awardsPage.scss";

export const HomePage = () => {
  const navElements = [
    { link: 'Ученый Совет' },
    { link: 'Научно - методический центр развития образования' },
    {
      link: 'Научные Труды',
      twoLink: [
        { link: 'Журнал исламской академии' },
        { link: 'Журнал партнерских ВУЗов' }
      ]
    },
    { link: 'Научные Журна' },
  ];

  const [selected, setSelected] = useState(null); 
  const [selectedSub, setSelectedSub] = useState(null); 

  const page = "Наука";

  const title =
    selected === null
      ? "Все"
      : selectedSub !== null
        ? navElements[selected]?.twoLink[selectedSub]?.link
        : navElements[selected]?.link;

  const renderComponents = {
    0: <AwardsCard />,
    1: <AwardsCardTwo />,
    2: <AwardsCard />,
    3: <Aw />,
  };

  const renderSubComponents = {
    '2-0':<AwardsBaner />,
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
              <Aw />
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
