import { Link } from "react-router-dom";
import logo from '../../features/images/logo_footer.png';
import Geeks from '../../features/images/Geeks.png';
import "./Footer.scss";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiMapPinFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

import { useTranslation } from "react-i18next";

export const Footer = () => {
      const { t } = useTranslation(); 
  
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-flex">
        <div className="footer-navigation">
          <div className="footer-list">
          
              <h3 className="footer-title">{t("Навигация")}</h3>
              <li className="link-li">
                <Link to="/about-academy">{t("Об академии")}</Link>
              </li>
              <li className="link-li">
                <Link to="/gallery">{t("Галерея")}</Link>
              </li>
              <li className="link-li">
                <Link to="/academy">{t("Новости")}</Link>
              </li>
              <li className="link-li">
                <Link to="/events">{t("Мероприятия")}</Link>
              </li>
              <li className="link-li">
                <Link to="/activity">{t("Деятельность")}</Link>
              </li>
           
          </div>
        </div>
        
        <div className="footer-navigation-2">
            <h3 className="footer-title">ㅤ</h3>
            <li className="link-li">
              <Link to="/management">{t("Руководство")}</Link>
            </li>
            <li className="link-li">
              <Link to="/students">{t("Студенты")}</Link>
            </li>
            <li className="link-li">
              <Link to="/education">{t("Образование")}</Link>
            </li>
            <li className="link-li">
              <Link to="/research">{t("Иследование")}</Link>
            </li>
            <li className="link-li" id="go-back">
              <Link to="/">{t("Вернуться обратно")}</Link>
            </li>
        </div>
        </div>
        
        <div className="footer-contact">
          <h3 className="footer-title-2">{t("Контакты")}</h3>
          <ul className="contact-info">
            <li className="link-li-2">
              <BiSolidPhoneCall/> +996704589591
            </li>
            <li className="link-li-2">
              <MdOutlineMailOutline/> shadow201@gmail.com
            </li>
            <li className="link-li-2">
              <RiMapPinFill /> М. Аматова 15
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <div className="logo-circle">
            <img src={logo} alt="" className="logo-circle"/>
          </div>
        </div>
      </div>
    
      <div className="footer-bottom" ><p>Made by <strong>Geeks Pro</strong></p>ㅤ<img src={Geeks} alt="geeks_logo ❤" /></div>
  </footer>
  )
}
