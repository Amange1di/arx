import React from 'react';
import './awardsNavigations.scss';

export const AwardsNavigations = ({ 
  list, 
  selected, 
  setSelected, 
  page
}) => { 
  return (
    <div className='awardsNavigations'>
      <h2>{page} </h2> 
      <aside className='nav-container'>
        {list.map((item, index) => ( 
          <button
            onClick={() => setSelected(index)} 
            key={index} 
            className={`nav-element ${selected === index ? 'active' : ''}`} 
          >
            <strong>
              <p>{item.link}</p>
            </strong>
          </button>
        ))}
      </aside>
    </div>
  );
};
