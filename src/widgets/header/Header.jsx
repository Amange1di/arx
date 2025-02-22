import React from 'react'
import "./header.scss"
import { NavLink } from 'react-router-dom'
import logo from "../../shared/images/logo.svg"
import koz from "../../shared/images/koz.svg"

const headerMenu = [
  {
    name: "Главное ",
    path: "/"
  },
  {
    name: "Об академии ",
    path: "/about-academy"
  },
  {
    name: "Руководство ",
    path: "/guide"
  },
  {
    name: "Образование ",
    path: "/education"
  },
  {
    name: "Наука ",
    path: "/science"
  },
  {
    name: "Деятельность ",
    path: "/activity "
  },
  {
    name: "Студенты ",
    path: "/students"
  },
  {
    name: "Абитуриентам ",
    path: "/applicants"
  },
]
export const Header = () => {
  return (
    <div className='header  '>
      <div className="container">
        <div className="header_top">
          <div className="header_top_phone">
            {/* <img src={phone} alt="" /> */}
            <a href="">+996704589591</a>
          </div>
          <div className="header_top_data">
            <p>18 Января   2025г.</p>
            <p>18 Раджаба 1446г.</p>
          </div>
          <div className="header_top_social">
            {/* <img src={} alt="" />
            <img src={} alt="" />
            <img src={} alt="" />
            <img src={} alt="" /> */}
          </div>
        </div>
        <div className="header_bottom">
          <img src={logo} alt="" />
          <div className="header_bottom_item">
          {headerMenu.map((page) => (
            <div
              key={page.name}
            >
              <NavLink className="header_bottom_item_link" to={page.path} target={page?.target}>
                <button>{page.name}</button>
              </NavLink></div>))}
          </div>
          <div>
            <div>

              <select className='header_bottom_select'>
                <option value="">En</option>
                <option value="">Ru</option>
                <option value="">Kg</option>
              </select>

              <button><img src={koz} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
