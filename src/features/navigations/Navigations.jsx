import React, { useState } from 'react';
import './navigations.scss';
import openIcon from "../../shared/images/hideIcon.svg";
import hideIcon from "../../shared/images/openIcon.svg";

export const Navigations = ({
  list,
  selected,
  setSelected,
  selectedSub,
  setSelectedSub,
  page
}) => {
  const [openEventId, setOpenEventId] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleMainCategoryClick = (index) => {
    setSelected(index);
    setSelectedSub(null);
    setOpenEventId(openEventId === index ? null : index);
  };

  return (
    <div className='navigations'>
      <button
        className='navigations_btn'
        onClick={() => {
          const shouldClose = isNavOpen;
          setIsNavOpen(!isNavOpen);
          if (shouldClose) {
            setSelected(null);
            setSelectedSub(null);
            setOpenEventId(null);
          }
        }}
      >
        {page}
        <img className='open' src={isNavOpen ? hideIcon : openIcon} />
      </button>

      {isNavOpen && ( 
        <aside className='nav-container'>
          {list.map((item, index) => (
            <div key={index} className='nav-item'>
              <button
                onClick={() => handleMainCategoryClick(index)}
                className={`nav-element ${selected === index ? 'active' : ''}`}
              >
                {item.link}
                {item.twoLink && item.twoLink.length > 0 && (
                  <img className='open' src={openEventId === index ? hideIcon : openIcon} />
                )}
              </button>

              {openEventId === index && item.twoLink && item.twoLink.length > 0 && (
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
      )}
    </div>
  );
};
