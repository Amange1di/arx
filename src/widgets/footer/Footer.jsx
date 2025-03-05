import { Link } from "react-router-dom";
import phone from "../../features/images/phone.svg";
import email from "../../features/images/email.svg";
import adress from "../../shared/images/footer/adres.png";
import logo from '../../features/images/logo_footer.png';
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-flex">
        <div className="footer-navigation">
          <div className="footer-list">
          
              <h3 className="footer-title">Навигация</h3>
              <li className="link-li">
                <Link to="/about">О нас</Link>
              </li>
              <li className="link-li">
                <Link to="/gallery">Галерея</Link>
              </li>
              <li className="link-li">
                <Link to="/about-academy">Об академии</Link>
              </li>
              <li className="link-li">
                <Link to="/events">Мероприятия</Link>
              </li>
              <li className="link-li">
                <Link to="/activity">Награды</Link>
              </li>
           
          </div>
        </div>
        
        <div className="footer-navigation-2">
            <h3 className="footer-title">ㅤ</h3>
            <li className="link-li">
              <Link to="/management">Руководство</Link>
            </li>
            <li className="link-li">
              <Link to="/students">Студенты</Link>
            </li>
            <li className="link-li">
              <Link to="/education">Образование</Link>
            </li>
            <li className="link-li">
              <Link to="/research">Иследование</Link>
            </li>
            <li className="link-li">
              <Link to="/">Вернуться обратно</Link>
            </li>
        </div>
        </div>
        
        <div className="footer-contact">
          <h3 className="footer-title-2">Контакты</h3>
          <ul className="contact-info">
            <li className="link-li-2">
              <img src={phone} alt="" /> +996704589591
            </li>
            <li className="link-li-2">
              <img src={email} alt="" /> shadow201@gmail.com
            </li>
            <li className="link-li-2">
              <img src={adress} alt="" /> М. Аматова 15
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <div className="logo-circle">
            <img src={logo} alt="" className="logo-circle"/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">Made by<p>ㅤGeeks Pro</p></div>
    </footer>
  );
};