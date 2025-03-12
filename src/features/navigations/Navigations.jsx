import { useState, useEffect } from 'react';
import './navigations.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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
        {isNavOpen ? <SlArrowUp /> : <SlArrowDown />}
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
                    <div className="">

                      {openEventId === index ? <SlArrowUp /> : <SlArrowDown />}
                    </div>
                  )}
                </button>
                <AnimatePresence>
                  {openEventId === index && item.twoLink?.length > 0 && (
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
                              className={`sub-nav-element ${selected === index && selectedSub === subIndex ? 'active' : ''}`}
                            >
                              {subItem.link}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    </motion.div>
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
