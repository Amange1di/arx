import { useState, useEffect } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiMapPinFill } from "react-icons/ri";
import { WiTime3 } from "react-icons/wi";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import "./header.scss";
import logo from "../../shared/images/logo.svg";
import { NavLink } from "react-router-dom";
import { Search } from "../../features";

const headerMenu = [
  { name: "Главное ", path: "/" },
  { name: "Об академии ", path: "/about-academy" },
  { name: "Руководство ", path: "/guide" },
  { name: "Образование ", path: "/education" },
  { name: "Наука ", path: "/science" },
  { name: "Деятельность ", path: "/activity " },
  { name: "Студенты ", path: "/students" },
  { name: "Абитуриентам ", path: "/applicants" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.burger-menu')) {
        setIsOpen(false);
      }
      if (isSearchVisible && !event.target.closest('.search-component') && !event.target.closest('.header_bottom_group_icon')) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isSearchVisible]);

  useEffect(() => {
    if (isOpen || isSearchVisible) { // Изменено условие
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isSearchVisible]); 

  const handleMenuItemClick = () => {
    setIsOpen(false);
    setIsSearchVisible(false)
  };

  const handleSearchOpen = () => {
    setIsSearchVisible(true);
    setIsOpen(false);
  };

  const renderMenu = () => (
    headerMenu.map((page) => (
      <NavLink
        key={page.name}
        to={page.path}
        className={({ isActive }) =>
          isActive ? "header_bottom_link nav-active" : "header_bottom_link"
        }
        onClick={handleMenuItemClick}
      >
        {page.name}
      </NavLink>
    ))
  );

  return (
    <div className="header">
      {isSearchVisible && (
        <div className="search-component">
          <Search onClose={() => setIsSearchVisible(false)} />
        </div>
      )}

      <div className="header_top">
        <div className="container">
          <div>
            <BiSolidPhoneCall className="header_top_icon" />
            <a href="">+996704589591</a>
          </div>
          <div>
            <RiMapPinFill className="header_top_icon" />
            <a href="https://go.2gis.com/vkwNw">г.Бишкек-ул. А.Юнусова 134</a>
          </div>
          <div>
            <WiTime3 className="header_top_icon" />
            <p>Понедельник-Суббота 10:00-22:00</p>
          </div>
          <div>
            <LuInstagram className="header_top_icon" />
            <FaTwitter className="header_top_icon" />
            <FaFacebook className="header_top_icon" />
            <FaWhatsapp className="header_top_icon" />
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container header_bottom_group">
          <img src={logo} className="logo" alt="logo" />
          <nav className="desktop-menu">
            {renderMenu()}
          </nav>
          <div className="header-desktop-controls">
            <select>
              <option value="en">En</option>
              <option value="kg">Kg</option>
              <option value="ru">Ru</option>
            </select>
            <div className="header-desktop-controls-icon">


              <IoSearch
                className="header_bottom_group_icon"
                onClick={handleSearchOpen}
              />
              <FaEyeSlash className="header_bottom_icon" />
            </div>
          </div>

          <div className="burger-menu">
            <input
              id="menu__toggle"
              type="checkbox"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
            />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <div className={`menu__box ${isOpen ? 'open' : ''}`}>
              <div className="mobile-header">
                <img src={logo} className="logo" alt="logo" />
                <div className="header-controls">
                  <select>
                    <option value="en">En</option>
                    <option value="kg">Kg</option>
                    <option value="ru">Ru</option>
                  </select>
                  <IoSearch
                    className="header_bottom_icon"
                    onClick={handleSearchOpen}
                  />
                  <FaEyeSlash className="header_bottom_icon" />
                </div>

              </div>
              <nav className="mobile-menu">
                {renderMenu()}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
