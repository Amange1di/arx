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



const headerMenu = [
  { name: "Главное ", path: "/" },
  { name: "Об академии ", path: "/about-academy" },
  { name: "Руководство ", path: "/guide" },
  { name: "Образование ", path: "/education" },
  { name: "Наука ", path: "/science" },
  { name: "Деятельность ", path: "/activity " },
  { name: "Студенты ", path: "/students" },
  { name: "Абитуриентам ", path: "/applicants" },
]

export const Header = () => {
  return (
    <div className="header">
      <div className="header_top">
        <div className="container">
          <div>
            <BiSolidPhoneCall className="header_top_icon" />
            <a href="">+996704589591</a>
          </div>
          <div>
            <RiMapPinFill className="header_top_icon" />
            <a href="">г.Бишкек-ул. А.Юнусова 134</a>
          </div>
          <div>
            <WiTime3 className="header_top_icon" />
            <a href="">Понедельник-Суббота 10:00-22:00</a>
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
        <div className="container">
          <img src={logo} alt="" />
          {headerMenu.map((page) => (
           
              <NavLink    key={page.name} className="header_bottom_link" to={page.path} target={page?.target}>
                <button className="header_bottom_link_btn">{page.name}</button>
              </NavLink>))}
          <div>
            <select name="" id="">
              <option value="">En</option>
              <option value="">Kg</option>
              <option value="">Ru</option>
            </select>
            <IoSearch  className="header_bottom_icon"/>
            <FaEyeSlash className="header_bottom_icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
