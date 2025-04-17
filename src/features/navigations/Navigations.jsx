import { useState, useEffect } from 'react';
import './navigations.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

export const Navigations = ({
  list = [],
  selected = null,
  setSelected,
  selectedSub = null,
  setSelectedSub = null,
  page = '',
  res = false,
  selectedIndex = null
}) => {
  const location = useLocation();
  const [selectedState, setSelectedState] = useState(null);
  const [openEventId, setOpenEventId] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      setSelectedState(selectedIndex);
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (location.state) {
      const { selectedIndex: locationSelectedIndex, navElements } = location.state;
      if (locationSelectedIndex !== undefined) {
        setSelectedState(locationSelectedIndex);
      }
    }
  }, [location.state]);

  const navigationList = location.state?.navElements || list;

  const handleMainCategoryClick = (index) => {
    const hasSubMenu = navigationList[index]?.twoLink?.length > 0;
    setSelectedState(index);
    setSelected?.(index);
    setSelectedSub?.(hasSubMenu ? 0 : null);
    setOpenEventId((prev) => (prev === index ? null : index));
    isMobile && setIsNavOpen(!isNavOpen);
  };

  const handleSubClick = (subIndex, mainIndex) => {
    setSelectedState(mainIndex);
    setSelected?.(mainIndex);
    setSelectedSub?.(subIndex);
    isMobile && setIsNavOpen(false);
  };

  const handleButtonClick = () => {
    setIsNavOpen(!isNavOpen);
    if (res) {
      setSelected?.(null);
      if (setSelectedSub) {
        setSelectedSub(null);
      }
      setOpenEventId(null);
    }
  };

  return (
    <div className='navigations'>
      <div className="navigation_group">
        <button
          type="button"
          className='navigations_btn'
          onClick={handleButtonClick}
        >
          {/* {page} */}
          {t(page)}
          <span>
            {isNavOpen ? <SlArrowUp /> : <SlArrowDown />}
          </span>
        </button>

        <AnimatePresence>
          {isNavOpen && (
            <motion.aside
              className='nav-container visible'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {navigationList.map((item, index) => {
                const isMainActive = selectedState === index;
                const isOpen = openEventId === index;

                return (
                  <div key={index} className='nav-item'>
                    <button
                      type="button"
                      onClick={() => handleMainCategoryClick(index)}
                      className={`nav-element ${isMainActive ? 'active' : ''}`}
                    >
                      {t(item.link || item.title || item.type)}
                      {item.twoLink?.length > 0 && (
                        <span>{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && item.twoLink?.length > 0 && (
                        <motion.div
                          className="sub-links"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <motion.ul>
                            {item.twoLink.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <button
                                  type="button"
                                  onClick={() => handleSubClick(subIndex, index)}
                                  className={`sub-nav-element ${selectedSub === subIndex ? 'active' : ''}`}
                                >
                                  {t(subItem.link || subItem.title)}
                                </button>
                              </li>

                            ))}
                          </motion.ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
