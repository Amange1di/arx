import React, { useState, useEffect } from 'react';
import './navigations.scss';
import openIcon from "../../shared/images/hideIcon.svg";
import hideIcon from "../../shared/images/openIcon.svg";
import { animate, AnimatePresence, motion } from 'framer-motion';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMainCategoryClick = (index) => {
    setSelected(index);
    setSelectedSub(null);
    setOpenEventId(openEventId === index ? null : index);
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  const handleSubClick = (subIndex) => {
    setSelectedSub(subIndex);
    if (isMobile) {
      setIsNavOpen(false);
    }
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

        <AnimatePresence>
        {
          isNavOpen ? (
            <motion.aside 
              className='nav-container visible'
              initial={{height: 0}}
              animate={{ height: 'auto' }}
              exit={{height: 0}}
              transition={{all: 0.5}}
              >
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
                    <motion.ul 
                      className='sub-links'
                      initial={{height: 0}}
                      animate={{ height: 'auto' }}
                      exit={{height: 0}}
                      transition={{all: 0.5}}
                      >
                      {item.twoLink.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <button
                            onClick={() => handleSubClick(subIndex)}
                            className={`sub-nav-element ${selectedSub === subIndex ? 'active' : ''
                              }`}
                          >
                            {subItem.link}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              ))}
            </motion.aside>
          ) 
          : ''
        }
        </AnimatePresence>
       
      
    </div>
  );
};
