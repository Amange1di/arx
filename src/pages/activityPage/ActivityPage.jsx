import { useState } from 'react';
import { AwardsCard,  Navigations } from '../../features';
import { AwardsBaner } from '../../widgets/awardsSection';
import "./activityPage.scss"

export const ActivityPage = () => {
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
