import React from 'react'
import { NavLink } from 'react-router-dom'
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
const HeaderNav = () => {
  return (
    <div>
          {headerMenu.map((page) => (
            <div className='
            header_bottom_itemm'
              key={page.name}
            >
              <NavLink className="header_bottom_item_link" to={page.path} target={page?.target}>
                <button>{page.name}</button>
              </NavLink></div>))}
    </div>
  )
}

export default HeaderNav