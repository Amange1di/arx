import React from 'react';
import './navigations.scss';

export const Navigations = ({
  list,
  selected,
  setSelected,
  selectedSub,
  setSelectedSub,
  page
}) => {
  const handleMainCategoryClick = (index) => {
    setSelected(index);
    setSelectedSub(null); 
  };

  return (
    <div className='awardsNavigations'>
      <button
        className='awardsNavigations_btn'
        onClick={() => {
          setSelected(null);
          setSelectedSub(null); 
        }}
      >
        {page}
      </button>
      <aside className='nav-container'>
        {list.map((item, index) => (
          <div key={index} className='nav-item'>
            <button
              onClick={() => handleMainCategoryClick(index)}
              className={`nav-element ${selected === index ? 'active' : ''}`}
            >
             {item.link}
             
            </button>

            {selected === index && item.twoLink && item.twoLink.length > 0 && (
              <ul className='sub-links'>
                {item.twoLink.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <button
                      onClick={() => setSelectedSub(subIndex)}
                      className={`sub-nav-element ${
                        selectedSub === subIndex ? 'active' : ''
                      }`}
                    >
                      {subItem.link}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </aside>
    </div>
  );
};
