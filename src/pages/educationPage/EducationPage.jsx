import { useState } from 'react';
import { AwardsCard,  Navigations } from '../../features';
import { AwardsBaner } from '../../widgets/awardsSection';
import "../awardsPage/awardsPage.scss";
import { Table } from '../../widgets/educationSection';

export const EducationPage = () => {
  const navElements = [
    { link: 'Среднее профессиональное образование' },
    { link: 'Высшее профессиональное образование' },
    {
      link: 'Магистатура',
    
    },
    {
      link: 'Докторантура', 
      twoLink: [
        { link: '?' },
        { link: '?' }
      ]
    },{
      link:"Дополнительная профессиональное образование"
    },{
      link:"Курсы"
    },{
      link:"Библиотека"
    }
   
  ];

  const [selected, setSelected] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);

  const page = "Образование";

  const title =
    selected === null
      ? "Все"
      : selectedSub !== null
        ? navElements[selected]?.twoLink[selectedSub]?.link
        : navElements[selected]?.link;

  const renderComponents = {
    0: <Table />,
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
              <Table/>
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