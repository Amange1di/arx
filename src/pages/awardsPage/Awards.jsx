import { useState } from 'react';
import { AwardsCard, Aw, AwardsCardTwo, Navigations } from '../../features';
import { AwardsBaner } from '../../widgets/awardsSection';
import "./awardsPage.scss";

export const Awards = () => {
  const navElements = [
    {
      link: 'Воспитательная'},
    { link: 'Просветительская' },
    { link: 'Издательская' }
  ];

  const [selected, setSelected] = useState(null);
  const page = "Деятельность";

  const title = selected === null ? "Все" : navElements[selected]?.link;

  const renderComponents = {
    0: <AwardsCard />,
    1: <AwardsCardTwo />,
    2: <Aw />
  };

  return (
    <div className='awards'>
      <Navigations page={page} selected={selected} setSelected={setSelected} list={navElements} />
      <div>
        <div className="content">
          {selected === null ? (
            <>
              <AwardsBaner />
              <h2 className='title'>{title}</h2>
              <AwardsCard />
              <Aw />
            </>
          ) : (
            <>
              <h2 className='title' >{title}</h2>
              {renderComponents[selected]}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
