import { NavLink } from "react-router-dom";
import logo from '../../features/images/logo_footer.png';
import Geeks from '../../features/images/Geeks.png';
import "./Footer.scss";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiMapPinFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";  

import { useTranslation } from "react-i18next";

export const Footer = () => {
  const [adres, setAdres] = useState([])
  const { t } = useTranslation();

  useEffect(() => {
    axios.get('http://92.118.114.178/ru/api/v1/main/settings/')
      .then((response) => {
        setAdres((response.data))
        
      })
      .catch(() => {})
  }, [])
  
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-flex">
          <div className="footer-navigation">
            <div className="footer-list">
              <h3 className="footer-title">{t("Навигация")}</h3>
              <li className="link-li">
                <NavLink to="/about-academy" className={({ isActive }) => isActive ? "active" : ""}>
                  {t("Об академии")}
                </NavLink>
              </li>
              <li className="link-li">
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>
                  {t("Галерея")}
                </NavLink>
              </li>
              <li className="link-li">
                <NavLink to="/academy" className={({ isActive }) => isActive ? "active" : ""}>
                  {t("Новости")}
                </NavLink>
              </li>
              <li className="link-li">
                <NavLink to="/activity" className={({ isActive }) => isActive ? "active" : ""}>
                  {t("Деятельность")}
                </NavLink>
              </li>
            </div>
          </div>

          <div className="footer-navigation-2">

            <li className="link-li">
              <NavLink to="/management" className={({ isActive }) => isActive ? "active" : ""}>
                {t("Руководство")}
              </NavLink>
            </li>
            <li className="link-li">
              <NavLink to="/students" className={({ isActive }) => isActive ? "active" : ""}>
                {t("Студенты")}
              </NavLink>
            </li>
            <li className="link-li">
              <NavLink to="/education" className={({ isActive }) => isActive ? "active" : ""}>
                {t("Образование")}
              </NavLink>
            </li>
            <li className="link-li">
              <NavLink to="/research" className={({ isActive }) => isActive ? "active" : ""}>
                {t("Иследование")}
              </NavLink>
            </li>
            <li className="link-li" id="go-back">
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                {t("Вернуться обратно")}
              </NavLink>
            </li>
          </div>
        </div>

        <div className="footer-contact">
          <h3 className="footer-title-2">{t("Контакты")}</h3>
          <ul className="contact-info">
            <li className="link-li-2">
              <BiSolidPhoneCall /> +996704589591
            </li>
            {adres.map((item, id) => (
              <div className="d" key={id}>  
                <li className="link-li-2">
                  <MdOutlineMailOutline /> {item.email_footer}
                </li>
                <li className="link-li-2">
                  <RiMapPinFill /> {item.location}
                </li>
              </div>
            ))}

          </ul>
        </div>

        <div className="footer-logo">
          <div className="logo-circle">
            <img src={logo} alt="" className="logo-circle" />
          </div>
        </div>
      </div>

        <a href="https://geeks.kg/">
      <div className="footer-bottom">
        <p>Made by <strong>Geeks Pro</strong></p>ㅤ
        <img src={Geeks} alt="geeks_logo ❤" />
      </div>
        </a>
    </footer>
  );
};
