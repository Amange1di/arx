import { useState, useEffect } from 'react';
import './navigations.scss';
import hideIcon from "../../shared/images/hideIcon.svg";
import openIcon from "../../shared/images/openIcon.svg";
import { AnimatePresence, motion } from 'framer-motion';

export const Navigations = ({
  list = [],
  selected = null,
  setSelected,
  selectedSub = null,
  setSelectedSub = null,
  page = ''
}) => {
  const [openEventId, setOpenEventId] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (selected !== null && list[selected]?.twoLink?.length > 0) {
      setOpenEventId(selected);
    }
  }, [selected, list]);

  const handleMainCategoryClick = (index) => {
    const hasSubMenu = list[index].twoLink?.length > 0;

    if (hasSubMenu) {
      setOpenEventId(openEventId === index ? null : index);
      setSelected(index);
      if (setSelectedSub) {
        setSelectedSub(0);
      }
    } else {
      setSelected(index);
      if (setSelectedSub) {
        setSelectedSub(null);
      }
      setOpenEventId(null);
    }

    if (isMobile) {
      setIsNavOpen(!isNavOpen);
    }
  };

  const handleSubClick = (subIndex, mainIndex) => {
    setSelected(mainIndex);
    if (setSelectedSub) {
      setSelectedSub(subIndex);
    }
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className='navigations'>
      <button
        type="button"
        className='navigations_btn'
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {page}
        <img
          src={isNavOpen ? hideIcon : openIcon}
          alt={isNavOpen ? 'Hide menu' : 'Show menu'}
        />
      </button>

      <AnimatePresence>
        {isNavOpen && (
          <motion.aside
            className='nav-container visible'
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {list.map((item, index) => (
              <div key={index} className='nav-item'>
                <button
                  type="button"
                  onClick={() => handleMainCategoryClick(index)}
                  className={`nav-element ${item.twoLink?.length > 0
                    ? selected === index && selectedSub === null ? 'active' : ''
                    : selected === index ? 'active' : ''
                    }`}
                >
                  {item.link}
                  {item.twoLink?.length > 0 && (
                    <img
                      className='open'
                      src={openEventId === index ? openIcon : hideIcon}
                      alt={openEventId === index ? 'Hide submenu' : 'Show submenu'}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {openEventId === index && item.twoLink?.length > 0 && (
                    <motion.ul
                      className='sub-links'
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.twoLink.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <button
                            type="button"
                            onClick={() => handleSubClick(subIndex, index)}
                            className={`sub-nav-element ${selected === index && selectedSub === subIndex ? 'active' : ''
                              }`}
                          >
                            {subItem.link}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};
