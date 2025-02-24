import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./header.scss";
import { NavLink } from 'react-router-dom';
import logo from "../../shared/images/logo.svg";
import HeaderNav from './components/HeaderNav';
import { Navigations } from '../../features';
import { fetchPageData, setSelected, setSelectedSub } from '../../app/redux/slices/navSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const { navElements, selected, selectedSub, page } = useSelector(state => state.nav);

  // Состояния для двух бургер-меню
  const [isMainNavOpen, setIsMainNavOpen] = useState(false);
  const [isSecondNavOpen, setIsSecondNavOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPageData('activity'));
  }, [dispatch]);

  useEffect(() => {
    document.body.style.overflow = isMainNavOpen || isSecondNavOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMainNavOpen, isSecondNavOpen]);

  const toggleMainNav = () => {
    setIsMainNavOpen(!isMainNavOpen);
    if (!isMainNavOpen) {
      setIsSecondNavOpen(false);
    }
  };

  const toggleSecondNav = () => {
    setIsSecondNavOpen(!isSecondNavOpen);
    if (!isSecondNavOpen) {
      setIsMainNavOpen(false);
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header_bottom">
          {/* Левый бургер для основной навигации */}
          <button
            className={`burger-menu left ${isMainNavOpen ? 'active' : ''}`}
            onClick={toggleMainNav}
          >
            <span></span>
          </button>

          <img src={logo} alt="Logo " className='logo' />

          {/* Правый бургер для доп. меню */}
          <button
            className={`burger-menu right ${isSecondNavOpen ? 'active' : ''}`}
            onClick={toggleSecondNav}
          >
            <span></span>
          </button>

          {/* Левое меню (основная навигация) */}
          <div className={`mobile-nav left-menu ${isMainNavOpen ? 'active' : ''}`}>
            <Navigations
              page={page}
              selected={selected}
              setSelected={(selected) => {
                dispatch(setSelected(selected));
                setIsMainNavOpen(false);
              }}
              selectedSub={selectedSub}
              setSelectedSub={(selectedSub) => dispatch(setSelectedSub(selectedSub))}
              list={navElements}
            />
          </div>

          {/* Правое меню */}
          <div className={`mobile-nav right-menu ${isSecondNavOpen ? 'active' : ''}`}>
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
  );
};
